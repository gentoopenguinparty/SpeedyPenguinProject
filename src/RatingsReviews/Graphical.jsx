import React, { useEffect, useState } from 'react'
import AvgRating from './AvgRating.jsx'
import RatingDisplay from './RatingDisplay.jsx'
import ComfortSize from './ComfortSize.jsx';
import styled from 'styled-components';
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'

export default function Graphical({ apiData, modData, cache, meta}) {



  return (
    <Grid color={'rgb(230,230,230)'} width = {'350'} border={'solid'} bColor={'orange'}>
      <AvgRating meta={meta}/>
      <RatingDisplay apiData={apiData} modData={modData} cache={cache} meta={meta} />
      <ComfortSize meta={meta}/>
    </Grid>
  )
}