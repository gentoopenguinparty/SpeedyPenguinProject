import React, { useEffect, useState } from 'react'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { BarGraph } from './styles/BarGraph.styled.js'
import { BarContainer } from './styles/BarContainer.styled.js'
import { Star } from './styles/Star.styled.js'
import styled, { css } from 'styled-components';
import { axiosGet } from '../../util';

export default function RatingDisplay({ apiData, modData, cache, meta }) {

  function calcPercent(ratings, num) {
    let count = 0;
    for (var key in ratings) {
      count += parseInt(ratings[key]);
    }
    return (ratings[num] / count) * 100;
  }

  const [tracker, setTracker] = useState(null);

  function filterApi(cache, ratingVal) {
    let filter = [];
    for (var i = 0; i < cache.length; i++) {
      let rating = cache[i].rating
      if (Math.floor(rating) === ratingVal) {
        filter.push(cache[i])
      }
    }
    if(tracker === ratingVal) {
      // console.log('track!', tracker);
      modData([...cache]);
      setTracker(0);
    }
    if (tracker !== ratingVal && filter.length === 0 ) {
      modData([{
        noReview: true
      }])
      setTracker(ratingVal);
    }
    if (tracker !== ratingVal && filter.length !== 0){
      modData(filter);
      setTracker(ratingVal);
    }

    // console.log('cache', cache);
  }

  return (
    <div>
      <Grid padding={'0'} left={'30'}>
        <Row align={'center'}>
          <Col>
            <Star data-testid="5" onClick={() => { filterApi(cache, 5) }} >5 Star</Star>
          </Col>
          <Col>
            <BarContainer height={18} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(meta.ratings, 5)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star data-testid="4" onClick={() => { filterApi(cache, 4) }}>4 Star</Star>
          </Col>
          <Col>
            <BarContainer height={18} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(meta.ratings, 4)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star data-testid="3" onClick={() => { filterApi(cache, 3) }}>3 Star</Star>
          </Col>
          <Col>
            <BarContainer height={18} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(meta.ratings, 3)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star data-testid="2" onClick={() => { filterApi(cache, 2) }}>2 Star</Star>
          </Col>
          <Col>
            <BarContainer height={18} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(meta.ratings, 2)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star data-testid="1" onClick={() => { filterApi(cache, 1) }}>1 Star</Star>
          </Col>
          <Col>
            <BarContainer height={18} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(meta.ratings, 1)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

