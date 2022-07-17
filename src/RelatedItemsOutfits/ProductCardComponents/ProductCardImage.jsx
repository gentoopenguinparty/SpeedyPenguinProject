import React from 'react';
import styled from 'styled-components';

export default function ProductCardImage() {
  return (
    <CardImageContainer>
      <CardImage src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="product preview" />
    </CardImageContainer>
  );
}

const CardImageContainer = styled.div`
  height: 275px;
  text-align: center;
`;

const CardImage = styled.img`
  width: auto;
  height:100%;

`;
