import React from 'react';
import {render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { productData, styles } from './data.js';
import ProductDetail from '../ProductDetail.jsx';

afterEach(cleanup);

test('should render ProductDetail component', () => {
  render(<ProductDetail
    productData={productData}
    styles={styles}
    trackClick={() => ''}

  />);
  const down = screen.getByTestId('down-arrow');
  const right = screen.getByTestId('right-arrow');
  fireEvent.click(down);
  const up = screen.getByTestId('up-arrow');
  fireEvent.click(up);
  fireEvent.click(right);
  const left = screen.getByTestId('left-arrow');
  fireEvent.click(left);
});
