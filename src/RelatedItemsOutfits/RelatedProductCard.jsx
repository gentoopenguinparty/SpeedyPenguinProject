import React from 'react';

import { ProductCardImage, ProductCardDetails } from './ProductCardComponents/index.jsx';
import { CompareProductButton } from './Buttons/index.jsx';

export default function RelatedProductCard({ productDetails }) {
  return (
    <div className="relatedProductCard">
      <CompareProductButton />
      <ProductCardImage />
      <ProductCardDetails productDetails={productDetails} />
    </div>
  );
}
