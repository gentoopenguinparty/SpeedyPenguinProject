import React, { useState } from 'react';

import RelatedProductCard from './RelatedProductCard.jsx';
import { CardScrollButton } from './Buttons/index.jsx';
import { FlexContainer, CardCarousel } from './styles/CardCarousel.styled.js';
import Heading from './styles/Heading.styled.js';

// eslint-disable-next-line react/prop-types
export default function RelatedProductCardCarousel({
  relatedProductDetails,
  setShowModal,
}) {
  const [relatedCarouselPosition, setRelatedCarouselPosition] = useState(0);
  return (
    <>
      <Heading>Related Products</Heading>
      <FlexContainer>
        {
          relatedCarouselPosition !== 0 ? (
            <CardScrollButton
              id="outfitScrollBack"
              className="scrollBack"
              direction="back"
              stateHandler={setRelatedCarouselPosition}
            />
          )
            : null
        }
        <CardCarousel position={`${relatedCarouselPosition}px`}>
          {relatedProductDetails.map((product) => (
            <RelatedProductCard
              key={product.id}
              productDetails={product}
              setShowModal={setShowModal}
            />
          ))}
        </CardCarousel>
        <CardScrollButton
          id="relatedScrollForward"
          direction="forward"
          stateHandler={setRelatedCarouselPosition}
        />
      </FlexContainer>
    </>
  );
}
