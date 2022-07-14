import React, { useState } from 'react';
import styled from 'styled-components';
import { Triangle } from './styles/Triangle.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'

export default function DropDown() {
  const [active, setActive] = useState(false);
  return (
    <div >
      <Row align={'align-center'}>
        <div onClick={() => { setActive(a => !a) }} > sorted by  </div>
        <Triangle marginTop={5} onClick={() => { setActive(a => !a) }} ></Triangle>
      </Row>
      {active ?
        <div>
          <div className='item1'>
            Relevence
          </div>
          <div className='item2'>
            Newest
          </div>
          <div className='item2'>
            Helpful
          </div>
        </div> : null}
    </div>
  )
}
