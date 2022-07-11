import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../util.js'
import Review from './Review.jsx'
import SeeMore from './SeeMore.jsx'
let axios = require('axios');

// This component is made up of the individual reviews and also contains the add a review button and also the see more review button

export default function BigList() {
  return (
    <div>
      <Review/>
      <SeeMore/>
    </div>
  );
}