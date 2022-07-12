import React, { useEffect, useState } from 'react'
import { Rating } from './styles/Rating.styled.js'

function quarter(rating) {
  return (Math.round(rating * 4) / 4).toFixed(2);
}

function avgRating(apiData) {
  let ratings = [];
  for (var i = 0; i < apiData.length; i++) {
    ratings.push(apiData[i].rating);
  }
  let average = ratings.reduce((acc, c) => acc + c)/ratings.length;
  return average;
}


export default function AvgRating({ apiData }) {
  return (
    <div>
      <Rating rating={quarter(avgRating(apiData))}> </Rating>
    </div>
  )

}