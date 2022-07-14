import React from 'react'
import { Grid } from './styles/Grid.styled.js';
import { Row } from './styles/Row.styled.js';
import DropDown from './DropDown.jsx'
function SortBy({cache}) {

  function test(cache){
    console.log('cache', cache)
  }

  return (
    <Grid color={'#ffb3b3'}>
      {test(cache)}
      <Row space={'space-between'}>
        <div>counter: {cache.length}</div>
        <DropDown/>
      </Row>
    </Grid>
  )
}

export default SortBy