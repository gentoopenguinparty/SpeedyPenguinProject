import React from 'react';
import styled from 'styled-components';

export default function ProductCardImage({ imageURL }) {
  return (
    <CardImageContainer>
      <CardImage alt="product preview" src={imageURL} />
    </CardImageContainer>
  );
}

const CardImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 275px;
  width: auto;
  text-align: center;
  border-bottom: 1px solid black;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`;
