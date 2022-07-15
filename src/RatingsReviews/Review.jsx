import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'
import { Container } from './styles/Container.styled.js'
import { Rating } from './styles/Rating.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { ThemeProvider } from 'styled-components'
import Popup from './Popup.jsx'

export default function Review({ countReviews, setDataLength, apiData }) {

  function number(rating) {
    return (Math.round(rating * 4) / 4).toFixed(2);
  }

  const [trigger, changeTrigger] = useState(false);

  function handleClickAdd() {
    changeTrigger(!trigger)
  }

  function formatDate(date) {
    let newDate = date.slice(0, 10);
    newDate = newDate.split('-');
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[parseInt(newDate[1]) - 1];
    let day = parseInt(newDate[2]);
    console.log(`${month} ${day}, ${newDate[0]}`)
    return (`${month} ${day}, ${newDate[0]}`);
  }

  return (
    <div key='reviews'>

      <Grid color={'#FAEBD7'}>

        {apiData.slice(0, countReviews).map((review, index) => (
          (review.noReview ?
            <div>no review for this rating</div> :
            <div key={review.review_id} >
              <Row space={'space-between'} padding={10}>
                <Col > <Rating rating={number(review.rating)}> </Rating> </Col>
                <Col > {`${review.reviewer_name},`} &nbsp; {formatDate(review.date)} </Col>
              </Row>
              <Row space={'space-between'} padding={10}>
                <Col> {review.summary} </Col>
              </Row>
              <Row padding={10}>
                <Col> {review.body} </Col>
              </Row>
              <Row>
                <Col>
                  {console.log('photos', review.photos)}
                  {review.photos.length > 0 ?
                    review.photos.map((photo, i) => {
                      return (
                        <div>
                          <img onClick={(event) => { handleClickAdd(); }} key={i} style={{ height: '100px', width: '100px' }}
                            src={photo.url} />
                          <Popup trigger={trigger} changeTrigger={changeTrigger}>
                            <img style={{ height: '70%', width: '70%' }} src={photo.url} />
                          </Popup>
                        </div>)
                    }) : null}
                </Col>
              </Row>
              <Row space={'space-between'} padding={10}>
                <Col > {'recommended? ' + review.recommend.toString()} </Col>
              </Row>
            </div>)
        ))}
      </Grid>
    </div>
  );
}