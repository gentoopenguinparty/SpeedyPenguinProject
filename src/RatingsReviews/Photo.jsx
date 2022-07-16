import React, { useState } from 'react'

export default function Photo({files, setFile}) {

  function handleFile(event) {
    let concatFile = [...files, URL.createObjectURL(event.target.files[0])];
    setFile(concatFile);
    console.log('file', files);
  }

  return (
    <div>
      <input type='file' onChange={handleFile} />
      {files.length !== 0 ? (files.map((file) => {
        return (
          <img width='100' height='100' src={file} />
        )
      })) : null}
    </div>
  )
}