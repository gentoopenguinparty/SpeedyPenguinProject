import React, { useState } from 'react'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { BarGraph } from './styles/BarGraph.styled.js'
import { BarContainer } from './styles/BarContainer.styled.js'
import { Triangle } from './styles/Triangle.styled.js'
import { TriangleContainer } from './styles/TriangleContainer.styled.js'

export default function ComfortSize() {

  return (
    <div>
      <Grid>
        <TriangleContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
          <Triangle ></Triangle>
        </TriangleContainer>
      </Grid>
    </div>
  )
}
