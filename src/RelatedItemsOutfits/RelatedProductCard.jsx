import React from 'react';

import { ProductCardImage, ProductCardDetails } from './ProductCardComponents/index.jsx';
import { CompareProductButton } from './Buttons/index.jsx';
import ProductCard from './styles/ProductCard.styled.js';

export default function RelatedProductCard({ productDetails, setShowModal }) {
  const handleClick = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };
  return (
    // eslint-disable-next-line no-restricted-globals
    <ProductCard onClick={() => location.replace(`${window.location.origin}/${productDetails.id}`)}>
<<<<<<< HEAD
      <CompareProductButton handleClick={handleClick} productID={productDetails.id} />
=======
      <CompareProductButton
        productID={productDetails.id}
        handleClick={handleClick}
      />
>>>>>>> dev
      <ProductCardImage imageURL={productDetails.defaultThumbnail} />
      <ProductCardDetails productDetails={productDetails} />
    </ProductCard>
  );
}
