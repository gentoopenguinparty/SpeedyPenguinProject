import React, { useEffect, useState } from 'react'
import { Button } from './styles/Button.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import Popup from './Popup.jsx'
import AddReview from './AddReview.jsx'

export default function SeeMore({ count, setCount, dataLength }) {
  function handleClick(event) {
    console.log('clicked');
    setCount(count + 2);
  }
  function handleClickAdd() {
    console.log('clickeds')
    changeTrigger(!trigger)
  }
  const [trigger, changeTrigger] = useState(false);

  return (
    <div>
      <Grid color={'#ffffcc'}>
        <Row>
          <Col>
            {count >= dataLength ? null :
              <Button onClick={handleClick}> MORE REVIEWS </Button>}
          </Col>
          <Col>
            <Button onClick={handleClickAdd}> ADD A REVIEW </Button>
          </Col>
        </Row>
      </Grid>
      <Popup trigger={trigger} changeTrigger={changeTrigger}>
        <AddReview/>
      </Popup>
    </div>
  )
}