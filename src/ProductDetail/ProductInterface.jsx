import React from 'react';
import styled from 'styled-components';
import InputGrid from './InputGrid.jsx';
import PriceBlock from './PriceBlock.jsx';
import Styles from './Styles.jsx';
import ShareRow from './ShareRow.jsx';

export default function ProductInterface({
  data, styles, styleChange, id,
}) {
  // // console.log(data)
  return (
    <Main>
      <span>
        <Rating rating={2.5} />
        Read All Reviews
      </span>
      <Category>{data.category}</Category>
      <Name>{data.name}</Name>
      <ShareRow />
      <PriceBlock styles={styles} id={id} />
      <p>
        <strong>
          STYLE
          {'>'}
        </strong>
        {styles[id].name}
      </p>
      <Styles styles={styles} id={id} styleChange={styleChange} />
      <InputGrid style={styles[id]} />
    </Main>
  );
}
const Main = styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;
position:sticky;
color: #525252;
padding:10px;
grid-column: 2/3;
grid-row: 1/2;
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
