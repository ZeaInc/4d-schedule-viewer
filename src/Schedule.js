const { TreeItem, EventEmitter, loadBinfile, loadXMLfile, Registry } =
  zeaEngine;

import Task from "./Task.js";
import IFCSelSet from "./IFCSelSet.js";

export default class Schedule extends EventEmitter {
  constructor(scene) {
    super();
    this.tasks = [];
    this.currentTime = 0;
    this.scene = scene;
    this.duration = 0;
    this.playId = 0;
    this.playing = false;

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
          this.projectEndDate = this.projectStartDate;
          this.currentDate = this.projectStartDate;

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

            if (task.end) {
              if (task.end > this.projectEndDate)
                this.projectEndDate = task.end;
            }

            // console.log(new Array(nesting + 1).join('  '), nesting, row)
          });
          // console.log("Duration:", this.projectStartDate, this.duration)

          // this.emit("tasksAdded", { tasks: this.tasks });
          this.emit("loaded");
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
            searchRoot = group.loadXML(xmlNode, assets, searchRoot);

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
          resolve();
        },
        () => {
          reject("Unable to load file");
        }
      );
    });
  }

  bindTasksToSelSets() {
    this.tasks.forEach((task) => {
      task.bindToSelectionSet(this.scene.getRoot());
    });
    this.setCurrentDate(this.projectStartDate);
  }

  getDateRange() {
    return [this.projectStartDate, this.projectEndDate];
  }

  setCurrentDate(currentDate) {
    this.currentDate = currentDate;
    // console.log("setCurrentDate:", currentDate);
    this.emit("currentDateChanged", { currentDate });

    this.tasks.forEach((task) => {
      task.update(currentDate);
    });
  }

  play() {
    this.playing = true;
    this.playId = setInterval(() => {
      // increment by a day
      this.setCurrentDate(new Date(this.currentDate.getTime() + 8.64e7));
      if (this.currentDate > this.projectEndDate) clearInterval(this.playId);
    }, 60);
  }

  stop() {
    clearInterval(this.playId);
    this.playing = false;
  }

  // ////////////////////////////////////////
  // Persistence

  /**
   * The toJSON method encodes this type as a json object for persistences.
   * @param {object} context - The context value.
   * @param {number} flags - The flags value.
   * @return {any} - The return value.
   */
  toJSON(context = {}, flags) {
    context.assetItem = this;

    const toJSON = (treeItem) => {
      if (treeItem instanceof IFCSelSet) {
        return treeItem.toJSON(context);
      } else {
        const children = treeItem.getChildren();
        const json = {
          name: treeItem.getName(),
          type: treeItem.getClassName(),
          children: [],
        };
        for (const childItem of children) {
          if (childItem) json.children.push(toJSON(childItem));
        }
        return json;
      }
    };
    return toJSON(this.sets);
  }

  /**
   * The fromJSON method decodes a json object for this type.
   * @param {object} j - The json object this item must decode.
   * @param {object} context - The context value.
   * @param {number} flags - The flags value.
   */
  fromJSON(json, context = {}, flags = 0) {
    context.resolvePath = (path, cb) => {
      try {
        return this.scene.getRoot().resolvePath(path);
      } catch (e) {
        // console.log("Unable to bind :", path);
        return null;
      }
    };
    this.sets.fromJSON(json, context);
  }
}

// export { Schedule };
