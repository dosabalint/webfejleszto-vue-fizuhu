import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

const apiKey = "AIzaSyCvlkvW4h6TMm0VRG_W1rF7jffWEMpgs-w";
const emptyUserObject = {
  kind: "",
  idToken: "",
  email: "",
  refreshToken: "",
  expiresIn: "",
  localId: ""
};

Vue.use(Vuex);

export const TYPES = {
  actions: {
    signIn: "signIn",
    signUp: "signUp",
    auth: "auth",
    loadPosts: "loadPosts",
    postContactMessage: "postContactMessage",
    postSurveyResponse: "postSurveyResponse",
    getSurveyData: "getSurveyData"
  },
  mutations: {
    setUser: "setUser",
    deleteUser: "deleteUser",
    setPosts: "setPosts"
  },
  getters: {
    isLoggedIn: "isLoggedIn",
    getPost: "getPost"
  }
};

const state = {
  url: {
    signIn: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`,
    signUp: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`,
    firebase: "https://fizuhulive.firebaseio.com"
  },
  user: Object.assign(
    {},
    emptyUserObject,
    JSON.parse(localStorage.getItem("user"))
  ),
  posts: JSON.parse(localStorage.getItem("posts")) || []
};

const actions = {
  [TYPES.actions.getSurveyData]({ state }) {
    return Axios.get(
      `${state.url.firebase}/surveyResponses.json?auth=${state.user.idToken}`
    )
      .then(result => {
        return result.data;
      })
      .catch(error => {
        console.warn("getPost: ", error);
        return Promise.reject("getsurvey para");
      });
  },
  [TYPES.actions.postSurveyResponse]({ state }, surveyPayload) {
    return Axios.post(
      `${state.url.firebase}/surveyResponses.json?auth=${state.user.idToken}`,
      surveyPayload
    ).catch(error => {
      console.warn("store postSurvey: ", error);
      return Promise.reject("survey para");
    });
  },
  [TYPES.actions.postContactMessage]({ state }, contactPayload) {
    return Axios.post(
      `${state.url.firebase}/contactMessages.json?auth=${state.user.idToken}`,
      contactPayload
    ).catch(error => {
      console.warn("store postContactMsg:", error);
      return Promise.reject("contact msg para waaaa");
    });
  },
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
        commit(TYPES.mutations.deleteUser);
        return Promise.reject(err.response.data.error.message);
      });
  },
  [TYPES.actions.loadPosts]({ commit, state }) {
    return Axios.get(
      `${state.url.firebase}/blogposts.json?auth=${state.user.idToken}`
    )
      .then(r => r.data)
      .then(r => {
        commit(TYPES.mutations.setPosts, r);
        return r;
      });
  }
};

const mutations = {
  [TYPES.mutations.setUser](state, userPayload) {
    console.log("userMutation: ", userPayload);
    state.user = { ...userPayload };
    localStorage.setItem("user", JSON.stringify(state.user));
  },
  [TYPES.mutations.deleteUser](state) {
    state.user = { ...emptyUserObject };
    localStorage.removeItem("user");
  },
  [TYPES.mutations.setPosts](state, fbPost) {
    state.posts = Object.values(fbPost);
    localStorage.setItem("posts", JSON.stringify(state.posts));
  }
};

const getters = {
  [TYPES.getters.isLoggedIn]: state => Boolean(state.user.idToken),
  [TYPES.getters.getPost]: state => postId => {
    return state.posts.find(p => p.id === postId);
  }
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});
