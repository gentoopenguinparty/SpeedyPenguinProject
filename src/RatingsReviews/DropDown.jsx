import React, { useState } from 'react';
import styled from 'styled-components';
import { Triangle } from './styles/Triangle.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'

export default function DropDown({modData, apiData}) {
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState('relevence')

  function test(data){
    console.log(data)
  }

  return (
    <div >
      {test(apiData)}
      <Row align={'align-center'}>
        <div onClick={() => { setActive(a => !a) }} > sorted by {filter}</div>
        <Triangle marginTop={3} onClick={() => { setActive(a => !a) }} ></Triangle>
      </Row>
      {active ?
        <div>
          <div onClick={ () => {setFilter('relevence')}}>
            relevence
          </div>
          <div onClick={ () => {setFilter('newest')}}>
            newest
          </div>
          <div onClick={ () => {setFilter('helpful')}}>
            helpful
          </div>
        </div> : null}
    </div>
  )
}
