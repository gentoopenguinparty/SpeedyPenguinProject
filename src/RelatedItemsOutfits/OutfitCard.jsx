import React from 'react';

import { ProductCardImage, ProductCardDetails } from './ProductCardComponents/index.jsx';
import ProductCard from './styles/ProductCard.styled.js';
import { RemoveOutfitButton } from './Buttons/index.jsx';

export default function OutfitCard({ outfitItem, removeOutfit }) {
  return (
    <ProductCard>
      <RemoveOutfitButton handleClick={removeOutfit} currentID={outfitItem.id} />
      <ProductCardImage imageURL={outfitItem.photos[0].thumbnail_url} />
      <ProductCardDetails productDetails={outfitItem} />
    </ProductCard>
  );
}
