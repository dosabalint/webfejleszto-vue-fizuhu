// CSS
import "bootstrap/scss/bootstrap.scss";
import "./style.scss";

// JS
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router";

import store from "./store";

// init
Vue.use(VueRouter);
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
