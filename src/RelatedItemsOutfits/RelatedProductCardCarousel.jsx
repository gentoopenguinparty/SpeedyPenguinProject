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

// const FlexContainer = styled.div`
//   display: flex;
// `;

// const CardCarousel = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   margin-right: auto;

//   height: 400px;
//   padding: 10px;
// `;
