import React, { useEffect, useState } from 'react'
import { Button } from './styles/Button.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import Popup from './Popup.jsx'
import AddReview from './AddReview.jsx'

export default function SeeMore({ countReviews, setCountReviews, dataLength, count, incCount }) {



  function handleClick(event) {
    console.log('clicked');
    setCountReviews(countReviews + 2);
  }
  function handleClickAdd() {
    console.log('clickeds')
    changeTrigger(!trigger)
  }
  const [trigger, changeTrigger] = useState(false);

  return (
    <div>
      <h1>{count}</h1>
      <Grid color={'#ffffcc'}>
        <Row>
          <Col>
            {countReviews >= dataLength ? null :
              <Button onClick={(event) => {handleClick(); incCount();}}> MORE REVIEWS </Button>}
          </Col>
          <Col>
            <Button onClick={(event) => {handleClickAdd(); }}> ADD A REVIEW </Button>
          </Col>
        </Row>
      </Grid>
      <Popup trigger={trigger} changeTrigger={changeTrigger}>
        <AddReview/>
      </Popup>
    </div>
  )
}