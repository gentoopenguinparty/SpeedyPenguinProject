import React from 'react';

import AddToOutfitsButton from './Buttons/AddToOutfitsButton.jsx';
import { FlexContainer, CardCarousel } from './styles/CardCarousel.styled.js';
import OutfitCard from './OutfitCard.jsx';
import useOutfitListStore from './stores.js';

export default function OutfitCardCarousel() {
  const outfits = useOutfitListStore((state) => state.outfits);
  const removeOutfit = '';
  return (
    <FlexContainer>
      <CardCarousel>
        <AddToOutfitsButton />
        {outfits.map((product) => (
          <OutfitCard
            key={product.id}
            outfit={product}
            removeOutfit={removeOutfit}
          />
        ))}
      </CardCarousel>
    </FlexContainer>
  );
}
