const { MathFunctions } = window.zeaEngine

const timelineScale = 40000000 // seconds to pixels

export class scheduleView extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    this.container = document.createElement('div')
    this.container.classList.add('container')
    shadowRoot.appendChild(this.container)

    this.timeline = document.createElement('div')
    this.timeline.id = 'timeline'
    this.container.appendChild(this.timeline)

    this.tasksWrapper = document.createElement('div')
    this.tasksWrapper.id = 'tasks-wrapper'
    this.timeline.appendChild(this.tasksWrapper)
    this.tasks = []

    this.timeBarWidth = 10
    this.timeBar = document.createElement('div')
    this.timeBar.id = 'time-bar'
    this.tasksWrapper.appendChild(this.timeBar)

    const playBtn = document.createElement('button')
    playBtn.id = 'playBtn'
    playBtn.textContent = 'Play'
    this.container.appendChild(playBtn)
    playBtn.addEventListener('click', () => {
      if (this._schedule.playing) {
        this._schedule.stop()
        playBtn.textContent = 'Play'
        return
      }

      this._schedule.play()
      playBtn.textContent = 'Stop'
    })

    let mouseIsOver = false
    this.onmouseover = function () {
      mouseIsOver = TrustedScriptURL
    }
    this.onmouseout = function () {
      mouseIsOver = false
    }

    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'Space':
          if (this._schedule.playing) this._schedule.stop()
          else this._schedule.play()
          break
      }
    })

    let dragStartX = 0
    let dragStartTime = 0
    this.timeBar.addEventListener('mousedown', (event) => {
      if (this._schedule.playing) this._schedule.stop()
      dragStartX = event.clientX
      dragStartTime = this._schedule.currentDate.getTime()
      document.addEventListener('mousemove', dragTimeBar)
      document.addEventListener('mouseup', endDragTimeBar)
      event.stopPropagation()
      event.preventDefault()
    })

    const dragTimeBar = (event) => {
      const deltaTime = (event.clientX - dragStartX) * timelineScale
      const time = Math.round(dragStartTime + deltaTime)
      this._schedule.setCurrentDate(new Date(time))

      event.stopPropagation()
      event.preventDefault()
    }

    const endDragTimeBar = () => {
      document.removeEventListener('mousemove', dragTimeBar)
      document.removeEventListener('mouseup', endDragTimeBar)
    }

    const styleTag = document.createElement('style')
    styleTag.appendChild(
      document.createTextNode(`
      .container {
        position: relative;
        display: flex;
        height: 100%;
        user-select: none;
        background-color: lightgrey;
      }

      #timeline {
        display: flex;
        flex: 1 1 0%;
        border: var(--color-grey-1);
        border-style: solid;
        border-width: 1px;
        align-items: stretch;
        overflow: auto
      }

      #time-bar {
        position: absolute;
        height: 100%;
        width: ${this.timeBarWidth}px;
        background-color: rgb(255,0,0,0.7);
        cursor: col-resize;
        z-index: 100
      }

      #tasks-wrapper {
        position: relative;
      }

      .task {
        border: var(--color-grey-3);
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
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
        background-color: #F9CE03;
        border: var(--color-grey-3);
        border-style: solid;
        border-width: 1px;
        padding: 0 20px;
      }

      #playBtn:hover {
        background-color: #F1D600;
      }

      .task-label {
        color: black;
      }
      `)
    )
    shadowRoot.appendChild(styleTag)
  }

  set schedule(schedule) {
    this._schedule = schedule

    this._schedule.on('loaded', () => {
      const range = this._schedule.getDateRange()
      // const duration = range[1] - range[0];
      let row = 0

      const displayTask = (task, tasksWrapper, offset) => {
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task')

        // const left =
        //   ((task.start - range[0]) / duration) * timelineScale - offset;
        // const taskWidth = (task.duration / duration) * timelineScale;
        const left = (task.start - range[0]) / timelineScale - offset
        const taskWidth = task.duration / timelineScale

        console.log('displayTask', task.name, row, left, taskWidth)

        taskDiv.style['margin-left'] = `${left}px`
        taskDiv.style.top = `${10 + row * 24}px`
        taskDiv.style.width = `${taskWidth - this.timeBarWidth}px`
        taskDiv.style.backgroundColor = task.color.toHex()
        tasksWrapper.appendChild(taskDiv)

        const taskHeader = document.createElement('div')
        taskHeader.className = 'taskHeader'
        taskDiv.appendChild(taskHeader)

        // ///////////////////////////////////////
        // Expand/Collapse

        if (task.childTasks.length > 0) {
          const expandBtn = document.createElement('button')
          expandBtn.className = 'taskExpandBtn'
          taskHeader.appendChild(expandBtn)
          expandBtn.innerHTML = '+'
          let expanded = false

          const itemChildren = document.createElement('div')
          itemChildren.className = 'taskChildList'
          taskDiv.appendChild(itemChildren)
          expandBtn.addEventListener('click', () => {
            if (!expanded) {
              expandBtn.innerHTML = '-'
              task.childTasks.forEach((childTask) => {
                displayTask(childTask, itemChildren, left)
              })
              expanded = true
            } else if (expanded) {
              while (itemChildren.firstChild) {
                itemChildren.removeChild(itemChildren.lastChild)
              }
              expandBtn.innerHTML = '+'
              expanded = false
            }
          })
          expandBtn.addEventListener('mousedown', (event) => {
            event.stopPropagation()
            event.preventDefault()
          })
        }

        // ///////////////////////
        // Label

        const taskLabelSpan = document.createElement('span')
        taskLabelSpan.classList.add('task-label')
        const taskLabel = document.createTextNode(task.name)
        taskHeader.appendChild(taskLabelSpan)
        taskLabelSpan.appendChild(taskLabel)

        row++
      }

      this._schedule.tasks.forEach((task) => {
        displayTask(task, this.tasksWrapper, 0)
      })
    })

    this._schedule.on('currentDateChanged', (event) => {
      const { currentDate } = event
      const range = this._schedule.getDateRange()
      // const time = MathFunctions.clamp(
      //   currentDate.getTime(),
      //   range[0].getTime(),
      //   range[1].getTime()
      // );
      // const pixels =
      //   ((time - range[0].getTime()) /
      //     (range[1].getTime() - range[0].getTime())) *
      //   timelineScale;

      // if (pixels >= 0 && pixels <= timelineScale)
      //   this.timeBar.style.left = `${pixels}px`;
      this.timeBar.style.left = `${(currentDate.getTime() - range[0].getTime()) / timelineScale}px`
    })
  }
}

customElements.define('schedule-view', scheduleView)
