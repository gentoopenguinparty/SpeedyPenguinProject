import React, { useEffect, useState } from 'react'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import {BarGraph} from './styles/BarGraph.styled.js'
import styled, { css } from 'styled-components';

export default function RatingDisplay({ apiData }) {

  function avgRating(apiData) {
    let ratings = [];
    for (var i = 0; i < apiData.length; i++) {
      ratings.push(apiData[i].rating);
    }
    console.log('ratings', ratings);
    return ratings;
  }


  return (
    <div>
    </div>
  )
}