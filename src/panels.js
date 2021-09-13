// A function is used for dragging and moving
function dragElement(element, leftPanel, mainPanel, direction) {
  var md; // remember mouse down info

  element.onmousedown = onMouseDown;

  function onMouseDown(e) {
    //console.log("mouse down: " + e.clientX);
    md = {
      e,
      offsetLeft: element.offsetLeft,
      offsetTop: element.offsetTop,
      leftPanelWidth: leftPanel.offsetWidth,
      mainPanelWidth: mainPanel.offsetWidth,
      leftPanelHeight: leftPanel.offsetHeight,
      mainPanelHeight: mainPanel.offsetHeight,
    };

    document.onmousemove = onMouseMove;
    document.onmouseup = () => {
      //console.log("mouse up");
      document.onmousemove = document.onmouseup = null;
    };
  }

  function onMouseMove(e) {
    //console.log("mouse move: " + e.clientX);
    var delta = {
      x: e.clientX - md.e.clientX,
      y: e.clientY - md.e.clientY,
    };

    if (direction === "H") {
      // Horizontal
      // Prevent negative-sized elements
      delta.x = Math.min(
        Math.max(delta.x, -md.leftPanelWidth),
        md.mainPanelWidth
      );

      element.style.left = md.offsetLeft + delta.x + "px";
      leftPanel.style.width = md.leftPanelWidth + delta.x + "px";
      mainPanel.style.width = md.mainPanelWidth - delta.x + "px";
    } else if (direction === "V") {
      // Vertical
      // Prevent negative-sized elements
      delta.y = Math.min(
        Math.max(delta.y, -md.leftPanelHeight),
        md.mainPanelHeight - 20
      );

      element.style.top = md.offsetLeft + delta.y + "px";
      leftPanel.style.height = md.leftPanelHeight + delta.y + "px";
      mainPanel.style.height = md.mainPanelHeight - delta.y + "px";
    }
  }
}

export default dragElement;
