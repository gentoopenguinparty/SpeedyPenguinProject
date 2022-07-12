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

  return (
    <div key='reviews'>
      <Grid color={'#FAEBD7'}>
        {apiData.slice(0,countReviews).map((review, index) => (
          <div key={review.review_id} data-testid='testRender'>
            <Row space={'space-between'}>
              <Col > <Rating rating={number(review.rating)}> </Rating> </Col>
              <Col > {review.reviewer_name} {review.date.slice(0, 10)} </Col>
            </Row>
            <Row space={'space-between'} >
              <Col> {review.summary} </Col>
            </Row>
            <Row >
              <Col> {review.body} </Col>
            </Row>
            <Row space={'space-between'} >
              <Col > {'recommended? ' + review.recommend.toString()} </Col>
            </Row>
          </div>
        ))}
      </Grid>
    </div>
  );
}