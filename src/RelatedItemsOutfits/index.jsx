/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { axiosGet } from '../../util.js';

import RelatedProductCardCarousel from './RelatedProductCardCarousel.jsx';
import OutfitCardCarousel from './OutfitCardCarousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';

// --- Zustand persistent store for outfit list ---
export const useOutfitListStore = create(persist(
  (set, get) => ({
    outfits: [],
    addOutfit: (newOutfit) => {
      const currentState = get().outfits;
      set({ outfits: currentState.concat(newOutfit) });
    },
  }),
  {
    name: 'user-outfits',
  },
));

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

export default function RelatedItemsOutfitsModule() {
  const [showModal, setShowModal] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

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
      <ComparisonModal show={showModal} setShowModal={setShowModal} />
      <RelatedProductCardCarousel relatedProducts={relatedProducts} setShowModal={setShowModal} />
      <OutfitCardCarousel />
    </div>
  );
}
