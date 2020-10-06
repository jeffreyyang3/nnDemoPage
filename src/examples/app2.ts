import nn from "jeffs_frontend_lib";
import { app2JS } from "../codeHTML/js.json";
import { app2HTML } from "../codeHTML/html.json";
import app2TextContent from "../textContent/app2.json";
export default (attachElSelector: string) => {
  const app = new nn({
    el: attachElSelector,
    data: {
      ...app2TextContent,
      enteredText: "initial value",
      htmlSample: app2HTML,
      jsSample: app2JS
    }
  });
  //@ts-ignore
  window.inputModel = app;
};
