import nn from "jeffs_frontend_lib";
import app1 from "./examples/app1";
app1("#ex1");
const desc = new nn({
  el: "#desc",
  data: {
    title: "My Frontend Library",
    pars: [
      `This is a frontend micro-library focusing on data reactivity
      and HTML data binding.`,
      `$NAME gives a small subset of the functionality frameworks like React, 
      Angular, and Vue provide while also being less efficient and more infinite-loop
      prone.`,
      `It's very lightweight: 4kb min + gzip. $NAME is written using TypeScript, with
      no runtime dependencies.`,
    ],
    features: [
      "Reactive Data",
      "Computed Properties",
      "Property Watchers",
      "Two-Way input binding",
      "Declarative, reactive HTML list binding",
    ],
  },
});
