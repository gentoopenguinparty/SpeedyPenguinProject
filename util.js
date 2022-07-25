import axios from 'axios';

export function axiosGet(url) {
  return axios.get(url, {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
  });
}
export function axiosPost(url, data) {
  return axios.post(url, data, {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json',
    },
  });
}
export function axiosPut(url) {
  return axios.put(url, null, {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
  });
}

export function getAll(id) {
  const array = [axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`),
    axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`),
    axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${id}`),
    axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}&count=1000`)];
  return Promise.all(array);
}
