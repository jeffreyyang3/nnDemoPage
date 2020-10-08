import nn from "jeffs_frontend_lib";
import watchTextContent from "../textContent/watch.json";
import js from "../codeHTML/js.json";
import html from "../codeHTML/html.json";
export default (attachElSelector: string) => {
  const app = new nn({
    el: attachElSelector,
    data: {
      ...watchTextContent,
      currentRoll: "none",
      lastRoll: "none",
      watchJS: js.watchJS,
      watchHTML: html.watchHTML,
    },
    watch: {
      currentRoll: function (lastRoll) {
        this.state.lastRoll = lastRoll;
      },
    },
  });
  // you can access the the attached base element with the $el property.
  // why is there a $ preceding? Idk it looked cool
  app.$el.querySelector("button").addEventListener("click", () => {
    app.state.currentRoll = Math.ceil(Math.random() * 6);
  });

  //@ts-ignore
  window.watchExample = app;
};
