import React, { useState } from 'react';
import BigList from './BigList.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main component
export default function RatingsReviews({metaD, cacheD}) {

  return (
    <div id = 'reviews'>
      <BigList
        metaD={metaD}
        cacheD={cacheD} />
    </div>
  );

}