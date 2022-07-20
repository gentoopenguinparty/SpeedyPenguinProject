import React from 'react';
import styled from 'styled-components';

import ScrollButton from '../styles/ScrollButton.styled.js';

export default function CardScrollButton({ direction, id }) {
  return (
    <ScrollButtonContainer className={direction}>
      <ScrollButton id={id} direction={direction} />
    </ScrollButtonContainer>
  );
}

const ScrollButtonContainer = styled.div`
  &.forward {
    position: absolute;
    right: 20px;
  }
`;
