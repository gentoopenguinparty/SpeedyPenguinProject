import React, { useEffect, useState } from 'react'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { BarGraph } from './styles/BarGraph.styled.js'
import { BarContainer } from './styles/BarContainer.styled.js'
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

    </div>
  )
}