/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { axiosGet } from '../../util.js';

import RelatedProductCardCarousel from './RelatedProductCardCarousel.jsx';
import OutfitCardCarousel from './OutfitCardCarousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';

// example id: 37313
// network request methods
async function getRelatedIDs(productID) {
  const relatedURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/related`;
  const result = await axiosGet(relatedURL);
  // console.log('result:', result.data);
  return result.data;
}

function getProductDetails(productID) {
  const requestURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}`;
  return axiosGet(requestURL);
}

export default function RelatedItemsOutfitsModule() {
  // eslint-disable-next-line no-unused-vars
  const [relatedProducts, setRelatedProducts] = useState([]);

  // {
  //   category: '',
  //   name: '',
  //   price: '',
  //   salePrice: '',
  //   images: [],
  //   thumbnails: [],
  //   rating: 5, // need to retrieve from meta endpoint
  // }

  useEffect(() => {
    const relatedIDs = getRelatedIDs('37313');
    // console.log('relatedIDs:', relatedIDs);
    relatedIDs.then((data) => data.map((id) => getProductDetails(id)))
      .then((prod) => Promise.all(prod))
      .then((arr) => arr.map((obj) => (
        {
          id: obj.data.id,
          category: obj.data.category,
          name: obj.data.name,
        }
      )))
      .then((data) => setRelatedProducts(data))
      .catch((err) => console.log(err));
  }, []);
  // the empty array tells useEffect it has no dependencies,
  // therefore preventing infitine rerender loop

  return (
    <div id="relatedProductsOutfitsModule">
      <ComparisonModal />
      <RelatedProductCardCarousel relatedProducts={relatedProducts} />
      <OutfitCardCarousel />
    </div>
  );
}
