import React, { useState } from 'react';
import styled from 'styled-components';
import InputGrid from './InputGrid.jsx';
import PriceBlock from './PriceBlock.jsx';

export default function ProductInterface({ data, styles, styleChange, id }) {

  return (
    <Main>
      <span>
        <Rating rating={2.5} />
        Read All Reviews
      </span>
      <Category>{data.category}</Category>
      <Name>{data.name}</Name>

      <PriceBlock styles={styles} id={id} />
      <p><strong>STYLE></strong>{styles[id].name}</p>
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
      <InputGrid />
    </Main>
  );
}
const Main = styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;
background-color: white;
position:sticky;
color: #525252;
padding:10px;
grid-column: 2/3;
grid-row: 1/2;
border: 2px solid blue;
`;
const Rating = styled.div`
--star-size: 60px;
--star-color: #fff;
--star-background: black;
-webkit-text-stroke: 0.7px black;
&:before {
  content: "★★★★★";
  letter-spacing: 3px;
  background: linear-gradient(90deg, var(--star-background) calc(${(props) => props.rating} / 5 * 100%), var(--star-color) calc(${(props) => props.rating} / 5 * 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`;
const Category = styled.p`
`;
const Name = styled.h2`

`;
const Price = styled.p`
color: ${(props) => props.color};
text-decoration:${(props) => props.color === 'red' && 'line-through'};
`;

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
