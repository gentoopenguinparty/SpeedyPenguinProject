import React from 'react';

import {
  ProductCardCategory,
  ProductCardName,
  ProductCardPrice,
  ProductCardStarRating,
} from './index.jsx';

export default function ProductCardDetails({ productDetails }) {
  return (
    <div className="productCardDetails">
      <ProductCardCategory category={productDetails.category} />
      <ProductCardName name={productDetails.name} />
      <ProductCardPrice />
      <ProductCardStarRating />
    </div>
  );
}
