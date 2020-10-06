import nn from "jeffs_frontend_lib";
import { app1JS } from "../codeHTML/js.json";
import { app1HTML } from "../codeHTML/html.json";
import app1Text from "../textContent/app1.json";
export default (attachElSelector: string) => {
  const app = new nn({
    el: attachElSelector,
    data: {
      ...app1Text,
      jsSample: app1JS,
      htmlSample: app1HTML
    }
  });
  //@ts-ignore
  window.reactive1 = app;
};
