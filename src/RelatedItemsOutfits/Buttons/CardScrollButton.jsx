import React from 'react';
import styled from 'styled-components';

export default function CardScrollButton() {
  return (
    <ScrollButton>
      <img alt="back arrow" src="../../assets/back-arrow.png" />
    </ScrollButton>
  );
}

const ScrollButton = styled.div`
  width: 60px;
  background-image: url(../../assets/back-arrow.png);
`;
