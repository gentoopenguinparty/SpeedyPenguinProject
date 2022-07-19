import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BigList from '../src/RatingsReviews/BigList.jsx';
import Review from '../src/RatingsReviews/Review.jsx';

afterEach(cleanup)

test('should render bigList component', () => {
  render(<BigList
    metaD={{
      ratings: { 1: [1], 2: [1], 3: [1], 4: [1], 5: [1] },
      characteristics: {
        Comfort: { value: 1 },
        Size: { value: 1 },
        Quality: { value: 1 }
      }
    }}
    cacheD={[{
      rating: 1, recommend: 'bool',
      date: 'filler', review_id: 'filler',
      photos: [1], noReview: false
    }]} />);
})

test('should render main review component', () => {
  render(
    <Review apiData={[{
      rating: 1, recommend: 'bool',
      date: 'filler', review_id: 'filler', photos: [{id: 1, url: 1}]
    }]}
      countReviews={2} />);
})
