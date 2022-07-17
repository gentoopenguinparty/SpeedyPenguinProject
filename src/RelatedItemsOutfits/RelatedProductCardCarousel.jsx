import React from 'react';
import styled from 'styled-components';

import RelatedProductCard from './RelatedProductCard.jsx';

// eslint-disable-next-line react/prop-types
export default function RelatedProductCardCarousel({ relatedProducts }) {
  return (
    <>
      <h3>Related Products</h3>
      <FlexContainer>
        <CardCarousel>
          {relatedProducts.map((product) => <RelatedProductCard productDetails={product} />)}
        </CardCarousel>
      </FlexContainer>
    </>
  );
}

const FlexContainer = styled.div`
  display: flex;
`;

const CardCarousel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-right: auto;

  height: 400px;
  padding: 10px;
`;
