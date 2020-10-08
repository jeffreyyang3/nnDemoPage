import nn from "jeffs_frontend_lib";
import app3TextContent from "../textContent/app3.json";
import js from "../codeHTML/js.json";
import html from "../codeHTML/html.json";
export default (attachElSelector: string) => {
  const app = new nn({
    el: attachElSelector,
    data: {
      ...app3TextContent,
      width: 40,
      height: 40,
      color: "purple",
      jsSample: js.computedJS,
      htmlSample: html.computedHTML,
    },
    computed: {
      area: {
        fn() {
          return this.state.width * this.state.height;
        },
        dependencies: ["width", "height"],
      },
      boxDescription: {
        fn() {
          const ts = this.state;
          return `Height: ${ts.height}px, Width: ${ts.width}px, Area: ${ts.area}px, Color: ${ts.color}`;
        },
        dependencies: ["area", "color"],
      },
    },
    watch: {
      boxDescription() {
        const box = this.$el.querySelector(".box");
        box.style.width = `${this.state.width}px`;
        box.style.height = `${this.state.height}px`;
        box.style.backgroundColor = this.state.color;
      },
    },
  });
  //@ts-ignore
  window.computedExample = app;
};
