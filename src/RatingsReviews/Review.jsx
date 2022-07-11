import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'
import { Container } from './styles/Container.styled.js'
import { Rating } from './styles/Rating.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { ThemeProvider } from 'styled-components'

export default function Review() {

  const [stateData, modData] = useState([{
    rating: 'filler', recommend: 'bool',
    date: 'filler', renderIndex: 2
  }]);

  useEffect(() => {
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=37315')
      .then((data) => {
        console.log(data.data.results);
        data.data.results.unshift(3);
        console.log('apiInfo', data.data.results);
        modData(data.data.results);
      })
  }, [])

  // let number = (Math.round(value * 4) / 4).toFixed(2);

  return (
    <div>
      <Grid>
        {stateData.slice(1,stateData[0]).map((review) => (
          <div key={review.review_id}>
            <Row>
              <Col> <Rating rating={review.rating}> </Rating> </Col>
              <Col> {review.reviewer_name} {review.date.slice(0, 10)} </Col>
            </Row>
            <Row>
              <Col> {review.summary} </Col>
            </Row>
            <Row>
              <Col> {review.body} </Col>
            </Row>
            <Row>
              <Col> {'recommended? ' + review.recommend.toString()} </Col>
            </Row>
          </div>
        ))}
      </Grid>
    </div>
  );
}