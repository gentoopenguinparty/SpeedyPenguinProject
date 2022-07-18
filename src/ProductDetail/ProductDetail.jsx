import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { axiosGet } from '../../util';
import PhotoGallery from './PhotoGallery.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductInterface from './ProductInterface.jsx';
import ProductCheckmarks from './ProductCheckmarks.jsx';

export default function ProductDetail({ styles, productData }) {
  const [currentStyle, setCurrrentStyle] = React.useState(0);
  const handleStyleChange = (newStyleInd) => {
    setCurrrentStyle(newStyleInd);
  };
  return (
    <div>

      <Grid>
        <PhotoGallery images={styles[currentStyle]} />
        <ProductInterface
          styleChange={handleStyleChange}
          data={productData}
          styles={styles}
          id={currentStyle}
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
