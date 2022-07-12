import React from 'react';
import RelatedProductCardCarousel from './RelatedProductCardCarousel.jsx';
import OutfitCardCarousel from './OutfitCardCarousel.jsx';

export default function RelatedItemsOutfitsModule() {
  return (
    <div id="relatedProductsOutfitsModule">
      <RelatedProductCardCarousel />
      <OutfitCardCarousel />
    </div>
  );
}
