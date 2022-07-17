import React from 'react';

import styled from 'styled-components';

// import ProductCard from '../styles/ProductCard.styled.js';

export default function AddToOutfitsButton() {
  return (
    <AddOutFitButton>
      <p style={{ fontSize: '35px', marginTop: '75px' }}>Add To Outfits</p>
      <p style={{ fontSize: '200px', margin: 'auto' }}>+</p>
    </AddOutFitButton>
  );
}

const AddOutFitButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  font-size: 30px;

  border: 1px solid black;
  height: 400px;
  width: 275px;
  margin: 10px;

  &:hover {
    box-shadow: 5px 5px 3px purple;
  }
`;
