import React, { useEffect, useState } from 'react'

export default function NickName() {
  const [count, setCount] = React.useState(0);
  const [words, setWords] = React.useState('');

  function handleChange() {
    setWords(event.target.value.slice(0,59));
  }

  return (
    <div>
      <h4>Nickname up to 60 characters*:</h4>
      <form>
        <input value={words}type='text' placeholder='Jackson11' size='80' style={{height: '50px'}} onChange={event => {setCount(event.target.value.length); handleChange();}}/>
      </form>
      <p>current count: {count}</p>
    </div>
  )
}
