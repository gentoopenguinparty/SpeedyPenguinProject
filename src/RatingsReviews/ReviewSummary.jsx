import React, { useEffect, useState } from 'react'

export default function ReviewSummary({ words, setWords}) {
  const [count, setCount] = React.useState(0);
  function handleChange() {
    setWords(event.target.value.slice(0,59));
  }

  return (
    <div>
      <h4>Review summary, 60 characters max:</h4>
      <form>
        <input value={words}type='text' placeholder='Best Product Ever!' size='80' style={{height: '50px'}} onChange={event => {setCount(event.target.value.length); handleChange();}}/>
      </form>
      <p>current count: {count}</p>
    </div>
  )
}

