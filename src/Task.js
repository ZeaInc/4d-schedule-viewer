const { Color, EventEmitter } = zeaEngine;
import IFCSelSet from "./IFCSelSet.js";

function msToDays(ms) {
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

function dateToString(date) {
  return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
}

// From Synchro Software: (https://www.youtube.com/watch?v=sX0NUKDJ3b4)
const TASK_COLORS = {
  EQUIPMENT: new Color(0, 0.8, 0, 0.25),
  NEW_CONSTRUCTION: new Color("#F9CE03"),
  DEMOLITION: new Color("#B22222"),
  MEP: new Color(
    0.8,
    0,
    0,
    0.25
  ) /* MEP" stands for Mechanical, Electrical, and Plumbing.  */,
  FITOUT_COMMISIONING: new Color("#F0E68C"),
};

const STATE_TYPES = {
  INIT: -1,
  BEFORE: 0,
  DURING: 1,
  AFTER: 2,
};
const TASK_TYPES = {
  Construction: 1,
  Equipment: 2,
  Demolition: 2,
};

const desaturate = (color, f) => {
  // f = 0.2; // desaturate by 20%
  const L = 0.3 * color.r + 0.6 * color.g + 0.1 * color.b;
  return new Color(
    color.r + f * (L - color.r),
    color.g + f * (L - color.g),
    color.b + f * (L - color.b)
  );
};

export default class Task extends EventEmitter {
  constructor(scene) {
    super();
    // this.active = false;
    this.name = "";

    this.taskType = TASK_TYPES.Construction; // 1=Construction, 2=Equipment.
    this.state = STATE_TYPES.INIT; // 0 = Before, 1=During, 2=After.

    this.scene = scene;

    this.childTasks = [];
    this.color = desaturate(Color.random(0.25), 0.4);
    this.progress = 0;
  }

  getName() {
    return this.name;
  }

  updateRange(start, end) {
    let rangeChanged = false;
    if (!this.start || start < this.start) {
      this.start = start;
      rangeChanged = true;
    }
    if (!this.end || end > this.end) {
      this.end = end;
      rangeChanged = true;
    }
    if (rangeChanged) {
      this.duration = this.end - this.start;
      this.emit("rangeChanged", { start: this.start, end: this.end });
    }
  }

  addChildTask(childTask) {
    childTask.color = this.color;
    this.childTasks.push(childTask);
    if (childTask.start && childTask.end)
      this.updateRange(childTask.start, childTask.end);
    childTask.on("rangeChanged", (event) => {
      this.updateRange(event.start, event.end);
    });
    this.invalid = true;
  }

  loadMSProjectXLSX(row, sceneRoot) {
    this.id = row["Display ID"];
    this.name = row["Task Name"];
    // console.log("Task:", this.name);
    const taskType = row["Task Type"];
    if (taskType == "Temporary" || taskType == "Equipment")
      this.taskType = TASK_TYPES.Equipment;

    // this.active = row['Active'] == '1';

    if ("Attached" in row) {
      const attachedTo = row["Attached"];
      if (attachedTo != "Explicit Selection") {
        try {
          const group = sceneRoot.resolvePath(attachedTo.split("->"));
          if (group && group instanceof IFCSelSet) {
            // console.log("Task bound to SelectionSet :", attachedTo);
            this.group = group;
            if (this.taskType == TASK_TYPES.Construction) {
              this.group
                .getParameter("HighlightColor")
                .setValue(TASK_COLORS.NEW_CONSTRUCTION);
            } else if (this.taskType == TASK_TYPES.Equipment) {
              this.group
                .getParameter("HighlightColor")
                .setValue(TASK_COLORS.EQUIPMENT);
            }
            this.group.getParameter("HighlightFill").setValue(0.25);
          } else {
            console.log(this.name, " IFCSelSet not found:", attachedTo);
          }
        } catch (e) {
          // console.warn("Unable to resolve Task to SelectionSet :", attachedTo);
        }
      }
    }

    let rangeChanged = false;
    if ("Planned Start" in row) {
      this.start = moment(row["Planned Start"], "MM/DD/YYYY").toDate();
      rangeChanged = true;
    }
    if ("Planned End" in row) {
      this.end = moment(row["Planned End"], "MM/DD/YYYY").toDate();
      rangeChanged = true;
    }
    if (rangeChanged) {
      this.duration = this.end - this.start;
    }
    // if ('Duration' in row) {
    //   this.duration = Number.parseInt(row['Duration']);
    // }

    this.animation = row["Animation"];
    this.animationBehaviour = row["Animation Behaviour"];
  }

  // bindToSelectionSet(sceneRoot, selectionSets) {
  //   if (this.attachedTo && this.attachedTo != "Explicit Selection") {
  //     const path = this.attachedTo.split("->");
  //     let item = sceneRoot.resolvePath(path);
  //     if (item && !(item instanceof ZeaEngine.Group)) {
  //       // Some tasks need to append the name to the path to get the
  //       // target group. This just seems to be a quirk of the schedule we have.
  //       item = item.getChildByName(this.name);
  //     }
  //     if (!item && path[1] == "Architectural") {
  //       item = sceneRoot.resolvePath(path);
  //     }
  //     if (item && item instanceof ZeaEngine.Group) {
  //       this.group = item;
  //       if (this.taskType == TASK_TYPES.Construction) {
  //         this.group
  //           .getParameter("HighlightColor")
  //           .setValue(TASK_COLORS.NEW_CONSTRUCTION);
  //       } else if (this.taskType == TASK_TYPES.Equipment) {
  //         this.group
  //           .getParameter("HighlightColor")
  //           .setValue(TASK_COLORS.EQUIPMENT);
  //       }
  //       this.group.getParameter("HighlightFill").setValue(0.25);
  //     } else {
  //       if (item) console.log(this.name, " Group found:", this.attachedTo);
  //       console.log(this.name, " Group not found:", this.attachedTo);
  //     }
  //   }
  //   this.childTasks.forEach((task) => {
  //     task.bindToSelectionSet(sceneRoot, selectionSets);
  //   });
  // }

  activate() {
    // All states get inialized to the Before state.
  }

  update(currentDate) {
    if (currentDate < this.start) {
      if (this.state != 0) {
        if (this.group) {
          // console.log("Deactivate Before", this.name);
          if (
            this.state == STATE_TYPES.DURING &&
            this.taskType == TASK_TYPES.Construction
          ) {
            // this.group.removeHighlight(this.name, true);
            this.group.getParameter("Highlighted").setValue(false);
          }
          this.group.setVisible(false);
        }

        if (this.progress != 0) {
          this.progress = 0;
          this.emit("progressChanged", { progress: this.progress });
        }
        this.state = STATE_TYPES.BEFORE;
      }
    } else if (currentDate > this.end) {
      if (this.state != STATE_TYPES.AFTER) {
        if (this.group) {
          // console.log("Deactivate After", this.name);

          if (this.taskType == TASK_TYPES.Construction) {
            if (this.state == STATE_TYPES.BEFORE) this.group.setVisible(true);
            else if (this.state == STATE_TYPES.DURING) {
              // this.group.removeHighlight(this.name, true);
              this.group.getParameter("Highlighted").setValue(false);
            }
          } else if (this.taskType == TASK_TYPES.Equipment) {
            this.group.setVisible(false);
          }
        }

        if (this.progress != 100) {
          this.progress = 100;
          this.emit("progressChanged", { progress: this.progress });
        }
        this.state = STATE_TYPES.AFTER;
      }
    } else {
      if (this.state != STATE_TYPES.DURING) {
        if (this.group) {
          // console.log("Activate", this.name);

          if (this.taskType == TASK_TYPES.Construction) {
            if (this.state == STATE_TYPES.BEFORE) {
              this.group.setVisible(true);
            }
            // this.group.addHighlight(this.name, TASK_COLORS.NEW_CONSTRUCTION, true);
            this.group.getParameter("Highlighted").setValue(true);
          } else {
            this.group.setVisible(true);
          }
        }

        this.state = STATE_TYPES.DURING;
      }

      if (this.duration > 0) {
        this.progress = ((currentDate - this.start) / this.duration) * 100;
        this.emit("progressChanged", { progress: this.progress });
      }
    }

    this.childTasks.forEach((task) => {
      task.update(currentDate);
    });
  }
}
