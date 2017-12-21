import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:4040/api/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})
