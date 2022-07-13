import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
background-color: white;
position:sticky;
color: #525252;
padding:10px;
grid-column: 2/3;
grid-row: 1/2;
z-index:1;
border: 2px solid blue;
`;
export default function ProductInterface({ data, styles }) {
  console.log();

  return (
    <Main>
      {data.name}
    </Main>
  );
}
