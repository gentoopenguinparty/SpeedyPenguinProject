import React from 'react';

import styled from 'styled-components';

// import ProductCard from '../styles/ProductCard.styled.js';

export default function AddToOutfitsButton() {
  return (
    <AddOutFitButton>
      <p style={{ 'font-size': '35px', 'margin-top': '75px' }}>Add To Outfits</p>
      <p style={{ 'font-size': '200px', margin: 'auto' }}>+</p>
    </AddOutFitButton>
  );
}

const AddOutFitButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  font-size: 30px;

  border: 2px solid black;
  height: 400px;
  width: 275px;
  margin: 10px;
`;
