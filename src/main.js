// CSS
import "bootstrap/scss/bootstrap.scss";
import "./style.scss";

// JS
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router";

// init
Vue.use(VueRouter);
new Vue({
  el: "#app",
  router,
  data() {
    return {
      user: {
        kind: "",
        idToken: "",
        email: "",
        refreshToken: "",
        expiresIn: "",
        localId: ""
      }
    };
  },
  methods: {
    setUserMutation(userPayload) {
      console.log("userMutation: ", userPayload);
      this.user = Object.assign({}, userPayload);
    }
  },
  render: h => h(App)
});
