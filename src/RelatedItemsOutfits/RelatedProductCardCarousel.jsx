import React from 'react';

import RelatedProductCard from './RelatedProductCard.jsx';
import { ScrollButton } from './Buttons/index.jsx';
import { FlexContainer, CardCarousel } from './styles/CardCarousel.styled.js';

// eslint-disable-next-line react/prop-types
export default function RelatedProductCardCarousel({
  relatedProducts,
  setShowModal,
}) {
  return (
    <>
      <h3>Related Products</h3>
      <FlexContainer>
        <ScrollButton direction="back" />
        <CardCarousel>
          {relatedProducts.map((product) => (
            <RelatedProductCard
              key={product.id}
              productDetails={product}
              setShowModal={setShowModal}
            />
          ))}
        </CardCarousel>
        <ScrollButton direction="forward" />
      </FlexContainer>
    </>
  );
}
