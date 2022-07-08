import React from 'react';
import { axiosGet } from '../../util';

export default function ProductDetail() {
  axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/:rfe/products').then(data => console.log(data))

  return (<p>Hello Product Details</p>);
}
