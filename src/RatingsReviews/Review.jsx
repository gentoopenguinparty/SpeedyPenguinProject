import React, { useEffect, useState } from 'react'
import { axiosGet, axiosPut } from '../../util.js'
import { Container } from './styles/Container.styled.js'
import { Rating } from './styles/Rating.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { ThemeProvider } from 'styled-components'
import Popup from './Popup.jsx'
import StarRatings from 'react-star-ratings';

export default function Review({ countReviews, setDataLength, apiData, setCache,
  setMeta, modData }) {

  function handlePut(id) {
    // console.log('putID', id)
    axiosPut('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/' + id + '/helpful')
      .then(() => { handleRefresh() })
  }

  function handleRefresh() {
    let id = window.location.href.slice(22, 27) || 38000;
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=' + id)
      .then((data) => {
        // console.log(data.data.results);
        setCache(data.data.results);
        modData(data.data.results);
        setDataLength(data.data.results.length);
      })
  }

  function number(rating) {
    // console.log('numberr', rating);
    return parseInt((Math.round(rating * 4) / 4).toFixed(2));
  }

  const [trigger, changeTrigger] = useState(false);
  const [url, setUrl] = useState('');

  function handleClickAdd(event) {
    // console.log('photosadad', event.target.src)
    setUrl(event.target.src)
    changeTrigger(!trigger)
  }

  function formatDate(date) {
    let newDate = date.slice(0, 10);
    newDate = newDate.split('-');
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[parseInt(newDate[1]) - 1];
    let day = parseInt(newDate[2]);
    return (`${month} ${day}, ${newDate[0]}`);
  }

  return (
    <div key='reviews'>

      <Grid color={'rgb(230,230,230)'} padding={'5'} height={'1000'}
        width={'1000'} left={'20'} right={'20'}>
        {apiData.slice(0, countReviews).map((review, index) => (
          (review.noReview ?
            <div>no review for this rating</div> :
            <Grid color={'rgb(250,250,250)'} key={review.review_id} bColor={'orange'}
              border={'solid'} padding={'10'} bottom={'5'}>
              <Row space={'space-between'} padding={10}>
                <Col >
                  <StarRatings rating={number(review.rating)} starDimension="15px"
                    starSpacing="3px" starRatedColor="black"
                    style={{ WebkitTextStroke: '1px black' }} />
                </Col>
                <Col > {`✅ ${review.reviewer_name},`} &nbsp; {formatDate(review.date)} </Col>
              </Row>
              <Row space={'space-between'} padding={10}>
                <Col weight={'bold'}> {review.summary} </Col>
              </Row>
              <Row padding={10} color={'rgb(230, 230, 230)'} >
                <Col> {review.body} </Col>
              </Row>
              <Row space={'flex-start'}>
                {/*console.log('photos', review.photos)*/}
                {review.photos.length > 0 ?
                  review.photos.map((photo, i) => {
                    return (
                      <div key={i} style={{ padding: '5px 0 0 0' }}>
                        <div style={{ margin: '0 0 0 10px' }}>
                          <img onClick={(event) => { handleClickAdd(event); }} key={i} style={{ height: '100px', width: '100px' }}
                            src={photo.url} />
                        </div>
                      </div>
                    )
                  }) : null}
              </Row>
              <Row space={'space-between'} padding={10} >
                {review.recommend ? <Col color={'rgb(240,240,240)'}> ☑️ Reviewer recommends this product </Col> : null}
              </Row>
              <Row align={'center'} padding={10} >
                <Col style={{ fontSize: '13px' }}>Was this review helpful?</Col>
                <Col style={{ marginLeft: '10px', fontSize: '13px' }} onClick={() => { handlePut(review.review_id); }}>Yes</Col>
                <Col style={{ marginLeft: '10px', fontSize: '13px' }} >|</Col>
                <Col style={{ marginLeft: '10px', fontSize: '13px' }}>No</Col>
                <Col style={{ marginLeft: '10px', fontSize: '13px' }}>{review.helpfulness} People found this helpful</Col>
              </Row>
            </Grid >)
        ))}
      </Grid>
      <Popup trigger={trigger} changeTrigger={changeTrigger} url={url}>
        <img style={{ height: '96%', width: '96%', margin: '0 0 0 10px' }} src={url} />
      </Popup>
    </div>
  );
}