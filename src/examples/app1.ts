import nn from 'jeffs_frontend_lib';
export default (attachElSelector: string) => {
  const app = new nn({
    el: attachElSelector,
    data: {
      exData: 'exData',
      description: `Here's a simple example: this instance has been made available globally
      as 'reactive1'. The HTML content below is tied to the property 'exData'. You can try modifying
      that data property by reassigning reactive1.state.exData. If you look at the state, you'll
      also find that this description is also a property on the state, which can also be changed!`
    }
  });
  //@ts-ignore
  window.reactive1 = app;
};
