import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-elegant-store.firebaseio.com/'
});

export default instance;