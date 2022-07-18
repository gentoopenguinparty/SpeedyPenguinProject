import React from 'react';

import Heading from './styles/Heading.styled.js';
import AddToOutfitsButton from './Buttons/AddToOutfitsButton.jsx';
import { FlexContainer, CardCarousel } from './styles/CardCarousel.styled.js';
import OutfitCard from './OutfitCard.jsx';
import useOutfitListStore from './stores.js';

export default function OutfitCardCarousel() {
  const { outfits, addOutfit, removeOutfit } = useOutfitListStore();
  // console.log('outfitsStore:', outfits);
  return (
    <>
      <Heading>Your Outfit</Heading>
      <FlexContainer>
        <CardCarousel>
          <AddToOutfitsButton handleClick={addOutfit} />
          {outfits.map((outfitItem) => (
            <OutfitCard
              key={outfitItem.id}
              outfitItem={outfitItem}
              removeOutfit={removeOutfit}
            />
          ))}
        </CardCarousel>
      </FlexContainer>
    </>
  );
}
