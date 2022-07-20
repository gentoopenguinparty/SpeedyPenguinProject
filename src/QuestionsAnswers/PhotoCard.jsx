import React from 'react';
import './Modal.css';

export default function Photos(props) {
return (
  props.photos.map((photo, index) => {
     console.log('from photo card', photo)
    return ( <span>
       <img src={photo} width="250" height="150"  margin="10"></img>

       </span>
    )
  })
)


}