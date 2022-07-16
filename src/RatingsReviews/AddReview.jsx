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
import Recommend from './Recommend.jsx'

export default function AddReview() {

  const [apiData, modData] = useState({ name: 'filler' });

  useEffect(() => {
    let id = window.location.href.slice(22,27) || 38000;
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/' + id)
      .then((data) => {
        console.log('apiInfo', data.data);
        modData(data.data);
      })
  }, [])

  function handleSubmit(event) {
    let id = window.location.href.slice(22,27) || 38000;
    let state = {
      "product_id": id,
      "rating": ratingSR,
      "summary": wordsRS,
      "body": wordsRB,
      "recommend": reco,
      "name": wordsNick,
      "email": wordsEmail,
      "photos": files || [''],
      "characteristics": {}
    }
    console.log('state', state)
    axiosPost('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/', state)
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
  const [reco, setReco] = React.useState('');

  return (
    <div>
      <h3>ADD A NEW REVIEW</h3>
      <h5>Thank you for sharing details on {apiData.name}!</h5>
      <h5>How do you rate this product?*</h5>
      <StarRating rating={ratingSR} setRating={setRatingSR}/>
      <Recommend reco={reco} setReco={setReco}/>
      <h5>How do you rate the sizing?*</h5>
      <Size rating={ratingSize} setRating={setRatingSize}/>
      <h5>How do you rate the comfort?*</h5>
      <Comfort rating={ratingComfort} setRating={setRatingComfort}/>
      <ReviewSummary words={wordsRS} setWords={setWordsRS}/>
      <ReviewBody words={wordsRB} setWords={setWordsRB}/>
      <Photo files={files} setFile={setFile}/>
      <NickName words={wordsNick} setWords={setWordsNick}/>
      <Email words={wordsEmail} setWords={setWordsEmail}/>
      <Button onClick={(e)=>{handleSubmit(e);}}> submit! </Button>
    </div>
  );
}