import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://dummyjson.com', // hoặc sử dụng biến môi trường
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
