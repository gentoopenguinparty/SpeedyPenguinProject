import React, { useState } from 'react'

export default function Photo({ files, setFile, image, setImage, url, setUrl }) {

  function handleFile(event, image) {
    const data = new FormData();
    data.append("file", image)
    data.append("upload_preset", "ReactStore")
    data.append("cloud_name", "dzqos1yng")
    fetch("  https://api.cloudinary.com/v1_1/dzqos1yng/image/upload", {
      method: "post",
      body: data
    })
      .then(resp => resp.json())
      .then(data => {
        setUrl([...url, data.url])
      })
      .catch(err => console.log(err))

    let concatFile = [...files, URL.createObjectURL(event.target.files[0])];
    setFile(concatFile);
  }

  return (
    <div>
      <h4>Upload up to five photos</h4>
      <input type='file' onChange={(event) => { setImage(event.target.files[0]); handleFile(event, event.target.files[0]); }} />
      {files.length !== 0 ? (files.map((file, i) => {
        return (
          <img width='100' height='100' src={file} key={i}/>
        )
      })) : null}
    </div>
  )
}