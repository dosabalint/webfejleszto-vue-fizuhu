import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import DataService from "./DataService";

const state = {
  user: {
    kind: "",
    idToken: "",
    email: "",
    refreshToken: "",
    expiresIn: "",
    localId: ""
  }
};

const actions = {
  signInAction(vuexContext, credentialsPayload) {
    return vuexContext.dispatch("authAction", {
      ...credentialsPayload,
      isSignUp: false
    });
  },
  signUpAction(vuexContext, credentialsPayload) {
    return vuexContext.dispatch("authAction", {
      ...credentialsPayload,
      isSignUp: true
    });
  },
  authAction(vuexContext, authPayload) {
    return DataService.Auth(authPayload).then(r =>
      vuexContext.commit("setUserMutation", r)
    );
  }
};

const mutations = {
  setUserMutation(state, userPayload) {
    console.log("userMutation: ", userPayload);
    state.user = Object.assign({}, userPayload);
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
