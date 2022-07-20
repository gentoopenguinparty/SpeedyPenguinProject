import React from 'react';
import styled from 'styled-components';

export default function ProductDescription({ data }) {
  return (
    <Main>
      <Slogan>{data.slogan}</Slogan>
      <Description>{data.description}</Description>
    </Main>
  );
}
const Main = styled.div`

color: black;
`;
const Slogan = styled.h1`
margin-left: 20px;
`;
const Description = styled.p`
margin-left: 40px;
margin-right: 40px;
`;
