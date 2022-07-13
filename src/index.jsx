import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
import create from 'zustand';
=======
>>>>>>> dev

import ProductDetail from './ProductDetail/ProductDetail.jsx';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import RelatedItemsOutfits from './RelatedItemsOutfits/index.jsx';

const root = createRoot(document.getElementById('root'));

<<<<<<< HEAD
// creates Zustand store with valid initial ID
// maybe should be in a util file?
const useIDStore = create((set) => ({
  currentProductID: 37313,
  changeID: (newID) => set({ currentProductID: newID }),
}));
export default useIDStore;
// inside components that need to know ID:
// const currentProductID = useIDStore((state) => state.currentProductID)

// REACT-ROUTER:
// on page load invoke changeID with id from URL

=======
// Huzzah for jsx!
>>>>>>> dev
function App() {
  return (
    <div>
      <ProductDetail />
      <QuestionsAnswers />
      <RatingsReviews />
      <RelatedItemsOutfits />
    </div>
  );
}

root.render(<Router><App/></Router>);
