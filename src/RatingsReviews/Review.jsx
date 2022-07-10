import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'


export default function Review() {

  const [stateData, modData] = useState(null);

  useEffect(() => {
    axiosGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=37315')
      .then((data) => {
        console.log(data.data.results);
        modData(data.data.results);
      })
  }, [])

  return (
    <div>hi</div>
  );
}