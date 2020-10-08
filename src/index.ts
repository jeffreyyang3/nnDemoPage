import nn from "jeffs_frontend_lib";
import app1 from "./examples/app1";
import app2 from "./examples/app2";
import app3 from "./examples/app3";
import watch from "./examples/watch";
import intro from "./textContent/intro.json";
const t0 = performance.now();
app1("#ex1");
app2("#ex2");
app3("#ex3");
watch("#ex4");
const desc = new nn({
  el: "#desc",
  data: intro
});
const t1 = performance.now();
console.log(`rendering took ${t1 - t0} ms`);
