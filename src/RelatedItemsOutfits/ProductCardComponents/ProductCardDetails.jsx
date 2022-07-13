import React from 'react';

import {
  ProductCardCategory,
  ProductCardName,
  ProductCardPrice,
  ProductCardStarRating,
} from './index.jsx';

export default function ProductCardDetails() {
  return (
    <div className="productCardDetails">
      <ProductCardCategory />
      <ProductCardName />
      <ProductCardPrice />
      <ProductCardStarRating />
    </div>
  );
}
