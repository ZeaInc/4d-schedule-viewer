const { MathFunctions } = window.zeaEngine;

export class scheduleView extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    this.container = document.createElement("div");
    this.container.classList.add("container");
    shadowRoot.appendChild(this.container);

    this.timeline = document.createElement("div");
    this.timeline.id = "timeline";
    this.container.appendChild(this.timeline);

    this.timebar = document.createElement("div");
    this.timebar.id = "timebar";
    this.timeline.appendChild(this.timebar);

    this.tasksContainer = document.createElement("div");
    this.tasksContainer.id = "tasks";
    this.timeline.appendChild(this.tasksContainer);
    this.tasks = [];

    const playBtn = document.createElement("i");
    playBtn.id = "playBtn";
    playBtn.textContent = "Play";
    this.container.appendChild(playBtn);
    playBtn.addEventListener("click", () => {
      if (this._schedule.playing) {
        this._schedule.stop();
        playBtn.textContent = "Play";
      } else {
        this._schedule.play();
        playBtn.textContent = "Stop";
      }
    });

    let mouseIsOver = false;
    this.onmouseover = function () {
      mouseIsOver = TrustedScriptURL;
    };
    this.onmouseout = function () {
      mouseIsOver = false;
    };

    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "Space":
          if (this._schedule.playing) this._schedule.stop();
          else this._schedule.play();
          break;
      }
    });

    this.timeline.addEventListener("mousedown", (event) => {
      if (this._schedule.playing) this._schedule.stop();
      dragTimeBar(event);
      document.addEventListener("mousemove", dragTimeBar);
      document.addEventListener("mouseup", endDragTimeBar);
      event.stopPropagation();
      event.preventDefault();
    });

    const dragTimeBar = (event) => {
      const range = this._schedule.getDateRange();
      const time = Math.round(
        range[0].getTime() +
          (event.clientX / this.timeline.offsetWidth) *
            (range[1].getTime() - range[0].getTime())
      );
      this._schedule.setCurrentDate(new Date(time));
      event.stopPropagation();
      event.preventDefault();
    };

    const endDragTimeBar = (event) => {
      document.removeEventListener("mousemove", dragTimeBar);
      document.removeEventListener("mouseup", endDragTimeBar);
    };

    const styleTag = document.createElement("style");
    styleTag.appendChild(
      document.createTextNode(`
      .container {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        gap: 0.2em;
        align-items: top;
        user-select: none;
      }
      #timeline {
        height: calc(100% - 14px);
        display: flex;
        flex: auto;
        border: var(--color-grey-1);
        border-style: solid;
        border-width: 1px;
        align-items: center;
        overflow: auto
      }
      #timebar {
        position: relative;
        height: 100%;
        width: 10px;
        background-color: rgb(255,0,0,0.7);
        cursor: col-resize;
        z-index: 100
      }

      
      #tasks {
        height: 100%;
        display: block;
        flex: auto;
      }
      
      .task {
        background-color: #F9CE03;
        border: var(--color-grey-3);
        border-width: 2px;
        border-style: solid;
        display: block;
        align-items: center;
        justify-content: left;
        font-size: 15px;
      }
      .taskHeader {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .taskExpandBtn {
        border: none;
        height: 24px;
        width: 20px;
        padding: 0;
        background-color: #0000;
        color: azure;
        outline: none;
        margin: 2px 0 0 0;
      }
      .taskChildList {
        display: block;
      }
      
      #playBtn {
        height: 100%;
        width: 60px;
        background-color: #F9CE03; 
        border: var(--color-grey-3);
        border-style: solid;
        border-width: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      #playBtn:hover {
        background-color: #F1D600; 
      }

      .task-label {
        color: black;
      }
`)
    );
    shadowRoot.appendChild(styleTag);
  }

  set schedule(schedule) {
    this._schedule = schedule;
    this._schedule.on("loaded", () => {
      const range = this._schedule.getDateRange();
      const duration = range[1] - range[0];
      let row = 0;
      const displayTask = (task, taskParent, offset) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const left =
          ((task.start - range[0]) / duration) * this.timeline.offsetWidth -
          offset;
        const taskWidth =
          (task.duration / duration) * this.timeline.offsetWidth;

        console.log("displayTask", task.name, row, left, taskWidth);

        // I subtract 0.2em because of the gap in the container
        taskDiv.style["margin-left"] = `${left}px`;
        taskDiv.style.top = `${10 + row * 24}px`;
        taskDiv.style.width = `${taskWidth}px`;
        taskDiv.style.backgroundColor = task.color.toHex();
        taskParent.appendChild(taskDiv);

        const taskHeader = document.createElement("div");
        taskHeader.className = "taskHeader";
        taskDiv.appendChild(taskHeader);

        // ///////////////////////////////////////
        // Expand/Collapse

        const expandBtn = document.createElement("button");
        expandBtn.className = "taskExpandBtn";
        taskHeader.appendChild(expandBtn);
        expandBtn.innerHTML = "+";
        let expanded = false;

        const itemChildren = document.createElement("div");
        itemChildren.className = "taskChildList";
        taskDiv.appendChild(itemChildren);
        expandBtn.addEventListener("click", () => {
          if (!expanded) {
            expandBtn.innerHTML = "-";
            task.childTasks.forEach((childTask) => {
              displayTask(childTask, itemChildren, left);
            });
            expanded = true;
          } else if (expanded) {
            while (itemChildren.firstChild) {
              itemChildren.removeChild(itemChildren.lastChild);
            }
            expandBtn.innerHTML = "+";
            expanded = false;
          }
        });
        expandBtn.addEventListener("mousedown", (event) => {
          event.stopPropagation();
          event.preventDefault();
        });

        // ///////////////////////
        // Label

        const taskLabelSpan = document.createElement("span");
        taskLabelSpan.classList.add("task-label");
        const taskLabel = document.createTextNode(task.name);
        taskHeader.appendChild(taskLabelSpan);
        taskLabelSpan.appendChild(taskLabel);

        row++;
      };
      this._schedule.tasks.forEach((task) => {
        displayTask(task, this.tasksContainer, 0);
      });
    });

    this._schedule.on("currentDateChanged", (event) => {
      const { currentDate } = event;
      const range = this._schedule.getDateRange();
      const time = MathFunctions.clamp(
        currentDate.getTime(),
        range[0].getTime(),
        range[1].getTime()
      );
      const pixels =
        ((time - range[0].getTime()) /
          (range[1].getTime() - range[0].getTime())) *
        this.timeline.offsetWidth;

      const timeBarWidth = this.timebar.offsetWidth * 0.5;
      if (pixels >= 0 && pixels <= this.timeline.offsetWidth)
        this.timebar.style.left = `${pixels - timeBarWidth}px`;
    });
  }
}

customElements.define("schedule-view", scheduleView);
