import React, { useState } from 'react';
import BigList from './BigList.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main component
export default function RatingsReviews({metaD, cacheD, trackClick}) {


  var sortRelevent = function (array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }


  return (
    <div id = 'reviews' onClick={(e) => trackClick(e, 'Reviews')}>
      {console.log('cash', cacheD)}
      <BigList
        metaD={metaD}
        cacheD={sortRelevent(cacheD)} />
    </div>
  );

}