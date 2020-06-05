import axios from 'axios'

export default ({ app }, inject) => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/api-mock',
    timeout: 1000
  });
  inject('api', instance)
}
