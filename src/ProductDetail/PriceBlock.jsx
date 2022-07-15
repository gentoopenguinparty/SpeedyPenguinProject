import React from 'react';
import styled from 'styled-components';


export default function PriceBlock({styles,id}) {
  return (

    <Main>
      {
          styles[id].sale_price
            ? (
              <>
                <Price color="red">${styles[id].original_price}</Price>
                <Price color="black">${styles[id].sale_price}</Price>
              </>
            )
            : <Price color="black">${styles[id].original_price}</Price>
        }
    </Main>
  );
}
const Main = styled.div`
width: 120px;
color: white;
display:flex;
flex-direction:row;
justify-content: space-between;
`;
const Price = styled.p`
color: ${(props) => props.color};
text-decoration:${(props) => props.color === 'red' && 'line-through'};
`;