import React from 'react';

export default function Photos(props) {
return (
  props.photos.map((photo, index) => {
    console.log('from photo card', photo)
    return (
      <img src={photo} width="115" height="65" ></img>
    )
  })
)


}