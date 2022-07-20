import React from 'react';

import RelatedProductCard from './RelatedProductCard.jsx';
import { CardScrollButton } from './Buttons/index.jsx';
import { FlexContainer, CardCarousel } from './styles/CardCarousel.styled.js';
import Heading from './styles/Heading.styled.js';

// eslint-disable-next-line react/prop-types
export default function RelatedProductCardCarousel({
  relatedProductDetails,
  setShowModal,
}) {
  return (
    <>
      <Heading>Related Products</Heading>
      <FlexContainer>
        <CardScrollButton direction="back" />
        <CardCarousel>
          {relatedProductDetails.map((product) => (
            <RelatedProductCard
              key={product.id}
              productDetails={product}
              setShowModal={setShowModal}
            />
          ))}
        </CardCarousel>
        <CardScrollButton direction="forward" />
      </FlexContainer>
    </>
  );
}
