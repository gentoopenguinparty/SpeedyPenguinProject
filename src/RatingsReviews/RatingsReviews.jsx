import React, { useState } from 'react';
import BigList from './BigList.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main component
export default function RatingsReviews({ metaD, cacheD, trackClick }) {


  var sortRelevent = function (array) {
    // set a counter = 0
    var count = 0;
    // Create a for loop that goes through the entire array
    for (var i = 0; i < array.length - 1; i++) {
      // Compare current index value to the neighboring index
      // if current index is greater than neighboring index
      console.log('testr', array[i])
      if (array[i].photos.length < array[i + 1].photos.length) {
        // swap the values around
        var currentVal = array[i];
        array[i] = array[i + 1];
        array[i + 1] = currentVal;
        // increment a counter
        count++;
      }
    }
    // if counter = 0
    if (count === 0) {
      // then return the sorted array
      return array;
    }
    // if counter > 0
    if (count > 0) {
      // run bubbleSort again with the current array
      sortRelevent(array);
    }
    return array;
  }


  return (
    <div id='reviews' onClick={(e) => trackClick(e, 'Reviews')}>
      <BigList
        metaD={metaD}
        cacheD={sortRelevent(cacheD)} />
    </div>
  );
}