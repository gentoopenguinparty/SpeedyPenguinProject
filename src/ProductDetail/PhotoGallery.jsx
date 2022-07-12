import React from 'react'
import styled from 'styled-components'
const Main = styled.div`
background-image: url(${props => props.image});
background-color:#EBEBEB;
background-repeat: no-repeat;
background-size: contain ;
background-position: center;
color: white;
`
const Side = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`
const Thumbnail = styled.div`
background-image: url(${props => props.image});
background-color: white;
background-repeat: no-repeat;
background-size: contain ;
background-position: center;
height: 50px;
width: 50px;
margin:5px;
border: 0.5px solid black;
`
export default function PhotoGallery(props) {
  console.log( props.images.photos[1])
  return (
    <Main image ={props.images.photos[4].url}>
      <Side>
      {props.images.photos.map((photo, i) => <Thumbnail key ={i} image= {photo.thumbnail_url}/>)}
      </Side>
    </Main>
  )
}