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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 auto;

  position: relative;
  border: 2px solid black;
  height: 400px;
  width: 275px;
  margin: 10px;

  &:hover {
    box-shadow: 5px 5px 3px purple;
  }

`;
