import React, { useEffect, useState } from 'react'

export default function SeeMore({ count, setCount, dataLength }) {
  function handleClick(event) {
    console.log('clicked');
    setCount(count + 2);
  }
  return (
    <div>
      {count >= dataLength ? null :
        <button onClick={handleClick}>testtesttest</button>}
    </div>
  )
}