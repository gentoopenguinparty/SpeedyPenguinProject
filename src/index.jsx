import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import ProductDetail from './ProductDetail/ProductDetail.jsx';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import RelatedItemsOutfits from './RelatedItemsOutfits/RelatedItemsOutfits.jsx';

const root = createRoot(document.getElementById('root'));

// Huzzah for jsx!
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

root.render(<Router><App /></Router>);
