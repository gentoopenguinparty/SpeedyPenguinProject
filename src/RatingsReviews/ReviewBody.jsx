import React, { useEffect, useState } from 'react'

export default function ReviewBody({words, setWords}) {
  const [count, setCount] = React.useState(0);

  function handleChange() {
    setWords(event.target.value.slice(0,249));
  }

  return (
    <div>
      <h4>Please give a brief review of the product, 50 characters min:</h4>
      <form>
        <input value={words}type='text' placeholder='Why did you like the or not?' size='80' style={{height: '50px'}} onChange={event => {setCount(event.target.value.length); handleChange();}}/>
      </form>
      <p>min required char left: {Math.abs(count-50)}</p>
    </div>
  )
}

