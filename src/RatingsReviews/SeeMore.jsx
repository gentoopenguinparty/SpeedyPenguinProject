import React, { useEffect, useState } from 'react'
import { Button } from './styles/Button.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import Popup from './Popup.jsx'
import AddReview from './AddReview.jsx'
import Tracker from './Tracker.jsx'

export default function SeeMore({ countReviews, setCountReviews, dataLength, count, incCount }) {

  function handleClick(event) {
    setCountReviews(countReviews + 2);
  }
  function handleClickAdd() {
    changeTrigger(!trigger)
  }
  const [trigger, changeTrigger] = useState(false);

  return (
    <div>
      <Grid color={'#ffffcc'}>
        <Row>
          <Col>
            {countReviews >= dataLength ? null :
              <Button onClick={(event) => { handleClick(); incCount('More Reviews'); }}> MORE REVIEWS </Button>}
          </Col>
          <Col>
            <Button onClick={(event) => { handleClickAdd(); incCount('Add a Review'); }}> ADD A REVIEW </Button>
          </Col>
        </Row>
      </Grid>
      <Tracker render={(count, incCount) => {
        return (
          <Popup trigger={trigger} changeTrigger={changeTrigger} count={count} incCount={incCount}>
            <AddReview />
          </Popup>
        )
      }} />


    </div>
  )
}