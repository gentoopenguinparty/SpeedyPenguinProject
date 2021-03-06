import React, { useEffect, useState } from 'react'
import { Button } from './styles/Button.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import Popup from './Popup.jsx'
import AddReview from './AddReview.jsx'
import Tracker from './Tracker.jsx'

export default function SeeMore({ countReviews, setCountReviews, dataLength, count, incCount, setCache,
  setMeta, setDataLength, modData, cache, meta }) {

  function handleClick(event) {
    setCountReviews(countReviews + 2);
  }
  function handleClickAdd() {
    changeTrigger(!trigger)
  }
  const [trigger, changeTrigger] = useState(false);

  return (
    <div>
      <Grid color={'rgb(230, 230, 230)'} padding={'0'} left={'20'} right={'20'}>
        <Row space={'flex-start'} padding={10}>
          <Col>
            {countReviews >= dataLength ? null :
              <Button style = {{color: 'orange'}} onClick={(event) => { handleClick(); incCount('More Reviews'); }}> MORE REVIEWS </Button>}
          </Col>
          <Col>
            <Button style = {{color: 'orange'}} onClick={(event) => { handleClickAdd(); incCount('Add a Review'); }}> ADD A REVIEW </Button>
          </Col>
        </Row >
      </Grid>
      <Tracker render={(count, incCount) => {
        return (
          <Popup trigger={trigger} changeTrigger={changeTrigger} count={count} incCount={incCount}>
            <AddReview changeTrigger={changeTrigger} setCache={setCache} modData={modData}
              setDataLength={setDataLength} setMeta={setMeta} cache={cache} meta={meta}/>
          </Popup>
        )
      }} />
    </div>
  )
}