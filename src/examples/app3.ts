import nn from "jeffs_frontend_lib";
import app3TextContent from "../textContent/app3.json";
export default (attachElSelector: string) => {
  const app = new nn({
    el: attachElSelector,
    data: {
      ...app3TextContent
    }
  });
  //@ts-ignore
  window.computedExample = app;
};
