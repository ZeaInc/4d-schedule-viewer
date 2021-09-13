const {
  Registry,
  StringParameter,
  TreeItemParameter,
  SelectionSet,
  BaseGeomItem,
} = zeaEngine;
const { CADPart } = zeaCad;
import QueryParameter from "./QueryParameter.js";
// import {
//   SelectionSet,
//   SelectionRule,
//   SelectionSetsRoot,
//   SelectionSetFolder,
// } from "./SelectionSet.js";

import {
  QUERY_TYPES,
  QUERY_MATCH_TYPE,
  QUERY_LOGIC,
} from "./QueryParameter.js";
import { QuerySet } from "./QuerySetParameter.js";

// Guessed based on the values of "Struct-Fndn-Concrete Slabs_Walls_Columns"
// Structural Foundations == NEGATE
// Concrete-Rectangular-Column == OR
const NAVISWORKS_FLAGS = {
  // IGNORE_STRING_VALUE_CASE: 1<<0,
  // IGNORE_STRING_DIACRITICS: 1<<1,
  // IGNORE_VALUE_CHARACTER_WIDTHS: 1<<2,
  // IGNORE_CATEGORY_USER_NAME: 1<<3,
  // IGNORE_CATEGORY_INTERNAL_NAME: 1<<4,
  // IGNORE_PROPERTY_USER_NAME: 1<<5,
  // IGNORE_PROPERTY_INTERNAL_NAME: 1<<6,

  NEGATE_CONDITION: 32,
  OR_CONDITION: 64,
  REGEX_CONDITION: 128,
};

/** Class representing an advanced group in the scene tree.
 * @extends Group
 */
export default class IFCSelSet extends SelectionSet {
  /**
   * Create an advanced group.
   * @param {string} name - The name of the advanced group.
   */
  constructor(name) {
    super(name);

    this.__searchRootParam = this.insertParameter(
      new TreeItemParameter("SearchRoot"),
      0
    );
    this.__searchRootParam.on("valueChanged", (event) => {
      this.resolveQueries();
    });

    this.__searchSetParam = this.insertParameter(new QuerySet("Queries"), 1);
    this.__searchSetParam.on("valueChanged", (event) => {
      this.resolveQueries();
    });
  }

  /**
   * Sets the owner of the advanced group
   * @param {any} owner - The owner.
   */
  setOwner(owner) {
    super.setOwner(owner);

    if (this.__searchRootParam.getValue() == undefined)
      this.__searchRootParam.setValue(owner);
  }

  // ////////////////////////////////////////
  // Items

  /**
   * The resolveQueries mothod.
   */
  resolveQueries() {
    const searchRoot = this.__searchRootParam.getValue();
    if (searchRoot == undefined) return;

    const queries = Array.from(this.__searchSetParam.getValue());
    if (queries.length == 0) return;

    let result = [];
    let set = []; // Each time we hit an OR operator, we start a new set.
    let prevset = [];
    let first = true;
    // Filter it down, and then merge into result.
    queries.forEach((query, index) => {
      try {
        if (!query.getEnabled() || query.getValue() == "") return;

        const negate = query.getNegate();
        const applyTest = (res, item) => {
          if (negate && !res) {
            set.push(item);
            return true;
          } else if (!negate && res) {
            set.push(item);
            return true;
          }
          return false;
        };
        // If we hit an 'OR' query, we want the prevset
        // to the set generated before the previous query.
        // So: TestA && TestB || TestC
        if (query.getLocicalOperator() == QUERY_LOGIC.AND) {
          prevset = set;
        }
        if (first || query.getLocicalOperator() == QUERY_LOGIC.NEWSET) {
          first = false; // The first enabled query.
          result = result.concat(set);
          set = [];

          switch (query.getQueryType()) {
            case QUERY_TYPES.PATH: {
              if (query.getMatchType() == QUERY_MATCH_TYPE.EXACT) {
                const path = query.getValue();
                const treeItem = searchRoot.resolvePath(path);
                if (treeItem) {
                  set.push(treeItem);
                } else {
                  console.warn("Group could not resolve item:" + path);
                }
              } else if (query.getMatchType() == QUERY_MATCH_TYPE.REGEX) {
                const regex = query.getRegex();
                const searchRootPath = searchRoot.getPath();
                searchRoot.traverse((item) => {
                  const itemPath = item.getPath().slice(searchRootPath.length);
                  if (
                    applyTest(regex.test(String(itemPath)), item) ||
                    item instanceof CADPart
                  ) {
                    return false;
                  }
                }, false);
              }
              break;
            }
            case QUERY_TYPES.NAME: {
              const regex = query.getRegex();
              searchRoot.traverse((item) => {
                if (
                  applyTest(regex.test(item.getName()), item) ||
                  item instanceof CADPart
                ) {
                  return false;
                }
              }, false);
              break;
            }
            case QUERY_TYPES.PROPERTY: {
              const regex = query.getRegex();
              searchRoot.traverse((item) => {
                let res = false;
                if (item.hasParameter(query.getPropertyName())) {
                  const prop = item.getParameter(query.getPropertyName());
                  if (
                    prop instanceof StringParameter &&
                    regex.test(prop.getValue())
                  )
                    res = true;
                }
                if (applyTest(res, item) || item instanceof CADPart) {
                  return false;
                }
              }, false);
              break;
            }
            case QUERY_TYPES.LEVEL: {
              const regex = query.getRegex();
              const searchRootPath = searchRoot.getPath();
              searchRoot.traverse((item) => {
                const itemPath = item.getPath().slice(searchRootPath.length);

                if (
                  applyTest(
                    itemPath.length > 4 && regex.test(itemPath[3]),
                    item
                  ) ||
                  item instanceof CADPart
                ) {
                  return false;
                }
              }, false);
              break;
            }
            case QUERY_TYPES.LAYER: {
              const value = query.getValue();
              searchRoot.traverse((item) => {
                if (
                  (item instanceof BaseGeomItem &&
                    applyTest(item.getLayers().indexOf(value) != -1, item)) ||
                  item instanceof CADPart
                ) {
                  return false;
                }
              }, false);
              break;
            }
            case QUERY_TYPES.MATERIAL: {
              const regex = query.getRegex();
              searchRoot.traverse((item) => {
                let res = false;
                if (item.hasParameter("material")) {
                  const material = item.getParameter("material").getValue();
                  if (regex.test(material.getName())) res = true;
                }
                if (applyTest(res, item) || item instanceof CADPart) {
                  return false;
                }
              }, false);
              break;
            }
          }
        } else {
          switch (query.getQueryType()) {
            case QUERY_TYPES.PATH: {
              const regex = query.getRegex();
              const f = (item) =>
                negate
                  ? !regex.test(item.getPath())
                  : regex.test(item.getPath());

              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f);
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f));
              break;
            }
            case QUERY_TYPES.NAME: {
              const regex = query.getRegex();
              const f = (item) =>
                negate
                  ? !regex.test(item.getName())
                  : regex.test(item.getName());

              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f);
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f));
              break;
            }
            case QUERY_TYPES.PROPERTY: {
              const regex = query.getRegex();
              const f = (item) => {
                let res = false;
                if (item.hasParameter(query.getPropertyName())) {
                  const prop = item.getParameter(query.getPropertyName());
                  // Note: the property must be a string property.
                  if (
                    prop instanceof StringParameter &&
                    regex.test(prop.getValue())
                  )
                    res = true;
                }
                return negate ? !res : res;
              };
              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f);
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f));
              break;
            }
            case QUERY_TYPES.LEVEL: {
              const searchRootPath = searchRoot.getPath();
              const regex = query.getRegex();
              const f = (item) => {
                let res = false;
                const itemPath = item.getPath().slice(searchRootPath.length);
                if (itemPath.length > 4 && regex.test(itemPath[3])) res = true;
                return negate ? !res : res;
              };
              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f);
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f));
              break;
            }
            case QUERY_TYPES.LAYER: {
              const value = query.getValue();
              const f = (item) => {
                let res = false;
                if (item.getLayers().indexOf(value) != -1) res = true;
                return negate ? !res : res;
              };
              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f);
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f));
              break;
            }
            case QUERY_TYPES.MATERIAL: {
              const regex = query.getRegex();
              const f = (item) => {
                let res = false;
                if (item.hasParameter("material")) {
                  const material = item.getParameter("material").getValue();
                  if (regex.test(material.getName())) res = true;
                }
                return negate ? !res : res;
              };
              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f);
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f));
              break;
            }
          }
        }
      } catch (e) {
        // continue...
        console.warn(e.message);
      }
    });
    result = result.concat(set);
    // result.forEach((item) => {
    //   // console.log(item.getPath())
    //   this.addItem(item);
    // });
    this.setItems(new Set(result));
  }

  // ////////////////////////////////////////
  // Persistence

  loadXML(xmlNode, assets, searchRoot) {
    if (searchRoot) {
      // TODO: EAch group should inherit off its parent.
      this.getParameter("SearchRoot").setValue(searchRoot);
    }

    const findSpec = xmlNode.children[0];
    const mode = findSpec.getAttributeNode("mode").value;
    if (mode == "all") {
      // selectionSet.setRuleCombineMode(SelectionSet.RULES_COMBINE_MODE.AND);
    } else if (mode == "some") {
      // selectionSet.setRuleCombineMode(SelectionSet.RULES_COMBINE_MODE.OR);
    }

    const conditions = findSpec.children[0];
    for (let i = 0; i < conditions.children.length; i++) {
      const condition = conditions.children[i];
      // const rule = new SelectionRule();

      const query = new QueryParameter();
      if (i == 0) {
        query.setLocicalOperator(QueryParameter.QUERY_LOGIC.NEWSET);
      }
      // query.setMatchType(QueryParameter.QUERY_MATCH_TYPE.REGEX)

      if (condition.getAttributeNode("test").value == "equals") {
        query.setMatchType(QueryParameter.QUERY_MATCH_TYPE.EXACT);
      } else if (condition.getAttributeNode("test").value == "contains") {
        query.setMatchType(QueryParameter.QUERY_MATCH_TYPE.REGEX);
      } else if (condition.getAttributeNode("test").value == "not_equals") {
        query.setNegate(true);
      }

      ///////////////////
      // Rule Type
      const propElement = condition.getElementsByTagName("property");
      const propType =
        propElement[0].children[0].getAttributeNode("internal").value;
      // const propType = propElement[0].children[0].textContent;
      const propValue = propElement[0].children[0].textContent;
      const getConditionValue = () => {
        const valueElement = condition.getElementsByTagName("value");
        return valueElement[0].children[0].textContent;
      };

      if (propType == "LcOaNodeSourceFile") {
        // rule.setRuleType(SelectionSet.RULES_TYPE.SOURCEFILE);
        // console.log(propType);
        const value = getConditionValue();
        if (value in assets) {
          searchRoot = assets[value];
          this.getParameter("SearchRoot").setValue(searchRoot);
        } else {
          console.warn(
            "File not found:",
            value,
            " Amonst:",
            Object.keys(assets)
          );
        }
        //
        // File is implicit inm the tree it is attached to.
        continue;
      } else if (propType == "LcOaSceneBaseUserName") {
        // rule.setRuleType(SelectionSet.RULES_TYPE.NAME);
        const value = getConditionValue();
        // console.log(propType, ":", value);

        query.setQueryType(QueryParameter.QUERY_TYPES.NAME);
        query.setValue(value);
      } else if (propType == "LcOaNodeLayer") {
        // rule.setRuleType(SelectionSet.RULES_TYPE.LAYER);
        const value = getConditionValue();
        // console.log(propType, ":", value);

        query.setQueryType(QueryParameter.QUERY_TYPES.LAYER);
        query.setValue(value);
      } else if (propType == "LcRevitPropertyElementCategory") {
        // rule.setRuleType(SelectionSet.RULES_TYPE.CATEGORY);
        // console.log(propType)
        const value = getConditionValue();
        // console.log(propType, ":", value);

        query.setQueryType(QueryParameter.QUERY_TYPES.PROPERTY);
        query.setPropertyName("Category");
        query.setValue(value);
      } else if (propType == "LcOaSceneBaseClassUserName") {
        // rule.setRuleType(SelectionSet.RULES_TYPE.TYPE);
        const value = getConditionValue();
        // console.log(propType, ":", value);
      } else if (propType == "LcOaNodeMaterial") {
        // rule.setRuleType(SelectionSet.RULES_TYPE.MATERIAL);

        const value = getConditionValue();
        // console.log(propType, ":", value);
        query.setQueryType(QueryParameter.QUERY_TYPES.MATERIAL);
        query.setValue(value);
      } else if (propType == "LcRevitPropertyElementName") {
        const categoryElement = condition.getElementsByTagName("category");
        const categoryValue = categoryElement[0].children[0].textContent;

        const value = getConditionValue();
        // console.log(propType, ":", value);
        if (categoryValue == "Reference Level") {
          // rule.setRuleType(SelectionSet.RULES_TYPE.LEVEL);
          query.setQueryType(QueryParameter.QUERY_TYPES.LEVEL);
          query.setValue(value);
        } else if (categoryValue == "Base Level") {
          // rule.setRuleType(SelectionSet.RULES_TYPE.LEVEL);
          query.setQueryType(QueryParameter.QUERY_TYPES.LEVEL);
          query.setValue(value);
        } else if (propValue == "Name") {
          // console.warn("Check me in Navisworks", name)
          // rule.setRuleType(SelectionSet.RULES_TYPE.NAME);
          query.setQueryType(QueryParameter.QUERY_TYPES.NAME);
          query.setValue(value);
        } else {
          console.log("support me", xmlNode);
          throw "stop";
        }
      } else if (propType == "revit_System Type") {
        const value = getConditionValue();
        // console.log(propType, ":", value);
        // console.log("Check me in Navisworks", name)
        // rule.setRuleType(SelectionSet.RULES_TYPE.TYPE);
      } else if (propType == "revit_OmniClass Title") {
        const value = getConditionValue();
        // console.log(propType, ":", value);
        // console.log("Check me in Navisworks", name)
        // rule.setRuleType(SelectionSet.RULES_TYPE.TYPE);
      } else if (propType == "revit_System Classification") {
        const value = getConditionValue();
        // console.log(propType, ":", value);
        // console.log("Check me in Navisworks", name)
        // rule.setRuleType(SelectionSet.RULES_TYPE.TYPE);
      } else {
        const categoryElement = condition.getElementsByTagName("category");
        const categoryValue = categoryElement[0].children[0].textContent;
        if (categoryValue == "Level") {
          // rule.setRuleType(SelectionSet.RULES_TYPE.LEVEL);
          const value = getConditionValue();
          query.setQueryType(QueryParameter.QUERY_TYPES.LEVEL);
          query.setValue(value);
        } else {
          console.log("support me", xmlNode);
          throw "stop";
        }
      }
      // else if(propType == "LcRevitData") {
      //   // <name internal="LcRevitData">Base Level</name>
      //   // <name internal="LcRevitData">Reference Level</name>
      //   // <name internal="LcRevitData">Element</name>
      //   // <name internal="LcRevitData">Rebar Cover</name><name internal="LcRevitPropertyElementName">Name</name><data type="wstring">Interior (slabs, walls, joists) - 10M to 36M</data>

      //   // const propertyinternal = propElement[0].children[0].textContent;
      //   // if(propertyinternal == "Base Level" || propertyinternal == "Reference Level") {
      //   //   // rule.setRuleType(SelectionSet.RULES_TYPE.LEVEL);
      //   //   const value = getConditionValue();
      //   //   query.setQueryType(QueryParameter.QUERY_TYPES.LEVEL)
      //   //   query.setValue(value)
      //   // }
      //   // propElement
      //   // rule.setRuleType(SelectionSet.RULES_TYPE.PROPERTY);
      //   // rule.setPropName(propertyName);
      // }

      // const conditionValue = condition.getElementsByTagName('value')[0].children[0].textContent;
      // rule.setMatchValue(conditionValue);

      // ///////////////////
      // // Match Type
      // const test = condition.getAttributeNode("test").value;
      // if (test == "equals") {
      //   rule.setMatchType(SelectionSet.MATCH_TYPE.EXACT);
      // } else if (test == "not_equals") {
      //   rule.setMatchType(SelectionSet.MATCH_TYPE.EXACT);
      //   rule.setMatchFlag(SelectionSet.MATCH_FLAGS.NEGATE_CONDITION);
      // } else if (test == "contains") {
      //   rule.setMatchType(SelectionSet.MATCH_TYPE.CONTAINS);
      // } else if (test == "regex") {
      //   rule.setMatchType(SelectionSet.MATCH_TYPE.REGEX);
      // }

      ///////////////////
      // Flags
      const flags = condition.getAttributeNode("flags").value;
      if (flags & NAVISWORKS_FLAGS.OR_CONDITION) {
        // rule.setMatchFlag(SelectionSet.MATCH_FLAGS.OR_CONDITION);
        query.setLocicalOperator(QueryParameter.QUERY_LOGIC.OR);
      }
      if (flags & NAVISWORKS_FLAGS.NEGATE_CONDITION) {
        // rule.setMatchFlag(SelectionSet.MATCH_FLAGS.NEGATE_CONDITION);
        query.setNegate(true);
      }

      if (flags & NAVISWORKS_FLAGS.REGEX_CONDITION) {
        // rule.setMatchType(SelectionSet.MATCH_TYPE.REGEX);
      }

      // if (name == "Struct-Framing-L2") {
      //   console.log(rule.toString())
      // }
      //
      //selectionSet.addRule(rule, false);

      this.getParameter("Queries").addItem(query, false);
    }

    // if (!this.getParameter("SearchRoot").getValue())
    //   throw "File not bound.";
    if (searchRoot) this.resolveQueries();
    return searchRoot;
  }

  // ////////////////////////////////////////
  // Persistence

  /**
   * The toJSON method encodes this type as a json object for persistences.
   * @param {object} context - The context value.
   * @param {number} flags - The flags value.
   * @return {any} - The return value.
   */
  toJSON(context, flags) {
    const json = { name: this.getName(), type: "IFCSelSet", items: [] };
    const items = this.getItems();
    items.forEach((item) => {
      json.items.push(item.getPath());
    });
    return json;
  }

  /**
   * The fromJSON method decodes a json object for this type.
   * @param {object} j - The json object this item must decode.
   * @param {object} context - The context value.
   * @param {number} flags - The flags value.
   */
  fromJSON(json, context, flags) {
    this.__name = json.name;
    const items = new Set();
    json.items.forEach((itemPath) => {
      items.add(context.resolvePath(itemPath));
    });
    this.setItems(items);
  }

  _setBoundingBoxDirty() {
    if (this.__boundingBoxParam) {
      // Will cause boundingChanged to emit
      // this.__boundingBoxParam.setDirty();
    }
  }

  // ////////////////////////////////////////
  // Clone

  /**
   * The clone method constructs a new advanced group.
   * copies its values and returns it.
   * @param {number} flags - The flags value.
   * @return {IFCSelSet} - Returns a new cloned advanced group.
   */
  clone(flags) {
    const cloned = new IFCSelSet();
    cloned.copyFrom(this, flags);
    return cloned;
  }
}

Registry.register("IFCSelSet", IFCSelSet);
