import axios from './axios'

export function login(username, password) {
  return axios.post('/auth/login', { username, password })
}
