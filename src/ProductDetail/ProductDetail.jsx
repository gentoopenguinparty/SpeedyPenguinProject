import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { axiosGet } from '../../util';
import PhotoGallery from './PhotoGallery.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductInterface from './ProductInterface.jsx';
import ProductCheckmarks from './ProductCheckmarks.jsx';

const Grid = styled.div`
display:grid;
grid-template: 2fr 1fr / 1.5fr 1fr;
`;

export default function ProductDetail() {
  const [productData, setProductData] = React.useState(null);
  const [styles, setStyles] = React.useState([]);
  const [currentStyle, setCurrrentStyle] = React.useState(0);
  const id = 37315;
  React.useEffect(() => {
    axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/producgit ts/${id}`)
      .then((data) => {
        setProductData(data.data);
        axiosGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`)
          .then((data) => setStyles(data.data.results))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {!styles.length ? <div>Loading</div> : (
        <>
          <Grid>
            <PhotoGallery images={styles[currentStyle]} />
            <ProductInterface data={productData} styles={styles} />
          </Grid>

          <Grid>
            <ProductDescription />
            <ProductCheckmarks />
          </Grid>
        </>
      )}
    </div>
  );
}
