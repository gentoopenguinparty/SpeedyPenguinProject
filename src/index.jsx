import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import create from 'zustand';
import Tracker from './Tracker.jsx';
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
  const url = window.location.pathname;
  const id = +url.split('/')[1] || 38000;
  const [currentProductData, setCurrentProductData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getAll(id)
      .then((responses) => setCurrentProductData(responses.map((response) => response.data)))
      .then(() => setLoaded(true));
  }, []);

  return (

    <div>
      {loaded ? (
        <div>
          <Tracker render={(trackClick) => (
            <ProductDetail
              trackClick={trackClick}
              productData={currentProductData[0]}
              styles={currentProductData[1].results}
            />
          )}
          />
          <Tracker render={(trackClick) => (
            <RelatedItemsOutfitsModule trackClick={trackClick} />
          )}
          />
          <Tracker render={(trackClick) => (
            <QuestionsAnswers
              trackClick={trackClick}
              productId={id}
            />
          )}
          />
          <Tracker render={(trackClick) => (
            <RatingsReviews
              trackClick={trackClick}
              metaD={currentProductData[2]}
              cacheD={currentProductData[3].results}
            />
          )}
          />

        </div>
      ) : <p>Loading</p>}
    </div>
  );
}

root.render(<Router><App /></Router>);
