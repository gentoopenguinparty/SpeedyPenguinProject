import React, { useState } from 'react';
import BigList from './BigList.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main component
export default function RatingsReviews() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<BigList />} />
        {/* <BigList /> */}
      </Routes>
    </div>
  );

}