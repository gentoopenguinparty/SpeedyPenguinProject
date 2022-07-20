import React from 'react';
import styled from 'styled-components';

export default function AddToOutfitsButton({
  currentProduct,
  currentOutfits,
  addToOutfits,
}) {
  const clickHandler = () => {
    if (currentOutfits.find((outfit) => (outfit.id === currentProduct.id))) {
      alert('Outfit Already in Collection');
    } else {
      addToOutfits(currentProduct);
    }
  };

  return (
    // TODO need to pass in the pages current outfit to click handler
    <AddOutFitButton onClick={clickHandler}>
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
  &:hover {
    background-color: lightgray;
  }

  .text {
    font-size: 35px;
    color: purple;
    //margin-top: 100px;
  }
  .symbol {
    font-size: 200px;
    color: purple;
    margin: auto;
  }
`;
