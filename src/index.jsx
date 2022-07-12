import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ProductDetail from './ProductDetail/ProductDetail.jsx';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import RelatedItemsOutfits from './RelatedItemsOutfits/index.jsx';

const root = createRoot(document.getElementById('root'));

// Huzzah for jsx!
<<<<<<< HEAD
export function App() {

=======
function App() {
>>>>>>> c11d293c1e7cbbfa79c70515e2163ede972f6f87
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
