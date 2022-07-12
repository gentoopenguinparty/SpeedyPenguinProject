import React, { useEffect, useState } from 'react'
import { Button } from './styles/Button.styled.js'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import Popup from './Popup.jsx'
import AddReview from './AddReview.jsx'
import { useStore } from './tracker.jsx'


export default function SeeMore({ count, setCount, dataLength, children }) {


  const tracker =  useStore((state) => state.increaseCount)
  const currentCount = useStore((state) => state.count)

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
      <h1>{currentCount}</h1>
      <Grid color={'#ffffcc'}>
        <Row>
          <Col>
            {count >= dataLength ? null :
              <Button onClick={(event) => {handleClick(); tracker();}}> MORE REVIEWS </Button>}
          </Col>
          <Col>
            <Button onClick={(event) => {handleClickAdd(); tracker();}}> ADD A REVIEW </Button>
          </Col>
        </Row>
      </Grid>
      <Popup trigger={trigger} changeTrigger={changeTrigger}>
        <AddReview/>
      </Popup>
    </div>
  )
}