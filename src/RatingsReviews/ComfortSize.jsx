import React, { useState } from 'react'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { BarGraph } from './styles/BarGraph.styled.js'
import { BarContainer } from './styles/BarContainer.styled.js'
import { Triangle } from './styles/Triangle.styled.js'
import { TriangleContainer } from './styles/TriangleContainer.styled.js'

export default function ComfortSize({ meta }) {
  let size = 0;
  let quality = 0;
  let comfort = 0;
  let fit = 0;
  let length = 0;
  let width = 0;
  // console.log('meta', meta);
  // console.log('metaKeys', Object.keys(meta.characteristics).length)
  if (Object.keys(meta.characteristics).length === 0) {
    return;
  }
  if (meta.characteristics.Quality.value !== undefined) {
    quality = meta.characteristics.Quality.value;
  }
  if (meta.characteristics.Comfort !== undefined) {
    comfort = meta.characteristics.Comfort.value;
  }
  if (meta.characteristics.Size !== undefined) {
    size = meta.characteristics.Size.value;
  }
  if (meta.characteristics.Fit !== undefined) {
    fit = meta.characteristics.Fit.value;
  }
  if (meta.characteristics.Length !== undefined) {
    length = meta.characteristics.Length.value;
  }
  if (meta.characteristics.Width !== undefined) {
    width = meta.characteristics.Width.value;
  }



  function calcPercent(value) {
    // console.log('metaBro', value)
    let percent = (value / 5) * 100;
    return percent - 3;
  }
  return (
    <div>
      <Grid padding={'30'}>
        {size ?
          <div>
            <h5 style={{ margin: '0px 0px 0px 0px' }}>Size</h5>
            <TriangleContainer height={18} color={'rgb(136,136,136)'}>
              <Triangle margin={calcPercent(size)}></Triangle>
            </TriangleContainer>
            <Row space={'space-between'}>
              <div>Too small</div>
              <div>Perfect</div>
              <div>Too large</div>
            </Row>
          </div>
          : null}
        {comfort ?
          <div>
            <h5 style={{ margin: '20px 0px 0px 0px' }}>Comfort</h5>
            <TriangleContainer height={18} color={'rgb(136,136,136)'}>
              <Triangle margin={calcPercent(comfort)}></Triangle>
            </TriangleContainer>
            <Row space={'space-between'}>
              <div>Poor</div>
              <div>Perfect</div>
            </Row>
          </div>
          : null}
        {quality ?
          <div>
            <h5 style={{ margin: '20px 0px 0px 0px' }}>Quality</h5>
            <TriangleContainer height={18} color={'rgb(136,136,136)'}>
              <Triangle margin={calcPercent(quality)}></Triangle>
            </TriangleContainer>
            <Row space={'space-between'}>
              <div>Low</div>
              <div>High</div>
            </Row>
          </div>
          : null}
        {fit ?
          <div>
            <h5 style={{ margin: '20px 0px 0px 0px' }}>Fit</h5>
            <TriangleContainer height={18} color={'rgb(136,136,136)'}>
              <Triangle margin={calcPercent(fit)}></Triangle>
            </TriangleContainer>
            <Row space={'space-between'}>
              <div>Poor</div>
              <div>Perfect</div>
            </Row>
          </div>
          : null}
        {length ?
          <div>
            <h5 style={{ margin: '20px 0px 0px 0px' }}>Length</h5>
            <TriangleContainer height={18} color={'rgb(136,136,136)'}>
              <Triangle margin={calcPercent(length)}></Triangle>
            </TriangleContainer>
            <Row space={'space-between'}>
              <div>Poor</div>
              <div>Perfect</div>
            </Row>
          </div>
          : null}
        {width ?
          <div>
            <h5 style={{ margin: '20px 0px 0px 0px' }}>Width</h5>
            <TriangleContainer height={18} color={'rgb(136,136,136)'}>
              <Triangle margin={calcPercent(width)}></Triangle>
            </TriangleContainer>
            <Row space={'space-between'}>
              <div>Poor</div>
              <div>Perfect</div>
            </Row>
          </div>
          : null}
      </Grid>
    </div>
  )
}
