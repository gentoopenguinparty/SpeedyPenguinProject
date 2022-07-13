import React, { useEffect, useState } from 'react'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { BarGraph } from './styles/BarGraph.styled.js'
import { BarContainer } from './styles/BarContainer.styled.js'
import { Star } from './styles/Star.styled.js'
import styled, { css } from 'styled-components';

export default function RatingDisplay({ apiData }) {

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
    if (typeof apiData[0].rating === 'number') {
      return (ratings[num].length / apiData.length) * 100;
    }
  }


  return (
    <div>
      <Grid>
        <Row align={'center'}>
          <Col>
            <Star>1 Star</Star>
          </Col>
          <Col>
            <BarContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(numOrganizer(apiData), 1)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star>2 Star</Star>
          </Col>
          <Col>
            <BarContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(numOrganizer(apiData), 2)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star>3 Star</Star>
          </Col>
          <Col>
            <BarContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(numOrganizer(apiData), 3)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star>4 Star</Star>
          </Col>
          <Col>
            <BarContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(numOrganizer(apiData), 4)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
        <Row align={'center'}>
          <Col>
            <Star>5 Star</Star>
          </Col>
          <Col>
            <BarContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
              <BarGraph percent={calcPercent(numOrganizer(apiData), 5)}></BarGraph>
            </BarContainer>
          </Col>
        </Row>
      </Grid>

    </div>
  )
}

{/* <Grid>
<BarContainer>  <BarGraph percent={calcPercent(numOrganizer(apiData), 1)}>
</BarGraph> </BarContainer>
<BarContainer>  <BarGraph percent={calcPercent(numOrganizer(apiData), 2)}>
</BarGraph> </BarContainer>
<BarContainer>  <BarGraph percent={calcPercent(numOrganizer(apiData), 3)}>
</BarGraph> </BarContainer>
<BarContainer>  <BarGraph percent={calcPercent(numOrganizer(apiData), 4)}>
</BarGraph> </BarContainer>
<BarContainer>  <BarGraph percent={calcPercent(numOrganizer(apiData), 5)}>
</BarGraph> </BarContainer>
</Grid> */}


{/* <div>
<Grid>
  <Col>
    <Row>1</Row>
    <Row>2</Row>
    <Row>3</Row>
    <Row>4</Row>
    <Row>5</Row>
  </Col>
  <Col>
    <Row border={'solid'} height={24} color={'rgb(136,136,136)'}>
      <BarGraph percent={calcPercent(numOrganizer(apiData), 1)}></BarGraph>
    </Row>
    <Row border={'solid'} height={24} color={'rgb(136,136,136)'}>
      <BarGraph percent={calcPercent(numOrganizer(apiData), 2)}></BarGraph>
    </Row>
    <Row border={'solid'} height={24} color={'rgb(136,136,136)'}>
      <BarGraph percent={calcPercent(numOrganizer(apiData), 3)}></BarGraph>
    </Row>
    <Row border={'solid'} height={24} color={'rgb(136,136,136)'}>
      <BarGraph percent={calcPercent(numOrganizer(apiData), 4)}></BarGraph>
    </Row>
    <Row border={'solid'} height={24} color={'rgb(136,136,136)'}>
      <BarGraph percent={calcPercent(numOrganizer(apiData), 5)}></BarGraph>
    </Row>
  </Col>
</Grid>
</div> */}