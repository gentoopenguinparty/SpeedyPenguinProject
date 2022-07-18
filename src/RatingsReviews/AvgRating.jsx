import React, { useEffect, useState } from 'react'
import { Rating } from './styles/Rating.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import StarRatings from 'react-star-ratings';

function quarter(avgRating) {
  // console.log('numTEst', ((Math.round(avgRating * 4) / 4).toFixed(2)));
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
  return sum/count;
}

function displayRating(avgRating) {
  return (Math.round(avgRating * 10) / 10).toFixed(1);
}


export default function AvgRating({ meta }) {
  return (

    <div>
      <Grid color={'#FF7F50'} padding={'30'}>
        <Row padding={10}> <Col>
        <StarRatings rating={quarter(avgRating(meta))} starDimension="25px"
                    starSpacing="1px" starRatedColor="black"
                    style={{'border-styles': 'solid'}}/>
          <div>Average Rating: {displayRating(avgRating(meta))} </div>
        </Col> </Row>
      </Grid>
    </div>
  )

}