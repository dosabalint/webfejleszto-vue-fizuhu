import Axios from 'axios';

export const BACKEND_URL = 'http://localhost:3000';
export const FIREBASE_URL = 'https://fizuhu.firebaseio.com';

export default {
    // post

    GetPosts() {
        return Axios.get(BACKEND_URL + '/blogposts').then(result => {
            return result.data;
        });
    },

    GetPost(postID) {
        return Axios.get(BACKEND_URL + '/blogposts/' + postID).then(result => {
            return result.data;
        });
    },

    // contact message

    PostContactMessage(data) {
        return Axios.post(FIREBASE_URL + '/contactMessages.json', data)
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
        return Axios.get(FIREBASE_URL + '/surveyResponses.json').then(result => {
            console.log(result.data);
            return result.data;
        });
    },

    PostSurveyResponse(data) {
        return Axios.post(FIREBASE_URL + '/surveyResponses.json', data)
            .then(() => {
                return true;
            })
            .catch(error => {
                console.warn(error);
                return false;
            });
    }
};
