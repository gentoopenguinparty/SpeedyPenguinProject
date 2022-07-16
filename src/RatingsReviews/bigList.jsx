import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'
import Review from './Review.jsx'
import SeeMore from './SeeMore.jsx'
import Tracker from './Tracker.jsx'
import Graphical from './Graphical.jsx'
import SortBy from './SortBy.jsx'
import { Grid } from './styles/Grid.styled.js'
import { Row } from './styles/Row.styled.js'
import { Col } from './styles/Col.styled.js'
import { useSearchParams } from "react-router-dom";
let axios = require('axios');

// This component is made up of the biglist of reviews and buttons that change the render properties of the biglist

export default function BigList() {
  useEffect(() => {
    let id = window.location.href.slice(22,27) || 38000;
    console.log('ID', id)
    console.log('searchParams', window.location.href.slice(22,27));
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=' + id)
      .then((data) => {
        console.log('metaData', data.data);
        if (data.data.Quality === undefined) {
          data.data['Quality'] = 0;
        }
        if (data.data.characteristics.Size === undefined) {
          data.data.characteristics['Size'] = {value: 0};
        }
        if (data.data.characteristics.Comfort === undefined) {
          data.data.characteristics['Comfort'] = {value: 0};
        }
        if (data.data.characteristics.Width === undefined) {
          data.data.characteristics['Width'] = {value: 0};
        }
        if (data.data.characteristics.Length === undefined) {
          data.data.characteristics['Length'] = {value: 0};
        }
        if (data.data.characteristics.Fit === undefined) {
          data.data.characteristics['Fit'] = {value: 0};
        }
        console.log('postmetaData', data.data);
        setMeta(data.data);
      })
  }, [])

  useEffect(() => {
    let id = window.location.href.slice(22,27) || 38000;
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=' + id)
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
    rating: 1, recommend: 'bool',
    date: 'filler', review_id: 'filler',
    photos: [1], noReview: false
  }]);
  //API cache
  const [cache, setCache] = useState([{
    rating: 1, recommend: '',
    date: '', review_id: '', date: 'test'
  }]);
  const [meta, setMeta] = useState(
    {
      ratings: { 1: [1], 2: [1], 3: [1], 4: [1], 5: [1] },
      characteristics: {
        Comfort: { value: 1 },
        Size: { value: 1 },
        Quality: { value: 1 }
      }
    }
  )
  const [metaCache, setMetaCache] = useState()

  return (
    <div>
      <Grid padding={'30'}>
        <Row space={'center'} padding={10} >
          <Col>
            <Graphical apiData={stateData} modData={modData} cache={cache} meta={meta} />
          </Col>
          <Col>
          <SortBy cache={cache} modData={modData} apiData={stateData}/>
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