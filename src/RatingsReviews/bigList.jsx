import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'
import Review from './Review.jsx'
import SeeMore from './SeeMore.jsx'
import Tracker from './Tracker.jsx'
import Graphical from './Graphical.jsx'
let axios = require('axios');

// This component is made up of the biglist of reviews and buttons that change the render properties of the biglist

export default function BigList() {

  const [stateData, modData] = useState([{
    rating: 'filler', recommend: 'bool',
    date: 'filler', review_id: 'filler'
  }]);
  useEffect(() => {
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=37315')
      .then((data) => {
        modData(data.data.results);
        setDataLength(data.data.results.length);
      })
  }, [])


  // count state
  const [countReviews, setCountReviews] = useState(2);
  // total data state
  const [dataLength, setDataLength] = useState(0);
  return (
    <div>
      <Graphical apiData={stateData}/>
      <Review
        apiData={stateData}
        countReviews={countReviews}
        setDataLength={setDataLength} />
      <Tracker render={(count, incCount) => {
        return <SeeMore
          count={count}
          incCount={incCount}
          countReviews={countReviews}
          setCountReviews={setCountReviews}
          dataLength={dataLength}
        />
      }} />
    </div>
  );
}