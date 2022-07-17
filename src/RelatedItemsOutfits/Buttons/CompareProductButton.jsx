import React from 'react';
import styled from 'styled-components';

export default function CompareProductButton() {
  return <CompareButton>★</CompareButton>;
}

const CompareButton = styled.div`
  /* border: 2px solid purple; */
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;

  font-size: 25px;
  color: orange;
`;
