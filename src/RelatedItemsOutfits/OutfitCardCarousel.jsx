import React from 'react';

// import OutfitCard from './OutfitCard';
import AddToOutfitsButton from './Buttons/AddToOutfitsButton.jsx';

import { FlexContainer, CardCarousel } from './styles/CardCarousel.styled.js';

export default function OutfitCardCarousel() {
  return (
    <FlexContainer>
      <CardCarousel>
        <AddToOutfitsButton />
        {/* <OutfitCard /> */}
      </CardCarousel>
    </FlexContainer>
  );
}
