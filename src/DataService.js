import Axios from "axios";

export const FIREBASE_URL = "https://fizuhulive.firebaseio.com";

export default {
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
