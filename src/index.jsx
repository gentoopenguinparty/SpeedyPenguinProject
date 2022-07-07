import { createRoot } from "react-dom/client";
import React from 'react';
const root = createRoot(document.getElementById("root"));

import ProductDetail from './ProductDetail/ProductDetail.jsx'
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx'
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx'
import RelatedItemsOutfits from './RelatedItemsOutfits/RelatedItemsOutfits.jsx'

// Huzzah for jsx!
const App = () => {

  return (
    <div>
      <ProductDetail />
      <QuestionsAnswers />
      <RatingsReviews />
      <RelatedItemsOutfits />
    </div>
  )
}

root.render(<App />);