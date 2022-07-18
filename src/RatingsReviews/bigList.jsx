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

export default function BigList({ metaD, cacheD }) {

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

  useEffect(() => {
    let id = window.location.href.slice(22, 27) || 38000;
    if (Object.keys(metaD.ratings).length > 0) {
      setMeta(metaD);
    }
    if (cacheD !== undefined) {
      setCache(cacheD);
      modData(cacheD);
      setDataLength(cacheD.length);
    }
  }, [])

  return (
    <div>
      <Grid padding={'30'}>
        <Row space={'center'} padding={10} >
          <Col>
            <Graphical apiData={stateData} modData={modData} cache={cache} meta={meta} />
          </Col>
          <Col width={'800'}>
            <SortBy cache={cache} modData={modData} apiData={stateData} />
            <Review
              apiData={stateData}
              countReviews={countReviews}
              dataLength={dataLength}
              setCache={setCache}
              modData={modData}
              setDataLength={setDataLength}
              setMeta={setMeta} />
            <Tracker render={(count, incCount) => {
              return <SeeMore
                count={count}
                incCount={incCount}
                countReviews={countReviews}
                setCountReviews={setCountReviews}
                dataLength={dataLength}
                setCache={setCache}
                modData={modData}
                setDataLength={setDataLength}
                setMeta={setMeta}
                cache={cache}
                meta={meta}
              />
            }} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}