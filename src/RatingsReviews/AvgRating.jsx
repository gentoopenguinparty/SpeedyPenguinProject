import React, { useEffect, useState } from 'react'
import { Rating } from './styles/Rating.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'

function quarter(rating) {
  return (Math.round(rating * 4) / 4).toFixed(2);
}

function avgRating(apiData) {
  let ratings = [];
  for (var i = 0; i < apiData.length; i++) {
    ratings.push(apiData[i].rating);
  }
  let average = ratings.reduce((acc, c) => acc + c) / ratings.length;
  return average;
}

function displayRating(avgRating) {
  return (Math.round(avgRating * 4) / 4).toFixed(1);
}


export default function AvgRating({ apiData }) {
  return (
    <div>
      <Grid color={'#FF7F50'}>
        <Row> <Col>
          <Rating rating={quarter(avgRating(apiData))}> </Rating>
          <div>Average Rating: {displayRating(avgRating(apiData))} </div>
        </Col> </Row>
      </Grid>
    </div>
  )

}