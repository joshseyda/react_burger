import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-0102.firebaseio.com/'
})

export default instance;