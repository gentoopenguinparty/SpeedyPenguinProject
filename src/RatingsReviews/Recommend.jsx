import React from 'react'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'

export default function Recommend({reco, setReco}) {



  return (
    <div>
      <h5>Would you recommend this product?*</h5>
      <Row>
        <div>Yes:</div>
        <input type='radio' name='recommend' onClick={()=>{setReco(true)}}/>
        <div>&nbsp; No:</div>
        <input type='radio' name='recommend'onClick={()=>{setReco(false)}}/>
      </Row>
    </div>

  )
}

