import React from 'react';
import styled from 'styled-components';

import {
  ProductCardCategory,
  ProductCardName,
  ProductCardPrice,
  ProductCardStarRating,
} from './index.jsx';

export default function ProductCardDetails({ productDetails }) {
  // console.log("proDCardRating:", productDetails.ratings);
  return (
    <CardDetails className="cardDetails">
      <ProductCardCategory category={productDetails.category} />
      <ProductCardName name={productDetails.name} />
      <ProductCardPrice price={productDetails.price || productDetails.default_price} />
      <ProductCardStarRating ratingsObj={productDetails.ratings} />
    </CardDetails>
  );
}

const CardDetails = styled.div`
  padding-left: 12px;
  padding-bottom: 10px;
`;
