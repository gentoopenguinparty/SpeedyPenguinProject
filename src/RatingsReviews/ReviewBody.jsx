import React, { useEffect, useState } from 'react'

export default function ReviewBody() {
  const [count, setCount] = React.useState(0);
  const [words, setWords] = React.useState('');

  function handleChange() {
    setWords(event.target.value.slice(0,249));
  }

  return (
    <div>
      <h4>Please give a brief review of the product, 50 characters min:</h4>
      <form>
        <input value={words}type='text' placeholder='Best Product Ever!' size='80' style={{height: '50px'}} onChange={event => {setCount(event.target.value.length); handleChange();}}/>
      </form>
      <p>min required char left: {Math.abs(count-50)}</p>
    </div>
  )
}

