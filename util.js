import axios from 'axios';
import { API_KEY } from './config';

export function axiosGet(url) {
  return axios.get(url, {
    headers: {
      Authorization: API_KEY,
    },
  });
}
export function axiosPost(url) {
  return axios.post(url, {
    headers: {
      Authorization: API_KEY,
    },
  });
}
