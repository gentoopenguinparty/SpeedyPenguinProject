import React from 'react';

export default function ProductCardPrice({ price }) {
  const trimmed = Math.round(price);
  return <div>{`$${trimmed}`}</div>;
}
