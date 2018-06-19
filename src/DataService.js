import Axios from 'axios';

export const BACKEND_URL = 'http://localhost:3000';

export default {
    GetPosts() {
        return Axios.get(BACKEND_URL + '/blogposts').then(result => {
            return result.data;
        });
    }
};
