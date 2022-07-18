import React from 'react';

import { ProductCardImage, ProductCardDetails } from './ProductCardComponents/index.jsx';
import ProductCard from './styles/ProductCard.styled.js';
import { RemoveOutfitButton } from './Buttons/index.jsx';

export default function OutfitCard({ outfitItem, removeOutfit }) {
  return (
    <ProductCard>
      <RemoveOutfitButton handleClick={removeOutfit} />
      <ProductCardImage imageURL={outfitItem} />
      <ProductCardDetails productDetails={outfitItem} />
    </ProductCard>
  );
}
