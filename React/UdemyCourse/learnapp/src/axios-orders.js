import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-learn1-default-rtdb.firebaseio.com/'
});

export default instance;