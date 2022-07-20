import React, { useState } from 'react';

import Heading from './styles/Heading.styled.js';
import { FlexContainer, CardCarousel } from './styles/CardCarousel.styled.js';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfitsButton from './Buttons/AddToOutfitsButton.jsx';
import { CardScrollButton } from './Buttons/index.jsx';
import useOutfitListStore from './stores.js';

export default function OutfitCardCarousel() {
  const { outfits, addOutfit, removeOutfit } = useOutfitListStore();
  const [outfitCarouselPosition, setOutfitCarouselPosition] = useState(0);
  // console.log('outfitsStore:', outfits);
  return (
    <>
      <Heading>Your Outfit</Heading>
      <FlexContainer>
        {
          outfitCarouselPosition !== 0 ? (
            <CardScrollButton
              id="outfitScrollBack"
              direction="back"
              stateHandler={setOutfitCarouselPosition}
            />
          )
            : null
        }
        <CardCarousel position={`${outfitCarouselPosition}px`}>
          <AddToOutfitsButton handleClick={addOutfit} />
          {outfits.map((outfitItem) => (
            <OutfitCard
              key={outfitItem.id}
              outfitItem={outfitItem}
              removeOutfit={removeOutfit}
            />
          ))}
        </CardCarousel>
        <CardScrollButton
          id="outfitScrollForward"
          direction="forward"
          stateHandler={setOutfitCarouselPosition}
        />
      </FlexContainer>
    </>
  );
}
