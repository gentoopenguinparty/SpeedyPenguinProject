import React, { useState, useEffect } from 'react'
import StarRating from './StarRating.jsx'
import Size from './Size.jsx'
import Comfort from './Comfort.jsx'
import ReviewSummary from './ReviewSummary.jsx'
import ReviewBody from './ReviewBody.jsx'
import { axiosGet } from '../../util.js'
import Photo from './Photo.jsx'
import Email from './Email.jsx'
import NickName from './NickName.jsx'
import { Button } from './styles/Button.styled.js'
import { axiosPost } from '../../util';

export default function AddReview() {

  const [apiData, modData] = useState({ name: 'filler' });

  useEffect(() => {
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37316')
      .then((data) => {
        console.log('apiInfo', data.data);
        modData(data.data);
      })
  }, [])

  let testData = {
    "product_id": 37316,
    "rating": 1,
    "summary": "I like",
    "recommend": true,
    "body": "gems are outrageous, TRULY TRULY TRULY outrageous",
    'email': '',
    "name": "Mom",
    "photos": [''],
    'characteristics': {}
}

// let testData2 = {
//     "review_id": 1115596,
//     "rating": 4,
//     "summary": "Okay",
//     "recommend": false,
//     "response": null,
//     "body": "Was good, not for me. Nice quality and everything but not my style.",
//     "date": "2022-06-03T00:00:00.000Z",
//     "reviewer_name": "Test",
//     "helpfulness": 9,
//     "photos": []
// }



  function handleSubmit(event, data) {
    console.log('data', data)
    axiosPost('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/', data)
    .then(()=>{console.log('suc')})
    .catch((err) => console.log('err', err))
  }

  return (
    <div>
      <h3>ADD A NEW REVIEW</h3>
      <h5>Thank you for sharing details on {apiData.name}!</h5>
      <h5>How do you rate this product?*</h5>
      <StarRating />
      <h5>How do you rate the sizing?*</h5>
      <Size />
      <h5>How do you rate the comfort?*</h5>
      <Comfort />
      <ReviewSummary/>
      <ReviewBody/>
      <Photo/>
      <NickName/>
      <Email/>
      <Button onClick={(e)=>{handleSubmit(e, testData);}}> submit! </Button>
    </div>
  );
}