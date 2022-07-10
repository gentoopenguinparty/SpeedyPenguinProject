import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'
import Review from './Review.jsx'
let axios = require('axios');

export default function BigList() {

  // const [stateData, modData] = useState(null);

  // useEffect(() => {
  //   axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=37315')
  //     .then((data) => {
  //       // console.log(data.data);
  //       modData(data.data);
  //     })
  // }, [])

  return (
    <div>
      <Review/>
    </div>
  );
}