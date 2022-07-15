import { createRoot } from 'react-dom/client';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import ProductDetail from './ProductDetail/ProductDetail.jsx';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import RelatedItemsOutfits from './RelatedItemsOutfits/index.jsx';

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

root.render(<Router><App/></Router>);
