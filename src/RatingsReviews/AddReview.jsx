import React, { useState, useEffect } from 'react'
import StarRating from './StarRating.jsx'
import { axiosGet } from '../../util.js'

export default function AddReview() {

  const [apiData, modData] = useState({name: 'filler'});

  useEffect(() => {
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37315')
      .then((data) => {
        console.log('apiInfo', data.data);
        modData(data.data);
      })
  }, [])

  return (
    <div>
      <h3>ADD A NEW REVIEW</h3>
      <h5>Thank you for sharing details on {apiData.name}!</h5>
      <h5>How do you rate this product?*</h5>
      <StarRating/>

    </div>
  );
}