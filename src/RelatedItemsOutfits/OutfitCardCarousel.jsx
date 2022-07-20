import React, { useState, useRef, useLayoutEffect } from 'react';

import Heading from './styles/Heading.styled.js';
import { FlexContainer, CardCarousel } from './styles/CardCarousel.styled.js';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfitsButton from './Buttons/AddToOutfitsButton.jsx';
import { CardScrollButton } from './Buttons/index.jsx';
import useOutfitListStore from './stores.js';

export default function OutfitCardCarousel({ currentProduct, viewWidth }) {
  const { outfits, addOutfit, removeOutfit } = useOutfitListStore();
  const [outfitCarouselPosition, setOutfitCarouselPosition] = useState(0);
  const [outfitCarouselWidth, setOutfitCarouselWidth] = useState(0);
  const outfitCarouselRef = useRef(null);

  useLayoutEffect(() => {
    setOutfitCarouselWidth(outfitCarouselRef.current.offsetWidth);
    // setTimeout(() => {
    //   setOutfitCarouselWidth(outfitCarouselRef.current.offsetWidth);
    // }, 1000);
  }, [outfits]);
  // console.log('outfitsStore:', outfits);
  return (
    <>
      <Heading>Your Outfit</Heading>
      <FlexContainer>
        {outfitCarouselPosition !== 0 ? (
          <CardScrollButton
            id="outfitScrollBack"
            className="scrollBack"
            direction="back"
            stateHandler={setOutfitCarouselPosition}
          />
        ) : null}
        <CardCarousel
          ref={outfitCarouselRef}
          position={`${outfitCarouselPosition}px`}
        >
          <AddToOutfitsButton
            currentProduct={currentProduct}
            currentOutfits={outfits}
            addToOutfits={addOutfit}
          />
          {outfits.map((outfitItem) => (
            <OutfitCard
              key={outfitItem.id}
              outfitItem={outfitItem}
              removeOutfit={removeOutfit}
            />
          ))}
        </CardCarousel>
        {viewWidth < outfitCarouselWidth - outfitCarouselPosition ? (
          <CardScrollButton
            id="outfitScrollForward"
            direction="forward"
            stateHandler={setOutfitCarouselPosition}
          />
        ) : null}
      </FlexContainer>
    </>
  );
}
