const { StringParameter, TreeItemParameter, SelectionSet } = zeaEngine;

import {
  QUERY_TYPES,
  QUERY_MATCH_TYPE,
  QUERY_LOGIC,
} from "./QueryParameter.js";
import { QuerySet } from "./QuerySetParameter.js";

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
          if (negate && !res) set.push(item);
          else if (!negate && res) set.push(item);
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
                  applyTest(regex.test(String(itemPath)), item);
                }, false);
              }
              break;
            }
            case QUERY_TYPES.NAME: {
              const regex = query.getRegex();
              searchRoot.traverse((item) => {
                applyTest(regex.test(item.getName()), item);
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
                applyTest(res, item);
              }, false);
              break;
            }
            case QUERY_TYPES.LEVEL: {
              const regex = query.getRegex();
              const searchRootPath = searchRoot.getPath();
              searchRoot.traverse((item) => {
                const itemPath = item.getPath().slice(searchRootPath.length);
                applyTest(itemPath.length > 4 && regex.test(itemPath[3]), item);
              }, false);
              break;
            }
            case QUERY_TYPES.LAYER: {
              const value = query.getValue();
              searchRoot.traverse((item) => {
                applyTest(item.getLayers().indexOf(value) != -1, item);
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
                applyTest(res, item);
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

  /**
   * The toJSON method encodes this type as a json object for persistences.
   * @param {object} context - The context value.
   * @param {number} flags - The flags value.
   * @return {object} - Returns the json object.
   */
  toJSON(context, flags) {
    const j = super.toJSON(context, flags);
    return j;
  }

  /**
   * The fromJSON method decodes a json object for this type.
   * @param {object} j - The json object this item must decode.
   * @param {object} context - The context value.
   * @param {number} flags - The flags value.
   */
  fromJSON(j, context, flags) {
    super.fromJSON(j, context, flags);
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
