import React, { useEffect, useState } from 'react'
import AvgRating from './AvgRating.jsx'
import RatingDisplay from './RatingDisplay.jsx'
import styled from 'styled-components';

export default function Graphical({ apiData, modData, cache}) {



  return (
    <div>
      <AvgRating apiData={apiData} />
      <RatingDisplay apiData={apiData} modData={modData} cache={cache} />
      {/* <Comfort />  */}
    </div>
  )
}