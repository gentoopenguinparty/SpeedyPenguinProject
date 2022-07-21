import React, { useState, useEffect } from 'react'
import PhotoCloud from './PhotoCloud.jsx'
import StarRating from './StarRating.jsx'
import Size from './Size.jsx'
import Fit from './Fit.jsx'
import Comfort from './Comfort.jsx'
import Quality from './Quality.jsx'
import Length from './Length.jsx'
import Width from './Width.jsx'
import ReviewSummary from './ReviewSummary.jsx'
import ReviewBody from './ReviewBody.jsx'
import { axiosGet } from '../../util.js'
import Photo from './Photo.jsx'
import Email from './Email.jsx'
import NickName from './NickName.jsx'
import { Button } from './styles/Button.styled.js'
import { axiosPost } from '../../util';
import Recommend from './Recommend.jsx'

export default function AddReview({ changeTrigger, setCache,
  setMeta, setDataLength, modData, cache, meta }) {

  const [size, setSize] = useState(false)
  const [comfort, setComfort] = useState(false)
  const [fit, setFit] = useState(false)
  const [quality, setQuality] = useState(false)
  const [width, setWidth] = useState(false)
  const [length, setLength] = useState(false)


  useEffect(() => {
    let charObj = {};
    if (meta.characteristics.Size) {
      setSize(true);
      let sizeId = meta.characteristics.Size.id;
      charObj[sizeId] = ratingSize;
    }
    if (meta.characteristics.Comfort) {
      setComfort(true);
      let comfortId = meta.characteristics.Comfort.id;
      charObj[comfortId] = ratingComfort;
    }
    if (meta.characteristics.Fit) {
      setFit(true);
      let fitId = meta.characteristics.Fit.id;
      charObj[fitId] = ratingFit;
    }
    if (meta.characteristics.Quality) {
      setQuality(true);
      let qualityId = meta.characteristics.Quality.id;
      charObj[qualityId] = ratingQuality;
    }
    if (meta.characteristics.Width) {
      setWidth(true);
      let widthId = meta.characteristics.Width.id;
      charObj[widthId] = ratingWidth;
    }
    if (meta.characteristics.Length) {
      setLength(true);
      let lengthId = meta.characteristics.Length.id;
      charObj[lengthId] = ratingLength;
    }
  }, [])


  const [product, setProduct] = useState({ name: 'filler' });

  useEffect(() => {
    let id = window.location.href.slice(22, 27) || 38000;
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/' + id)
      .then((data) => {
        // console.log('apiInfo', data.data);
        setProduct(data.data);
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
    // console.log('ratingSR', ratingSR);
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
    if (wordsRB.length < 50) {
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
      setEmailWarn(true);
      err = true;
    } else {
      setEmailWarn(false);
    }
    if (!err) {

      let id = window.location.href.slice(22, 27) || 38000;
      let state = {
        "product_id": parseInt(id),
        "rating": ratingSR,
        "summary": wordsRS,
        "body": wordsRB,
        "recommend": reco,
        "name": wordsNick,
        "email": wordsEmail,
        "photos": files || [''],
        "characteristics": {}
      }
      // console.log('state', state)
      axiosPost('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/', state)
        .then(() => { console.log('suc') })
        .then(() => { changeTrigger(false) })
        .then(() => { handleRefresh() })
        .catch((err) => console.log('err', err))
    }
  }

  function handleRefresh() {
    let id = window.location.href.slice(22, 27) || 38000;
    axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}&count=1000`)
      .then((data) => {
        // console.log(data.data.results);
        setCache(data.data.results);
        modData(data.data.results);
        setDataLength(data.data.results.length);
      })
  }


  const [ratingSR, setRatingSR] = useState(0);
  const [ratingSize, setRatingSize] = useState(0);
  const [ratingComfort, setRatingComfort] = useState(0);
  const [ratingFit, setRatingFit] = useState(0);
  const [ratingQuality, setRatingQuality] = useState(0);
  const [ratingLength, setRatingLength] = useState(0);
  const [ratingWidth, setRatingWidth] = useState(0);

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [wordsRS, setWordsRS] = React.useState('');
  const [wordsRB, setWordsRB] = React.useState('');
  const [files, setFile] = useState([]);
  const [wordsNick, setWordsNick] = React.useState('');
  const [wordsEmail, setWordsEmail] = React.useState('');
  const [reco, setReco] = React.useState('');

  return (
    <div>
      <h3 data-testid='addReview'>ADD A NEW REVIEW</h3>
      <h5>Thank you for sharing details on {product.name}!</h5>
      <h5>How do you rate this product?*</h5>
      <StarRating rating={ratingSR} setRating={setRatingSR} />
      <Recommend reco={reco} setReco={setReco} />
      {size ? <Size rating={ratingSize} setRating={setRatingSize} /> : null}
      {comfort ? <Comfort rating={ratingComfort} setRating={setRatingComfort} /> : null}
      {fit ? <Fit rating={ratingFit} setRating={setRatingFit} /> : null}
      {quality ? <Quality rating={ratingQuality} setRating={setRatingQuality} /> : null}
      {length ? <Length rating={ratingLength} setRating={setRatingLength} /> : null}
      {width ? <Width rating={ratingWidth} setRating={setRatingWidth} /> : null}
      <ReviewSummary words={wordsRS} setWords={setWordsRS} />
      <ReviewBody words={wordsRB} setWords={setWordsRB} />
      {console.log('files',files)}
      <div>testtest</div>
      <PhotoCloud image={image} setImage={setImage} url={url} setUrl={setUrl}/>
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