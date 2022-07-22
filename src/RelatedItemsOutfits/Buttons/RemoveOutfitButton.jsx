import React from 'react';
import ActionButton from '../styles/ActionButton.styled.js';

export default function RemoveOutfitButton({ handleClick, currentID }) {
  return <ActionButton onClick={(e) => handleClick(e, currentID)}>X</ActionButton>;
}
