import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

const apiKey = "AIzaSyCvlkvW4h6TMm0VRG_W1rF7jffWEMpgs-w";

Vue.use(Vuex);

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
  url: {
    signIn: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`,
    signUp: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`,
    firebase: "https://fizuhulive.firebaseio.com"
  },
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
  [TYPES.actions.signIn]({ dispatch }, credentialsPayload) {
    return dispatch(TYPES.actions.auth, {
      ...credentialsPayload,
      isSignUp: false
    });
  },
  [TYPES.actions.signUp]({ dispatch }, credentialsPayload) {
    return dispatch(TYPES.actions.auth, {
      ...credentialsPayload,
      isSignUp: true
    });
  },
  [TYPES.actions.auth]({ commit, state }, { email, password, isSignUp }) {
    return Axios.post(isSignUp ? state.url.signUp : state.url.signIn, {
      email: email,
      password: password,
      returnSecureToken: true
    })
      .then(r => r.data)
      .then(r => {
        console.log("loginapi:", r);
        commit(TYPES.mutations.setUser, r);
        return r;
      })
      .catch(err => {
        console.warn(err);
        return Promise.reject(err.response.data.error.message);
      });
  }
};

const mutations = {
  [TYPES.mutations.setUser](state, userPayload) {
    console.log("userMutation: ", userPayload);
    state.user = { ...userPayload };
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
