import React, { useEffect, useState } from 'react'
import AvgRating from './AvgRating.jsx'
import RatingDisplay from './RatingDisplay.jsx'

export default function Graphical({apiData}) {
  return (
    <div>
      <AvgRating apiData={apiData}/>
      <RatingDisplay apiData={apiData}/>
      {/* <Comfort />  */}
    </div>
  )
}