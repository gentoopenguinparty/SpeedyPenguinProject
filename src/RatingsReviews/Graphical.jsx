import React, { useEffect, useState } from 'react'
import AvgRating from './AvgRating.jsx'
import RatingDisplay from './RatingDisplay.jsx'
// import Comfort from './Comfort.jsx';
import styled from 'styled-components';

export default function Graphical({ apiData, modData, cache}) {



  return (
    <div>
      <AvgRating cache={cache}/>
      <RatingDisplay apiData={apiData} modData={modData} cache={cache} />
      {/* <Comfort /> */}
    </div>
  )
}