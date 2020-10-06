import nn from "jeffs_frontend_lib";
import app1 from "./examples/app1";
import app2 from "./examples/app2";
import intro from "./textContent/intro.json";
const t0 = performance.now();
app1("#ex1");
app2("#ex2");
const desc = new nn({
  el: "#desc",
  data: intro
});
const t1 = performance.now();
console.log(`rendering took ${t1 - t0} ms`);
