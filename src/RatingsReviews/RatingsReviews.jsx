import React, { useState } from 'react';
import BigList from './BigList.jsx';
import SeeMore from './SeeMore.jsx';


// Main component
export default function RatingsReviews() {

  const [trackCount, addTrack] = useState(0);

    function tracker() {
      console.log('clicked, count: ', addTrack(trackCount + 1));
    }

  return (
    <BigList/>
  );

}