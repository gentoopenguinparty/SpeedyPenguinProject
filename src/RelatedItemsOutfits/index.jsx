/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import { axiosGet } from '../../util.js';

import RelatedProductCardCarousel from './RelatedProductCardCarousel.jsx';
import OutfitCardCarousel from './OutfitCardCarousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';

// ------ network request methods -------
// const currentID = '37315';

async function getRelatedIDs(productID) {
  const relatedURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/related`;
  const result = await axiosGet(relatedURL);
  // // console.log('result:', result.data);
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

function getRelatedProductDetails(relatedIDs) {
  return relatedIDs.then((data) => data.map((id) => getProductDetails(id)))
    .then((detailsPromises) => Promise.all(detailsPromises))
    .then((res) => res.map((dataObj) => {
      const product = dataObj.data;
      // // console.log('product:', product);
      return {
        id: product.id,
        category: product.category,
        name: product.name,
        price: product.default_price,
        features: product.features,
      };
    }))
    .catch((err) => console.log(err));
}

function getRelatedProductStyles(relatedIDs) {
  return relatedIDs.then((data) => data.map((id) => getProductStyles(id)))
    .then((stylesPromise) => Promise.all(stylesPromise))
    .then((res) => res.map((dataObj) => {
      const styles = dataObj.data.results;
      // // console.log('styles:', styles);
      const defaultCheck = styles.filter((obj) => obj['default?'] === true).pop();
      const defaultStyle = defaultCheck || styles[0];
      // // console.log('defaultStyle:', defaultStyle);
      return {
        // price: defaultStyle.original_price,
        salePrice: defaultStyle.sale_price,
        images: defaultStyle.photos,
        defaultThumbnail: defaultStyle.photos[0].thumbnail_url,
      };
    }))
    // .then((obj) => // console.log('priceImage:', obj))
    .catch((err) => console.log(err));
}

// function parseStylesData(stylesData) {
//   const defaultCheck = stylesData.filter((obj) => obj['default?'] === true).pop();
//   const defaultStyle = defaultCheck || stylesData[0];
//   return {
//     salePrice: defaultStyle.sale_price,
//     images: defaultStyle.photos,
//     defaultThumbnail: defaultStyle.photos[0].thumbnail_url,
//   };
// }

export default function RelatedItemsOutfitsModule({ currentProductData }) {
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setcurrentProduct] = useState([]); // contains features
  const [relatedProductDetails, setRelatedProductDetails] = useState([]);
  const [relatedProductStyles, setRelatedProductStyles] = useState([]);

  // const displayedProductStyles = currentProductData[1].results;
  // const displayedProductMetadata= currentProductData[2];
  // const displayedProductReviews = currentProductData[3];
  const displayedProduct = currentProductData[0];
  const relatedIDs = getRelatedIDs(displayedProduct.id)
    .then((res) => [...new Set(res)]);

  useEffect(() => {
    setcurrentProduct(displayedProduct);

    getRelatedProductDetails(relatedIDs)
      .then((data) => setRelatedProductDetails(data))
      .catch((err) => console.log(err));

    getRelatedProductStyles(relatedIDs)
      .then((data) => setRelatedProductStyles(data))
      .catch((err) => console.log(err));
  }, []);

  const combinedCardData = relatedProductDetails
    .map((detailObj, i) => ({ ...detailObj, ...relatedProductStyles[i] }));

  return (
    <div id="relatedProductsOutfitsModule">
      <ComparisonModal
        currentProduct={currentProduct}
        show={showModal}
        setShowModal={setShowModal}
      />
      <RelatedProductCardCarousel
        relatedProductDetails={combinedCardData}
        setShowModal={setShowModal}
      />
      <OutfitCardCarousel />
    </div>
  );
}
