import React from 'react';
import styled from 'styled-components';

import { ProductCardImage, ProductCardDetails } from './ProductCardComponents/index.jsx';
import { CompareProductButton } from './Buttons/index.jsx';

export default function RelatedProductCard({ productDetails }) {
  return (
    <ProductCard>
      <CompareProductButton />
      <ProductCardImage />
      <ProductCardDetails productDetails={productDetails} />
    </ProductCard>
  );
}

const ProductCard = styled.div`
  border: 2px solid orange;
  height: 275px;
  width: 200px;
  margin: 10px;
  flex-grow: 0;
  flex-shrink: 0;
`;
