import React from 'react';

import RelatedProductCard from './RelatedProductCard.jsx';
import { ScrollButton } from './Buttons/index.jsx';
import { FlexContainer, CardCarousel } from './styles/CardCarousel.styled.js';
import Heading from './styles/Heading.styled.js';

// eslint-disable-next-line react/prop-types
export default function RelatedProductCardCarousel({
  relatedProductDetails,
  relatedProductStyles,
  setShowModal,
}) {
  return (
    <>
      <Heading>Related Products</Heading>
      <FlexContainer>
        <ScrollButton direction="back" />
        <CardCarousel>
          {relatedProductDetails.map((product) => (
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
