import React from 'react';

import { ProductCardImage, ProductCardDetails } from './ProductCardComponents/index.jsx';
import { AddToOutfitsButton } from './Buttons/index.jsx';

export default function OutfitCard() {
  return (
    <div className="outfitCard">
      <AddToOutfitsButton />
      <ProductCardImage />
      <ProductCardDetails />
    </div>
  );
}
