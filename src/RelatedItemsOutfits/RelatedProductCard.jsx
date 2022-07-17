import React from 'react';

import { ProductCardImage, ProductCardDetails } from './ProductCardComponents/index.jsx';
import { CompareProductButton } from './Buttons/index.jsx';
import ProductCard from './styles/ProductCard.styled.js';

export default function RelatedProductCard({ productDetails }) {
  return (
    <ProductCard>
      <CompareProductButton />
      <ProductCardImage />
      <ProductCardDetails productDetails={productDetails} />
    </ProductCard>
  );
}
