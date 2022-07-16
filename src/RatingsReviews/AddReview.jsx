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

export default function AddReview({ changeTrigger }) {

  const [apiData, modData] = useState({ name: 'filler' });

  useEffect(() => {
    let id = window.location.href.slice(22, 27) || 38000;
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/' + id)
      .then((data) => {
        console.log('apiInfo', data.data);
        modData(data.data);
      })
  }, [])
  // email and nickname
  const [starWarn, setStarWarn] = useState(false);
  const [recoWarn, setRecoWarn] = useState(false);
  const [sizeWarn, setSizeWarn] = useState(false);
  const [comfortWarn, setComfortWarn] = useState(false);
  const [bodyWarn, setBodyWarn] = useState(false);
  const [nickWarn, setNickWarn] = useState(false);
  const [emailWarn, setEmailWarn] = useState(false);

  function handleSubmit(event) {
    let err = false;
    console.log('ratingSR', ratingSR);
    if (ratingSR === 0) {
      setStarWarn(true);
      err = true;
    } else {
      setStarWarn(false);
    }
    if (reco === '') {
      setRecoWarn(true)
      err = true;
    } else {
      setRecoWarn(false);
    }
    if (ratingSize === 0) {
      setSizeWarn(true)
      err = true;
    } else {
      setSizeWarn(false)
    }
    if (ratingComfort === 0) {
      setComfortWarn(true)
      err = true;
    } else {
      setComfortWarn(false)
    }
    if (wordsRB < 50) {
      setBodyWarn(true)
      err = true;
    } else {
      setBodyWarn(false);
    }
    if (wordsNick === '') {
      setNickWarn(true);
      err = true;
    } else {
      setNickWarn(false);
    }
    if (wordsEmail.indexOf('@') === -1 || wordsEmail.indexOf('.com') === -1) {
      console.log('emai', wordsEmail)
      setEmailWarn(true);
      err = true;
    } else {
      setEmailWarn(false);
    }
    if (!err) {

      let id = window.location.href.slice(22, 27) || 38000;
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
        .then(() => { console.log('suc') })
        .then(() => { changeTrigger(false) })
        .catch((err) => console.log('err', err))
    }
  }


  const [ratingSR, setRatingSR] = useState(0);
  const [ratingSize, setRatingSize] = useState(0);
  const [ratingComfort, setRatingComfort] = useState(0);
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
      <StarRating rating={ratingSR} setRating={setRatingSR} />
      <Recommend reco={reco} setReco={setReco} />
      <h5>How do you rate the sizing?*</h5>
      <Size rating={ratingSize} setRating={setRatingSize} />
      <h5>How do you rate the comfort?*</h5>
      <Comfort rating={ratingComfort} setRating={setRatingComfort} />
      <ReviewSummary words={wordsRS} setWords={setWordsRS} />
      <ReviewBody words={wordsRB} setWords={setWordsRB} />
      <Photo files={files} setFile={setFile} />
      <NickName words={wordsNick} setWords={setWordsNick} />
      <Email words={wordsEmail} setWords={setWordsEmail} />
      <Button onClick={(e) => { handleSubmit(e); }}> submit! </Button>
      {starWarn ? <div style={{ color: 'red', fontSize: '13px' }}>
        error: review has to have a star rating</div> : null}
      {recoWarn ? <div style={{ color: 'red', fontSize: '13px' }}>
        error: review has to have a 'would you recommend' field complete</div> : null}
      {sizeWarn ? <div style={{ color: 'red', fontSize: '13px' }}>
        error: review has to have a size characteristic</div> : null}
      {comfortWarn ? <div style={{ color: 'red', fontSize: '13px' }}>
        error: review has to have a 'comfort' characteristic</div> : null}
      {bodyWarn ? <div style={{ color: 'red', fontSize: '13px' }}>
        error: review body does not meet length requirement</div> : null}
      {nickWarn ? <div style={{ color: 'red', fontSize: '13px' }}>
        error: nickname has not met set requirements</div> : null}
      {emailWarn ? <div style={{ color: 'red', fontSize: '13px' }}>
        error: email must be in proper format</div> : null}
    </div>
  );
}