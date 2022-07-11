import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'
import { Container } from './styles/Container.styled.js'
import { Rating } from './styles/Rating.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { ThemeProvider } from 'styled-components'

export default function Review() {

  const [stateData, modData] = useState([{ rating: 'filler', recommend: 'bool' }]);

  useEffect(() => {
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=37315')
      .then((data) => {
        console.log(data.data.results);
        modData(data.data.results);
      })
  }, [])

  // let number = (Math.round(value * 4) / 4).toFixed(2);



  return (
    <div>
      <Grid>
      {stateData.map((review) => (
        <div key={review.review_id}>
          <Rating rating={review.rating}>  </Rating>
          <div> {review.reviewer_name} </div>
          <div> {review.date} </div>
          <div> {review.summary} </div>
          <div> {review.body} </div>
          <div> {review.recommend.toString()} </div>
        </div>
      ))}
      </Grid>
    </div>
  );
}