import React from 'react';
import StarRatings from 'react-star-ratings';

import parseStarRating from '../parseStarRating.js';

export default function ProductCardStarRating({ ratingsObj }) {
  let rating = 0;
  if (ratingsObj) {
    rating = ratingsObj['1'] ? parseStarRating(ratingsObj) : 0;
  }
  console.log('rating:', rating);

  return (
    <StarRatings
      rating={rating}
      starRatedColor="orange"
      numberOfStars={5}
      starDimension="14px"
      starSpacing="1px"
      name="rating"
    />
  );
}
