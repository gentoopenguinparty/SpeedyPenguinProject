import React from 'react';
import styled from 'styled-components';

export default function InputGrid(props) {
  return (
    <Main>
      <select>
        <option>
          Fruit
        </option>
        <option>
          Fruit
        </option>
        <option>
          Fruit
        </option>
      </select>
    </Main>
  );
}
const Main = styled.div`
height: auto;
width: 100%;
background-color:red;
`;
