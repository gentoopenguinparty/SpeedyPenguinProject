import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'


export default function Review() {

  const [stateData, modData] = useState([{ rating: 'filler' }]);

  useEffect(() => {
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=37315')
      .then((data) => {
        console.log(data.data.results);
        modData(data.data.results);
      })
  }, [])

  return (
    <div>
      {stateData.map((review) => (
        <div key={review.review_id}>
          <div> {review.rating} </div>
          <div> {review.reviewer_name} </div>
          <div> {review.summary} </div>
          <div> {review.body} </div>
          <div> {review.recommend} </div>
        </div>
      ))}
    </div>
  );
}