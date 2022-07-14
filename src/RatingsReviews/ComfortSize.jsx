import React, { useState } from 'react'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { BarGraph } from './styles/BarGraph.styled.js'
import { BarContainer } from './styles/BarContainer.styled.js'
import { Triangle } from './styles/Triangle.styled.js'
import { TriangleContainer } from './styles/TriangleContainer.styled.js'

export default function ComfortSize({ meta }) {

  let size = meta.characteristics.Size.value;
  let comfort = meta.characteristics.Comfort.value;
  function calcPercent(value) {
    console.log('metaBro', value)
    let percent = (value / 5) * 100;
    return percent - 3;
  }
  return (
    <div>
      {/* {'size: ' + (calcPercent(size) + 3)}
      {'comfort: ' + (calcPercent(comfort) + 3)} */}
      <Grid>
        <h5 style={{ margin: '0px 0px 0px 0px' }}>Size</h5>
          <TriangleContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
            <Triangle margin={calcPercent(size)}></Triangle>
          </TriangleContainer>
          <Row space={'space-between'}>
            <div>Too small</div>
            <div>Perfect</div>
            <div>Too large</div>
          </Row>
          <h5 style={{ margin: '5px 0px 0px 0px' }}>Comfort</h5>
          <TriangleContainer border={'solid'} height={24} color={'rgb(136,136,136)'}>
            <Triangle margin={calcPercent(comfort)}></Triangle>
          </TriangleContainer>
          <Row space={'space-between'}>
            <div>Poor</div>
            <div>Perfect</div>
          </Row>
      </Grid>
    </div>
  )
}
