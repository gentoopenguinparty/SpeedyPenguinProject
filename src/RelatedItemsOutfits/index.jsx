/* eslint-disable no-console */
import React from 'react';
import { axiosGet } from '../../util.js';

import RelatedProductCardCarousel from './RelatedProductCardCarousel.jsx';
import OutfitCardCarousel from './OutfitCardCarousel.jsx';

const relatedURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37313/related';

function getRelatedIDs() {
  axiosGet(relatedURL)
    .then((productIDs) => productIDs)
    .catch((err) => console.log(err));
}

export default function RelatedItemsOutfitsModule() {
  return (
    <div id="relatedProductsOutfitsModule">
      <RelatedProductCardCarousel />
      <OutfitCardCarousel />
    </div>
  );
}
