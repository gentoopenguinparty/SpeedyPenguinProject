import React from 'react';
import ActionButton from '../styles/ActionButton.styled.js';

export default function RemoveOutfitButton({ handleClick, currentID }) {
  return <ActionButton onClick={() => handleClick(currentID)}>X</ActionButton>;
}
