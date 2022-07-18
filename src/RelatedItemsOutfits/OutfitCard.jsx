import React from 'react';

import { ProductCardImage, ProductCardDetails } from './ProductCardComponents/index.jsx';
import ProductCard from './styles/ProductCard.styled.js';
import { RemoveOutfitButton } from './Buttons/index.jsx';

export default function OutfitCard() {
  return (
    <ProductCard>
      <RemoveOutfitButton />
      <ProductCardImage />
      <ProductCardDetails />
    </ProductCard>
  );
}
