import React, { useEffect, useState } from 'react'
import AvgRating from './AvgRating.jsx'
export default function Graphical({apiData}) {
  return (
    <div>
      <AvgRating apiData={apiData}/>
      {/* <RatingDisplay />
      <Comfort /> */}
    </div>
  )

}