import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'
import { Container } from './styles/Container.styled.js'
import { Rating } from './styles/Rating.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { ThemeProvider } from 'styled-components'

export default function Review({countReviews, setDataLength, apiData}) {

  function number (rating) {
    return (Math.round(rating * 4) / 4).toFixed(2);
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
        {apiData.slice(0,countReviews).map((review, index) => (
          <div key={review.review_id} data-testid='testRender'>
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
            <Row space={'space-between'} padding={10}>
              <Col > {'recommended? ' + review.recommend.toString()} </Col>
            </Row>
          </div>
        ))}
      </Grid>
    </div>
  );
}