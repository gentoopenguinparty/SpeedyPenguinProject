import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
export default function StarRating({rating, setRating}) {


  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input value={ratingValue} type='radio' style={{ display: 'none' }} onClick={()=>{setRating(ratingValue)}}/>
            <FaStar size={25} color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}/>
          </label>
        )
      })}
    </div>
  );
}