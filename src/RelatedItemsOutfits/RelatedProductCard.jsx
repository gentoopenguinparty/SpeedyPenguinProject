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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid orange;
  height: 400px;
  width: 275px;
  margin: 10px;
  flex: 0 0 auto;
`;
