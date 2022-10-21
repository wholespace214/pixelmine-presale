import Vue from "vue";

export default {
  install: (app, options) => {
    const eventBus = new Vue();
    app.config.globalProperties.eventBus = eventBus;
  },
};
