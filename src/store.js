import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import DataService from "./DataService";

export const TYPES = {
  actions: {
    signIn: "signIn",
    signUp: "signUp",
    auth: "auth"
  },
  mutations: {
    setUser: "setUser"
  }
};

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
  [TYPES.actions.signIn](vuexContext, credentialsPayload) {
    return vuexContext.dispatch(TYPES.actions.auth, {
      ...credentialsPayload,
      isSignUp: false
    });
  },
  [TYPES.actions.signUp](vuexContext, credentialsPayload) {
    return vuexContext.dispatch(TYPES.actions.auth, {
      ...credentialsPayload,
      isSignUp: true
    });
  },
  [TYPES.actions.auth](vuexContext, authPayload) {
    return DataService.Auth(authPayload).then(r =>
      vuexContext.commit(TYPES.mutations.setUser, r)
    );
  }
};

const mutations = {
  [TYPES.mutations.setUser](state, userPayload) {
    console.log("userMutation: ", userPayload);
    state.user = Object.assign({}, userPayload);
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
