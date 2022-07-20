import React from 'react';
import styled from 'styled-components';

export default function ProductCardImage({ imageURL }) {
  return (
    <CardImageContainer>
      <CardImage alt="product preview" src={imageURL || 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'} />
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
  // z-index: -1;
  margin: 0;
`;
