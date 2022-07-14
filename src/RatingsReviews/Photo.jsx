import React, { useState } from 'react'

export default function Photo() {

  const [files, setFile] = useState('');

  function handleFile(event) {
    console.log(event.target.files[0]);
    let concatFile = [...files, event.target.files[0]];
    setFile(concatFile);
  }

  return (
    <div>
      <input type='file' onChange={handleFile} />
      {files.length !== 0 ? (files.map((file) => {
        return (
          <img width='100' height='100' src={URL.createObjectURL(file)} />
        )
      })) : null}
    </div>
  )
}