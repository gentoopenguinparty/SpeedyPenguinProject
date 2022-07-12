/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { axiosGet } from '../../util.js';

import RelatedProductCardCarousel from './RelatedProductCardCarousel.jsx';
import OutfitCardCarousel from './OutfitCardCarousel.jsx';

// network request methods
function getRelatedIDs() {
  const relatedURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37313/related';
  return axiosGet(relatedURL);
}

function getProductDetails(productID) {
  const requestURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}`;
  return axiosGet(requestURL);
}

export default function RelatedItemsOutfitsModule() {
  const [productInfo, setProductInfo] = useState({
    category: '',
    name: '',
    price: '',
    salePrice: '',
    rating: 5,
    images: [],
    thumbnails: [],
  });

  useEffect(() => {
    let promiseArray = getRelatedIDs()
      .then((res) => res.data.map((id) => getProductDetails(id)))
      .catch((err) => console.log(err));
    console.log('promises:', promiseArray);
    Promise.all(promiseArray).then((products) => console.log('products:', products));
  });

  return (
    <div id="relatedProductsOutfitsModule">
      <RelatedProductCardCarousel />
      <OutfitCardCarousel />
    </div>
  );
}
