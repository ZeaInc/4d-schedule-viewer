class FPSDisplay extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    this.div = document.createElement("div");
    this.div.classList.add("fps-display");
    shadowRoot.appendChild(this.div);

    const styleTag = document.createElement("style");
    styleTag.appendChild(
      document.createTextNode(`

    .fps-display {
      position: fixed;
      bottom: 15px;
      right: 80px;
      color: black;
    }
`)
    );
    shadowRoot.appendChild(styleTag);
  }

  set renderer(renderer) {
    let frameCounter = 0;
    renderer.on("redrawOccurred", () => {
      frameCounter++;
    });
    setInterval(() => {
      this.div.textContent = `Fps: ${frameCounter * 2}`;
      frameCounter = 0;
    }, 500);
  }
}

customElements.define("zea-fps-display", FPSDisplay);
