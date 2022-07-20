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
    <RatingReviews trackClick={() => ''}
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
    }]}/>);
})

test('should render AddReview', () => {
  render(
    <RatingReviews trackClick={() => ''}
    metaD={{
      ratings: { 1: [1], 2: [1], 3: [1], 4: [1], 5: [1] },
      characteristics: {
        Comfort: { value: 1 },
        Size: { value: 1 },
        Quality: { value: 1 },
        Length: {value: 1},
        Fit: {value: 1},
        Width: {value: 1}
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

test('should handle RatingDisplay click on star', () => {
  render(
    <RatingReviews trackClick={() => ''}
     metaD={{
      ratings: { 1: [1], 2: [1], 3: [1], 4: [1], 5: [1] },
      characteristics: {
        Comfort: { value: 1 },
        Size: { value: 1 },
        Quality: { value: 1 },
        Length: {value: 1},
        Fit: {value: 1},
        Width: {value: 1}
      }
    }}
    cacheD={[{
      rating: 1, recommend: 'bool',
      date: 'filler', review_id: 'filler',
      photos: [1], noReview: false
    }]}/>);

    const oneStar = screen.getByTestId('1')
    fireEvent.click(oneStar)

    const twoStar = screen.getByTestId('2')
    fireEvent.click(oneStar)

    const threeStar = screen.getByTestId('3')
    fireEvent.click(oneStar)

    const fourStar = screen.getByTestId('4')
    fireEvent.click(oneStar)

    const fiveStar = screen.getByTestId('5')
    fireEvent.click(oneStar)
})

test('should handle RatingDisplay click on star', () => {
  render(
    <RatingReviews trackClick={() => ''}
    metaD={{
      ratings: { 1: [1], 2: [1], 3: [1], 4: [1], 5: [1] },
      characteristics: {
        Comfort: { value: 1 },
        Size: { value: 1 },
        Quality: { value: 1 },
        Length: {value: 1},
        Fit: {value: 1},
        Width: {value: 1}
      }
    }}
    cacheD={[{
      rating: 1, recommend: 'bool',
      date: 'filler', review_id: 'filler',
      photos: [1], noReview: false
    }]}/>);

    const oneStar = screen.getByTestId('1')
    fireEvent.click(oneStar)

    const twoStar = screen.getByTestId('2')
    fireEvent.click(oneStar)

    const threeStar = screen.getByTestId('3')
    fireEvent.click(oneStar)

    const fourStar = screen.getByTestId('4')
    fireEvent.click(oneStar)

    const fiveStar = screen.getByTestId('5')
    fireEvent.click(oneStar)
})

test('should handle dropdown filter onclick', () => {
  render(
    <RatingReviews trackClick={() => ''}
    metaD={{
      ratings: { 1: [1], 2: [1], 3: [1], 4: [1], 5: [1] },
      characteristics: {
        Comfort: { value: 1 },
        Size: { value: 1 },
        Quality: { value: 1 },
        Length: {value: 1},
        Fit: {value: 1},
        Width: {value: 1}
      }
    }}
    cacheD={[{
      rating: 1, recommend: 'bool',
      date: 'filler', review_id: 'filler',
      photos: [1], noReview: false
    }]}/>);

    const triangle = screen.getByTestId('triangle')
    fireEvent.click(triangle)

    const newest = screen.getByTestId('newest')
    fireEvent.click(newest)

    const relevence = screen.getByTestId('relevence')
    fireEvent.click(relevence)

    const helpful = screen.getByTestId('helpful')
    fireEvent.click(helpful)
})