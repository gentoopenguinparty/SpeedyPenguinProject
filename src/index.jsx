import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import create from 'zustand';
import ProductDetail from './ProductDetail/ProductDetail.jsx';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import RelatedItemsOutfitsModule from './RelatedItemsOutfits/index.jsx';
import { getAll } from '../util.js';

const root = createRoot(document.getElementById('root'));

// creates Zustand store with valid initial ID
// maybe should be in a util file?

const useIDStore = create((set) => ({
  currentProductID: 37313,
  changeID: (newID) => set({ currentProductID: newID }),
}));
export default useIDStore;

// inside components tht need to know ID:
// const currentProductID = useIDStore((state) => state.currentProductID)

// REACT-ROUTER:
// on page load invoke changeID with id from URL

function App() {
  let x = useNavigate()
  const url = window.location.href;
  let path = +url.slice(url.length - 6, url.length - 1)
  const [id, setId] = useState( path || 38000);
  const [currentProductData, setCurrentProductData] = useState([]);
  // 0: product info 1:styles 2:reviews/meta 3:reviews
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getAll(id)
      .then((responses) => setCurrentProductData(responses.map((response) => response.data)))
      .then(() => setLoaded(true));
  }, [id]);
  return (

    <div>
      {loaded ? (
        <div>
          <button onClick={() => {
            x(`./${id + 1}`, {replace:true})
             setId(prev =>prev +1)

          }}></button>
          <ProductDetail
            productData={currentProductData[0]}
            styles={currentProductData[1].results}
            reviewData={currentProductData[2]}
          />
          <RelatedItemsOutfitsModule />
          <QuestionsAnswers />
          <RatingsReviews />
        </div>
      ) : <p>Loading</p> }
    </div>
  );
}

root.render(<Router><App /></Router>);
