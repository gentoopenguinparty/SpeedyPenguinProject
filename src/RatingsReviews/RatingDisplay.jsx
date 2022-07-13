import React, { useEffect, useState } from 'react'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { BarGraph } from './styles/BarGraph.styled.js'
import { BarContainer } from './styles/BarContainer.styled.js'
import { Star } from './styles/Star.styled.js'
import styled, { css } from 'styled-components';
import { axiosGet } from '../../util';

export default function RatingDisplay({ apiData, modData, cache}) {

  function numOrganizer(apiData) {
    let ratings = { 1: [], 2: [], 3: [], 4: [], 5: [] }
    for (var i = 0; i < apiData.length; i++) {
      let num = Math.floor(apiData[i].rating);
      if (ratings[num] !== undefined) {
        ratings[num].push(num);
      }
    }
    return ratings;
  }

  function calcPercent(ratings, num) {
      return (ratings[num].length / apiData.length) * 100;
  }

  function filterApi(cache, ratingVal) {
    let filter = [];
    for (var i = 0; i < cache.length; i++) {
      let rating = cache[i].rating
      if (Math.floor(rating) === ratingVal) {
        filter.push(cache[i])
      }
    }
    if (filter.length === 0) {
      modData([{
        rating: '', recommend: '',
        date: '', review_id: ''
      }])

    } else {
      modData(filter);
    }
    console.log('cache', cache);
  }


  return (
    <div>
      <Grid>
        <Row align={'center'}>
          <Col>
            <Star onClick={() => { filterApi(cache, 1) }}>1 Star</Star>
          </Col>
          <Col>
            <BarContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(numOrganizer(cache), 1)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star onClick={() => { filterApi(cache, 2) }}>2 Star</Star>
          </Col>
          <Col>
            <BarContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(numOrganizer(cache), 2)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star onClick={() => { filterApi(cache, 3) }}>3 Star</Star>
          </Col>
          <Col>
            <BarContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(numOrganizer(cache), 3)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star onClick={() => { filterApi(cache, 4) }}>4 Star</Star>
          </Col>
          <Col>
            <BarContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(numOrganizer(cache), 4)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star onClick={() => { filterApi(cache, 5) }} >5 Star</Star>
          </Col>
          <Col>
            <BarContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(numOrganizer(cache), 5)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
      </Grid>

    </div>
  )
}

