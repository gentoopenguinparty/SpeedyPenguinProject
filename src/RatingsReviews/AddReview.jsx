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

  let testData =
  {
    "product_id": 37316,
    "rating": 1,
    "summary": "I like",
    "body": "gems are outrageous, TRULY TRULY TRULY outrageous",
    "recommend": true,
    "name": "Mom",
    "email": "ad@email.com",
    "photos": [""],
    "characteristics": {}
}

  function handleSubmit(event, data) {
    console.log('data', data)
    axiosPost('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/', data)
    .then(()=>{console.log('suc')})
    .catch((err) => console.log('err', err))
  }

  const [ratingSR, setRatingSR] = useState(null);
  const [ratingSize, setRatingSize] = useState(null);
  const [ratingComfort, setRatingComfort] = useState(null);
  const [wordsRS, setWordsRS] = React.useState('');
  const [wordsRB, setWordsRB] = React.useState('');
  const [files, setFile] = useState('');
  const [wordsNick, setWordsNick] = React.useState('');
  const [wordsEmail, setWordsEmail] = React.useState('');

  return (
    <div>
      <h3>ADD A NEW REVIEW</h3>
      <h5>Thank you for sharing details on {apiData.name}!</h5>
      <h5>How do you rate this product?*</h5>
      <StarRating rating={ratingSR} setRating={setRatingSR}/>
      <h5>How do you rate the sizing?*</h5>
      <Size rating={ratingSize} setRating={setRatingSize}/>
      <h5>How do you rate the comfort?*</h5>
      <Comfort rating={ratingComfort} setRating={setRatingComfort}/>
      <ReviewSummary words={wordsRS} setWords={setWordsRS}/>
      <ReviewBody words={wordsRB} setWords={setWordsRB}/>
      <Photo files={files} setFile={setFile}/>
      <NickName words={wordsNick} setWords={setWordsNick}/>
      <Email words={wordsEmail} setWords={setWordsEmail}/>
      <Button onClick={(e)=>{handleSubmit(e, testData);}}> submit! </Button>
    </div>
  );
}