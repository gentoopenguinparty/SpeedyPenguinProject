import React from 'react';
import styled from 'styled-components';

import {
  ProductCardCategory,
  ProductCardName,
  ProductCardPrice,
  ProductCardStarRating,
} from './index.jsx';

export default function ProductCardDetails({ productDetails }) {
  return (
    <CardDetails className="cardDetails">
      <ProductCardCategory category={productDetails.category} />
      <ProductCardName name={productDetails.name} />
      <ProductCardPrice />
      <ProductCardStarRating />
    </CardDetails>
  );
}

const CardDetails = styled.div`
  padding-left: 12px;
  padding-bottom: 10px;
`;
