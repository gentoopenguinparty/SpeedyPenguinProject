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

export default function RelatedItemsOutfitsModule({ currentProductData, trackClick }) {
  const [currentProduct, setcurrentProduct] = useState([]);
  const [relatedProductDetails, setRelatedProductDetails] = useState([]);
  const [relatedProductStyles, setRelatedProductStyles] = useState([]);
  // const [relatedProductInfo, setRelatedProductInfo] = useState([]);

  const [comparedID, setComparedID] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [viewWidth, setViewWidth] = useState(0);

  // const displayedProductMetadata= currentProductData[2];
  // const displayedProductReviews = currentProductData[3];

  const displayedProductDetails = currentProductData[0];
  const displayedProductStyles = currentProductData[1].results;
  const displayedDefaultStyle = displayedProductStyles.filter((obj) => obj['default?'] === true).pop() || displayedProductStyles[0];
  const displayedProductInfo = { ...displayedProductDetails, ...displayedDefaultStyle };

  const relatedIDs = getRelatedIDs(displayedProductDetails.id)
    .then((res) => [...new Set(res)]);

  function handleWindowResize() {
    setViewWidth(visualViewport.width);
  }

  useEffect(() => {
    setcurrentProduct(displayedProductInfo);

    getRelatedProductDetails(relatedIDs)
      .then((data) => setRelatedProductDetails(data))
      .catch((err) => console.log(err));

    getRelatedProductStyles(relatedIDs)
      .then((data) => setRelatedProductStyles(data))
      .catch((err) => console.log(err));

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const combinedCardData = relatedProductDetails
    .map((detailObj, i) => ({ ...detailObj, ...relatedProductStyles[i] }));

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div id="relatedProductsOutfitsModule" onClick={(e) => trackClick(e, 'Related')}>
      <ComparisonModal
        currentProduct={currentProduct}
        relatedProducts={relatedProductDetails}
        show={showModal}
        setShowModal={setShowModal}
      />
      <RelatedProductCardCarousel
        relatedProductDetails={combinedCardData}
        setShowModal={setShowModal}
        setComparedID={setComparedID}
        viewWidth={viewWidth}
      />
      <OutfitCardCarousel
        currentProduct={currentProduct}
        viewWidth={viewWidth}
      />
    </div>
  );
}
