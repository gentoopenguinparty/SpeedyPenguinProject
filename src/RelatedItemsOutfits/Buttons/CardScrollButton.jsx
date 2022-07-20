import React from 'react';
import styled from 'styled-components';

import ScrollButton from '../styles/ScrollButton.styled.js';

export default function CardScrollButton({ direction, id, stateHandler }) {
  const scrollHandler = (dir) => {
    // eslint-disable-next-line arrow-body-style
    stateHandler((current) => {
      return dir === 'forward' ? current + 320 : current - 320;
    });
  };
  return (
    <ScrollButtonContainer
      id={id}
      className={direction}
      onClick={() => scrollHandler(direction)}
    >
      <ScrollButton direction={direction} />
    </ScrollButtonContainer>
  );
}

const ScrollButtonContainer = styled.div`
  z-index: 2;
  &.forward {
    position: absolute;
    right: 20px;
  }
`;
