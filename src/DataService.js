import Axios from 'axios';

export const BACKEND_URL = 'http://localhost:3000';
export const FIREBASE_URL = 'https://fizuhu.firebaseio.com';

export default {
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
    PostContactMessage(data) {
        return Axios.post(FIREBASE_URL + '/contactMessages.json', data)
            .then(() => {
                return true;
            })
            .catch(error => {
                console.warn(error);
                return false;
            });
    }
};
