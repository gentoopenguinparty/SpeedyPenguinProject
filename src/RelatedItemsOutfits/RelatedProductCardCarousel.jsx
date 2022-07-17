import React from 'react';
import styled from 'styled-components';

import RelatedProductCard from './RelatedProductCard.jsx';

// eslint-disable-next-line react/prop-types
export default function RelatedProductCardCarousel({ relatedProducts }) {
  return (
    <CardCarousel>
      {relatedProducts.map((product) => <RelatedProductCard productDetails={product} />)}
    </CardCarousel>
  );
}

const CardCarousel = styled.div`
  border: 2px solid orange;
  height: 300px;
  width: auto;
  padding: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`;
