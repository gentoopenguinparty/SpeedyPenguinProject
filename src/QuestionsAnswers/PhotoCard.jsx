import React from 'react';

export default function Photos(props) {
return (
  props.photos.map((photo, index) => {
    // console.log('from photo card', photo)
    return ( <span margin="10">
       <img src={photo} width="250" height="150"  ></img>

       </span>
    )
  })
)


}