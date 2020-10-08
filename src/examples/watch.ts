import nn from "jeffs_frontend_lib";
import watchTextContent from "../textContent/watch.json";
export default (attachElSelector: string) => {
  const app = new nn({
    el: attachElSelector,
    data: {
      ...watchTextContent,
      currentRoll: 'none'
    },
    watch: {
      currentRoll: function() {

      }
    }
  });
  //@ts-ignore
  // lastRoll currRoll
  window.watchExample = app;
  app.$el.querySelector('button').addEventListener('click', () => {
    app.state.currentRoll = Math.ceil(Math.random() * 6);
  });
};
