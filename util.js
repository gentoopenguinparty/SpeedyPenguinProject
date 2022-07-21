/* eslint-disable arrow-body-style */
const axios = require('axios');
const API_KEY = require('./config');

const headers = {
  headers: { Authorization: API_KEY },
};

module.exports = {
  axiosGet: (url) => {
    return axios.get(url, {
      headers: {
        Authorization: API_KEY,
      },
    });
  },
  axiosPost: (url, data) => {
    return axios.post(url, data, {
      headers: {
        Authorization: API_KEY,
        'Content-Type': 'application/json',
      },
    });
  },
  axiosPut: (url) => {
    return axios.put(url, null, {
      headers: {
        Authorization: API_KEY,
      },
    });
  },
  getAll: (id) => {
    const array = [axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, headers),
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`, headers),
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${id}`, headers),
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}`, headers)];
    return Promise.all(array);
  },
};
