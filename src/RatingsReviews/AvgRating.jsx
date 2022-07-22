import React, { useEffect, useState } from 'react'
import { Rating } from './styles/Rating.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import StarRatings from 'react-star-ratings';

function quarter(avgRating) {
  return parseFloat((Math.round(avgRating * 4) / 4).toFixed(2));
}

function avgRating(meta) {

  let ratings = meta.ratings;
  let sum = 0;
  let count = 0;

  for (var key in ratings) {
    sum += (key * ratings[key]);
    count += parseInt(ratings[key]);
  }
  return sum / count;
}

function displayRating(avgRating) {
  return (Math.round(avgRating * 10) / 10).toFixed(1);
}


export default function AvgRating({ meta }) {
  return (

    <div>
      <Grid color={''} padding={'30'}>
        <Row >
        <Col  width={'150'}>
            <div style={{
              fontSize: '50px', fontWeight: 'bold',
              color: 'rgb(84, 84, 84)'
            }}>
              {displayRating(avgRating(meta))} </div>
            <StarRatings rating={quarter(avgRating(meta))} starDimension="25px"
              starSpacing="1px" starRatedColor="orange"
              style={{ 'border-styles': 'solid' }} />
          </Col>
        </Row>
      </Grid>
    </div>
  )

}