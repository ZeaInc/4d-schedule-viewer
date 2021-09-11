const { TreeItem, EventEmitter, loadBinfile, loadXMLfile, SelectionSet } =
  zeaEngine;

import Task from "./Task.js";
import IFCSelSet from "./IFCSelSet.js";
import QueryParameter from "./QueryParameter.js";
// import {
//   SelectionSet,
//   SelectionRule,
//   SelectionSetsRoot,
//   SelectionSetFolder,
// } from "./SelectionSet.js";

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

export default class Schedule extends EventEmitter {
  constructor(scene) {
    super();
    this.tasks = [];
    this.currentTime = 0;
    this.scene = scene;
    this.duration = 0;

    // this.selectionSets = new SelectionSetsRoot(this.scene.getRoot());
    this.sets = new TreeItem("Sets");
    this.scene.getRoot().addChild(this.sets);
  }

  loadMSProjectXLSX(url) {
    return new Promise((resolve, reject) => {
      if (!window.XLSX) reject("XLSX library not loaded");
      // Note: example taken from here..
      // https://stackoverflow.com/questions/8238407/how-to-parse-excel-file-in-javascript-html5
      // and here:
      // https://github.com/SheetJS/js-xlsx/tree/master/demos/xhr
      const stem = url.split(".")[0]; // trim off the extension
      loadBinfile(
        url,
        (data) => {
          var unit8array = new Uint8Array(data);
          var workbook = XLSX.read(unit8array, {
            type: "array",
          });

          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          // Here is your object
          const rows = XLSX.utils.sheet_to_row_object_array(firstSheet);

          // this.projectStartDate = new Date(rows[0]['Planned Start']);
          this.projectStartDate = moment(
            rows[0]["Planned Start"],
            "MM/DD/YYYY"
          ).toDate();

          const path = [];
          rows.forEach((row, index) => {
            const task = new Task(this.scene);
            task.loadMSProjectXLSX(row, this.scene.getRoot());
            // if(task.selectionSet && this.tasks.length == 0)
            //   this.tasks.push(task);
            // return;

            const nesting = Number.parseInt(row["Task Nesting"]);
            if (nesting == 0) {
              this.tasks.push(task);
              path.splice(0, path.length, task);
            } else if (nesting >= path.length) {
              const parentTask = path[path.length - 1];
              parentTask.addChildTask(task);
              path.push(task);
            } else if (nesting < path.length - 1) {
              path.splice(nesting, path.length - nesting);
              const parentTask = path[path.length - 1];
              parentTask.addChildTask(task);
              path.push(task);
            } else {
              const parentTask = path[path.length - 2];
              parentTask.addChildTask(task);
              path[path.length - 1] = task;
            }

            // console.log(new Array(nesting + 1).join('  '), nesting, row)
          });
          // console.log("Duration:", this.projectStartDate, this.duration)

          this.emit("tasksAdded", { tasks: this.tasks });
          resolve(this.tasks);
        },
        () => {
          reject("Unable to load file");
        }
      );
    });
  }

  loadSelectionSet(url, assets) {
    return new Promise((resolve, reject) => {
      loadXMLfile(
        url,
        (xmlDoc) => {
          let searchRoot;

          const parseSelectionSet = (xmlNode) => {
            const name = xmlNode.getAttributeNode("name").value;
            // console.log("Set:", name);

            // const selectionSet = new SelectionSet(name);
            const group = new IFCSelSet(name);
            if (searchRoot) {
              // TODO: EAch group should inherit off its parent.
              group.getParameter("SearchRoot").setValue(searchRoot);
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
              } else if (
                condition.getAttributeNode("test").value == "contains"
              ) {
                query.setMatchType(QueryParameter.QUERY_MATCH_TYPE.REGEX);
              } else if (
                condition.getAttributeNode("test").value == "not_equals"
              ) {
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
                  group.getParameter("SearchRoot").setValue(assets[value]);
                  searchRoot = assets[value];
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
                const categoryElement =
                  condition.getElementsByTagName("category");
                const categoryValue =
                  categoryElement[0].children[0].textContent;

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
                const categoryElement =
                  condition.getElementsByTagName("category");
                const categoryValue =
                  categoryElement[0].children[0].textContent;
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

              group.getParameter("Queries").addItem(query, false);
            }

            // if (!group.getParameter("SearchRoot").getValue())
            //   throw "File not bound.";
            if (group.getParameter("SearchRoot").getValue())
              group.resolveQueries();

            // return selectionSet;
            return group;
          };
          const parseFolder = (xmlNode) => {
            const name = xmlNode.getAttributeNode("name").value;
            // console.log("parseFolder:", name);
            // const selSetFolder = new SelectionSetFolder(name)
            const treeItem = new TreeItem(name);

            for (let i = 0; i < xmlNode.children.length; i++) {
              const node = xmlNode.children[i];
              if (node.nodeName == "viewfolder") {
                // selSetFolder.addSelectionSet(parseFolder(node));
                const subTreeItem = parseFolder(node);
                treeItem.addChild(subTreeItem);
              } else if (node.nodeName == "selectionset") {
                // selSetFolder.addSelectionSet(parseSelectionSet(node))
                const group = parseSelectionSet(node);
                // console.log("group:", group.getName());
                treeItem.addChild(group);
              }
            }

            // return selSetFolder;
            return treeItem;
          };

          if (xmlDoc.children[0].nodeName == "exchange") {
            const selectionSets = xmlDoc.children[0].children[0];
            // const treeItem = parseFolder(selectionSets);
            // asset.addChild(treeItem);

            for (let i = 0; i < selectionSets.children.length; i++) {
              const node = selectionSets.children[i];
              if (node.nodeName == "viewfolder") {
                // selSetFolder.addSelectionSet(parseFolder(node));
                const subTreeItem = parseFolder(node);
                this.sets.addChild(subTreeItem);
              } else if (node.nodeName == "selectionset") {
                // selSetFolder.addSelectionSet(parseSelectionSet(node))
                const group = parseSelectionSet(node);
                this.sets.addChild(group);
              }
            }
            // for (let i = 0; i < selectionSets.children.length; i++) {
            //   const node = selectionSets.children[i]
            //   if (node.nodeName == "viewfolder")
            //     // this.selectionSets.addSelectionSet(parseFolder(node));
            //   else if (node.nodeName == "selectionset") {
            //     this.selectionSets.addSelectionSet(parseSelectionSet(node))
            //   }
            // }
          }

          // this.selectionSets.recomputeAll();
          // resolve(this.selectionSets);
          resolve();
        },
        () => {
          reject("Unable to load file");
        }
      );
    });
  }

  setCurrentDate(currentDate) {
    this.currentDate = currentDate;
    this.emit("currentDateChanged", { currentDate });

    this.tasks.forEach((task) => {
      task.update(currentDate);
    });
  }
}

// export { Schedule };
