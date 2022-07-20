import React from 'react';
import StarRatings from 'react-star-ratings';

import parseStarRating from '../parseStarRating.js';

export default function ProductCardStarRating({ ratingsObj }) {
  // const rating = parseStarRating(ratingsObj);
  return (
    <StarRatings
      // rating={rating}
      starRatedColor="orange"
      numberOfStars={5}
      starDimension="14px"
      starSpacing="1px"
      name="rating"
    />
  );
}
