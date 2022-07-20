import React from 'react';
import ActionButton from '../styles/ActionButton.styled.js';

export default function CompareProductButton({ handleClick }) {
  return <ActionButton onClick={handleClick}>★</ActionButton>;
}
