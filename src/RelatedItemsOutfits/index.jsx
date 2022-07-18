/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import { axiosGet } from '../../util.js';

import RelatedProductCardCarousel from './RelatedProductCardCarousel.jsx';
import OutfitCardCarousel from './OutfitCardCarousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';

// ------ network request methods -------
// example id: 37313
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
function getProductStyles(productID) {
  const requestURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/styles`;
  return axiosGet(requestURL);
}

const relatedIDs = getRelatedIDs('37313');

function getIDNameAndCategory() {
  return relatedIDs.then((data) => data.map((id) => getProductDetails(id)))
    .then((detailsPromises) => Promise.all(detailsPromises))
    .then((details) => details.map((dataObj) => (
      {
        id: dataObj.data.id,
        category: dataObj.data.category,
        name: dataObj.data.name,
      }
    )))
    .catch((err) => console.log(err));
}

// function getPriceAndImage() {
//   return relatedIDs.then((data) => data.map((id) => getProductStyles(id)))
//     .then((styles) => Promise.all(styles))
//     .then((arr) => arr.)
// }

export default function RelatedItemsOutfitsModule() {
  const [showModal, setShowModal] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // console.log('relatedIDs:', relatedIDs);
    getIDNameAndCategory()
      .then((data) => setRelatedProducts(data))
      .catch((err) => console.log(err));
  }, []);
  // the empty array tells useEffect it has no dependencies,
  // therefore preventing infitine rerender loop

  return (
    <div id="relatedProductsOutfitsModule">
      <ComparisonModal show={showModal} setShowModal={setShowModal} />
      <RelatedProductCardCarousel relatedProducts={relatedProducts} setShowModal={setShowModal} />
      <OutfitCardCarousel />
    </div>
  );
}
