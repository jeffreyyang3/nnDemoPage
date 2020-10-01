import nn from "jeffs_frontend_lib";
import { ex1JS } from "../codeHTML/js.json";
import { ex1HTML } from "../codeHTML/html.json";
export default (attachElSelector: string) => {
  const app = new nn({
    el: attachElSelector,
    data: {
      exData: "initial data value",
      description: `Here's a simple example: this $NAME instance has been made available 
      globally as 'reactive1'. The purple text below is tied to the property 'exData'. 
      You can try modifying that data property by reassigning reactive1.state.exData in 
      your console. If you look at the state, you'll also find that this description is 
      a property on the state, which can also be changed.`,
      jsSample: ex1JS,
      htmlSample: ex1HTML,
    },
  });
  //@ts-ignore
  window.reactive1 = app;
  console.log(ex1JS);
};
