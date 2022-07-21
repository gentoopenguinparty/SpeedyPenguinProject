/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import PhotoGallery from './PhotoGallery.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductInterface from './ProductInterface.jsx';
import ProductCheckmarks from './ProductCheckmarks.jsx';

export default function ProductDetail({
  styles, productData, trackClick, meta,
}) {
  const [currentStyle, setCurrrentStyle] = React.useState(0);
  const handleStyleChange = (newStyleInd) => {
    setCurrrentStyle(newStyleInd);
  };

  return (
    <div onClick={(e) => trackClick(e, 'prod det')}>

      <Grid>
        <PhotoGallery images={styles[currentStyle]} />
        <ProductInterface
          styleChange={handleStyleChange}
          data={productData}
          styles={styles}
          id={currentStyle}
          meta={meta}
        />
      </Grid>

      <Grid margin={10}>
        <ProductDescription
          styleChange={handleStyleChange}
          data={productData}
          styles={styles}
        />
        <ProductCheckmarks features={productData.features} />
      </Grid>

    </div>
  );
}
const Grid = styled.div`
display:grid;
grid-template-columns:1.5fr 1fr;
background-color: #ebebeb;
`;
