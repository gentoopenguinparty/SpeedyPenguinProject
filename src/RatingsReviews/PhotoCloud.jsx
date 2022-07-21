import React, { useState } from 'react'

export default function PhotoCloud({image, setImage, url, setUrl}) {


  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "ReactStore")
    data.append("cloud_name", "dzqos1yng")
    console.log('data', data)
    fetch("  https://api.cloudinary.com/v1_1/dzqos1yng/image/upload", {
      method: "post",
      body: data
    })
      .then(resp => resp.json())
      .then(data => {
        setUrl(data.url)
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} />
      </div>
    </div>
  )
}
