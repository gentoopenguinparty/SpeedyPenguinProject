import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
background-color: green;
color: white;
`;
export default function Styles({styles, id, styleChange}) {
  return (
    <StyleGrid>
      {
    styles.map((style, i) => (
      <StyleThumbnail
        onClick={() => {
          styleChange(i);
        }}
        key={style.style_id}
        image={style.photos[0].thumbnail_url}
      >
        {id === i ? <StyleCheck /> : ''}
      </StyleThumbnail>
    ))
      }
    </StyleGrid>
  );
}
const StyleGrid = styled.div`
width: 300px;
height: auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-auto-rows: 70px;
justify-items: center;
align-items: top;
`;

const StyleThumbnail = styled.div`

width: 60px;
height: 60px;
border-radius: 50%;
background-color: grey;
background-image: url(${(props) => props.image});
background-size: contain;
cursor: pointer;
&:hover{
  transform: scale(1.05)
}
&:active{
  transform: scale(1)
}
`;
const StyleCheck = styled.div`
width:15px;
height: 15px;
border: 1px solid black;
border-radius: 50%;
float: right;
background-color: white;
background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjj2DOSD1yUrkY0TbTbWhy0okIcvxHGhfP2bxtbDhkNQ4r1NLLGbKGzgLmIeqcM3arMHM&usqp=CAU);
background-size:contain;
`;
