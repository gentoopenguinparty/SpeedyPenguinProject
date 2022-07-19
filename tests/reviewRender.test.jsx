import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BigList from '../src/RatingsReviews/BigList.jsx';
import Review from '../src/RatingsReviews/Review.jsx';
import RatingReviews from '../src/RatingsReviews/RatingsReviews.jsx';
import Graphical from '../src/RatingsReviews/Graphical.jsx';
afterEach(cleanup)

test('should render RatingsReview', () => {
  render(
    <RatingReviews metaD={{
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
    }]}/>);
})

test('should render RatingsReview', () => {
  render(
    <RatingReviews metaD={{
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
    }]}/>);

    const addButton = screen.getByText('ADD A REVIEW')
    fireEvent.click(addButton)

})
