import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'
import Review from './Review.jsx'
import SeeMore from './SeeMore.jsx'
import Tracker from './Tracker.jsx'
import Graphical from './Graphical.jsx'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
let axios = require('axios');

// This component is made up of the biglist of reviews and buttons that change the render properties of the biglist

export default function BigList() {


  useEffect(() => {
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=37315')
      .then((data) => {
        setCache(data.data.results);
        modData(data.data.results);
        setDataLength(data.data.results.length);
      })
  }, [])

  // count state
  const [countReviews, setCountReviews] = useState(2);
  // total data state
  const [dataLength, setDataLength] = useState(0);
  // API state data
  const [stateData, modData] = useState([{
    rating: 'filler', recommend: 'bool',
    date: 'filler', review_id: 'filler'
  }]);
  //API cache
  const [cache, setCache] = useState([{
    rating: '', recommend: '',
    date: '', review_id: ''
  }]);

  return (
    <div>
      <Grid>
        <Row space={'center'} padding={10}>
          <Col>
            <Graphical apiData={stateData} modData={modData} cache={cache}/>
          </Col>
          <Col>
            <Review
              apiData={stateData}
              countReviews={countReviews} />
            <Tracker render={(count, incCount) => {
              return <SeeMore
                count={count}
                incCount={incCount}
                countReviews={countReviews}
                setCountReviews={setCountReviews}
                dataLength={dataLength}
              />
            }} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}