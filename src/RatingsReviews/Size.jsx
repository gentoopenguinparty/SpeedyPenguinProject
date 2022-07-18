import React, {useState} from 'react'
import { FaRegCircle } from 'react-icons/fa'
export default function Size({rating, setRating}) {

  return (
    <div>
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