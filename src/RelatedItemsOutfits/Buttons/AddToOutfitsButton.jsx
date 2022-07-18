import React from 'react';

import styled from 'styled-components';

// import ProductCard from '../styles/ProductCard.styled.js';

export default function AddToOutfitsButton() {
  return (
    <AddOutFitButton>
      <p className="text">Add To Outfits</p>
      <p className="symbol">+</p>
    </AddOutFitButton>
  );
}

// {{ fontSize: '200px', margin: 'auto' }}

const AddOutFitButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid black;
  height: 400px;
  width: 275px;
  margin: 10px;

  .text {
    font-size: 35px;
    color: purple;
    margin-top: 100px;
  }
  .symbol {
    font-size: 200px;
    color: purple;
    margin: auto;
  }
`;
