import React, { useEffect, useState } from 'react'
import AvgRating from './AvgRating.jsx'
import RatingDisplay from './RatingDisplay.jsx'
import styled from 'styled-components';

export default function Graphical({ apiData, modData }) {


  return (
    <div>
      <AvgRating apiData={apiData} />
      <RatingDisplay apiData={apiData} modData={modData}/>
      {/* <Comfort />  */}
    </div>
  )
}