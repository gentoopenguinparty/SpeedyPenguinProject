import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Review from '../src/RatingsReviews/Review.jsx';
import '@testing-library/jest-dom/extend-expect';

test('should render a review div', () => {
  render(<Review/>);
  const reviewElement = screen.getByTestId('testRender');
  expect(reviewElement).toBeInTheDocument();
})

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

›