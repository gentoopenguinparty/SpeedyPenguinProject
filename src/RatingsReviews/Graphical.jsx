import React, { useEffect, useState } from 'react'
import AvgRating from './AvgRating.jsx'
import RatingDisplay from './RatingDisplay.jsx'
// import Comfort from './Comfort.jsx';
import styled from 'styled-components';

export default function Graphical({ apiData, modData, cache, meta}) {



  return (
    <div>
      <AvgRating meta={meta}/>
      <RatingDisplay apiData={apiData} modData={modData} cache={cache} meta={meta} />
      {/* <Comfort /> */}
    </div>
  )
}