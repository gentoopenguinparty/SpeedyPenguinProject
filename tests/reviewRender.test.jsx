import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BigList from '../src/RatingsReviews/BigList.jsx';
import Review from '../src/RatingsReviews/Review.jsx';

afterEach(cleanup)

test('should render bigList component', () => {
  render(<BigList />);
})

test('should render main review component', () => {
  render(
    <Review apiData={[{
      rating: 'filler', recommend: 'bool',
      date: 'filler', review_id: 'filler'
    }]}
      countReviews={2} />);
})
