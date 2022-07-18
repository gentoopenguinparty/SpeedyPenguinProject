import React, { useEffect, useState } from 'react'

export default function Email({words, setWords}) {
  const [count, setCount] = React.useState(0);

  function handleChange() {
    setWords(event.target.value.slice(0,59));
  }

  return (
    <div>
      <h4>Email up to 60 characters*:</h4>
      <form>
        <input value={words}type='text' placeholder='Jackson11@email.com' size='80' style={{height: '50px'}} onChange={event => {setCount(event.target.value.length); handleChange();}}/>
      </form>
      <p>current count: {count}</p>
    </div>
  )
}
