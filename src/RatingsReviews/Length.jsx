import React, {useState} from 'react'
import { FaRegCircle } from 'react-icons/fa'
export default function Length({rating, setRating}) {

  return (
    <div>
      <h5>How do you rate the length?</h5>
      {[...Array(5)].map((circle, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input value={ratingValue} type='radio' style={{ display: 'none' }} onClick={()=>{setRating(ratingValue)}}/>
            <FaRegCircle size={20} color={ratingValue === rating ? '#ffc107' : '#e4e5e9'}/>
          </label>
        )
      })}
    </div>
  )
}