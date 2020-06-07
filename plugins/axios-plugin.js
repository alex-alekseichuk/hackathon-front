import axios from 'axios'

export default ({ app }, inject) => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    timeout: 1000
  });
  inject('api', instance)
}
