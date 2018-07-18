import Axios from "axios";

export const BACKEND_URL = "http://localhost:3000";
export const FIREBASE_URL = "https://fizuhulive.firebaseio.com";

const apiKey = "AIzaSyCvlkvW4h6TMm0VRG_W1rF7jffWEMpgs-w";

const signInUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`;
const signUpUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`;

export default {
  Auth({ email, password, isSignUp }) {
    return Axios.post(isSignUp ? signUpUrl : signInUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    })
      .then(r => r.data)
      .then(r => {
        console.log("loginapi:", r);
        return r;
      })
      .catch(err => {
        console.warn(err);
        return Promise.reject(err.response.data.error.message);
      });
  },

  // SignUp({ email, password }) {
  //   return Axios.post(signUpUrl, {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true
  //   })
  //     .then(r => r.data)
  //     .then(r => {
  //       console.log("signup:", r);
  //       return r;
  //     })
  //     .catch(err => {
  //       console.warn(err);
  //       return Promise.reject(err.response.data.error.message);
  //     });
  // },

  GetPosts() {
    return Axios.get(`${FIREBASE_URL}/blogposts.json`).then(result => {
      return result.data;
    });
  },

  GetPost(postID) {
    return Axios.get(`${FIREBASE_URL}/blogposts/${postID}.json`).then(
      result => {
        return result.data;
      }
    );
  },

  // contact message

  PostContactMessage(data) {
    return Axios.post(FIREBASE_URL + "/contactMessages.json", data)
      .then(() => {
        return true;
      })
      .catch(error => {
        console.warn(error);
        return false;
      });
  },

  // survey

  GetSurveyData() {
    return Axios.get(FIREBASE_URL + "/surveyResponses.json").then(result => {
      return result.data;
    });
  },

  PostSurveyResponse(data) {
    return Axios.post(FIREBASE_URL + "/surveyResponses.json", data)
      .then(() => {
        return true;
      })
      .catch(error => {
        console.warn(error);
        return false;
      });
  }
};
