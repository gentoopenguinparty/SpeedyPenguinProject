import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'
import Review from './Review.jsx'
import SeeMore from './SeeMore.jsx'
import Tracker from './Tracker.jsx'
let axios = require('axios');

// This component is made up of the biglist of reviews and buttons that change the render properties of the biglist

export default function BigList() {

  // count state
  const [countReviews, setCountReviews] = useState(2);
  // total data state
  const [dataLength, setDataLength] = useState(0);
  return (
    <div>
      <Review
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