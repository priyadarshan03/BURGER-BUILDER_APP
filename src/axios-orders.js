import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-burger-builder-1f213-default-rtdb.firebaseio.com/'
});

export default instance ;