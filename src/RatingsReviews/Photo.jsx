import React, { useState } from 'react'

export default function Photo() {

  const [file, setFile] = useState('');

  function handleFile(event) {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  }

  return (
    <div>
      <input type='file' onChange={handleFile} />
      {file.length !== 0 ? <img width='100' height='100'src={URL.createObjectURL(file)} /> :
        null}
    </div>
  )
}