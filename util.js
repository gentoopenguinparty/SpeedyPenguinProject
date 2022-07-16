import axios from 'axios';
import { API_KEY } from './config';

export function axiosGet(url) {
  return axios.get(url, {
    headers: {
      Authorization: API_KEY,
    },
  });
}
export function axiosPost(url, data) {
  return axios.post(url, data, {
    headers: {
      Authorization: API_KEY,
<<<<<<< HEAD
    }
=======
      'Content-Type': 'application/json',
    },
>>>>>>> dev
  });
}
export function axiosPut(url) {
  return axios.put(url, null, {
    headers: {
      'Authorization': API_KEY,
    }
  });
}

