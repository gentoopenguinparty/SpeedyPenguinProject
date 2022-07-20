import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { productData, styles } from './data.js';
import ProductDetail from '../ProductDetail.jsx';

afterEach(cleanup);

test('should render ProductDetail component', () => {
  render(<ProductDetail
    productData={productData}
    styles={styles}

  />);
});
