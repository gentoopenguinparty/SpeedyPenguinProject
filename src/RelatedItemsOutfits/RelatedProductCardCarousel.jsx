import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';

// eslint-disable-next-line react/prop-types
export default function RelatedProductCardCarousel({ relatedProducts }) {
  return (
    <div id="RelatedProductCardCarousel">
      {relatedProducts.map((product) => <RelatedProductCard productDetails={product} />)}
    </div>
  );
}

// RelatedProductCardCarousel.propTypes = {
//   relatedProducts: PropTypes.array.isRequired,
// };
