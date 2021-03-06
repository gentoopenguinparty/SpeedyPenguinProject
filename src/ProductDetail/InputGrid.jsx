/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styled from 'styled-components';
import { axiosPost } from '../../util';

export default function InputGrid({ style }) {
  // create an array of skus options
  const sizeOptions = Object.keys(style.skus)
    .filter((sku) => style.skus[sku].quantity > 0)
    .map((sku) => <option value={sku} key={sku}>{style.skus[sku].size}</option>);

  const [currentSku, setCurrentSku] = useState(null);

  const [currentQty, setCurrentQty] = useState(null);

  const handleSizeChange = (e) => {
    setCurrentSku(e.target.value);
    setCurrentQty(1);
  };

  const handleQtyChange = (e) => {
    setCurrentQty(e.target.value);
  };

  const addToCart = () => {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart';
    for (let i = 0; i < currentQty; i += 1) {
      axiosPost(url, JSON.stringify({ sku_id: currentSku }));
    }
  };

  const q = (style.skus[currentSku]
    ? Array(style.skus[currentSku].quantity).map((x, i) => <option>{i}</option>).fill(1)
    : undefined);

  return (
    <Main>

      <Dropdown
        data-testid="size-dropdown"
        onChange={handleSizeChange}
        defaultValue="default"
      >
        <option value="default" disabled hidden>{sizeOptions.length ? 'SELECT SIZE' : 'Out of Stock'}</option>
        {sizeOptions}
      </Dropdown>

      <Dropdown value={style.skus[currentSku] ? (currentQty) : 'default'} onChange={handleQtyChange}>
        <option value="default" disabled hidden>-</option>
        {q && q.map((x, i) => <option key={i}>{i + 1}</option>).slice(0, 15)}
      </Dropdown>

      {(style.skus[currentSku])
        ? <Add act onClick={addToCart}>ADD TO CART</Add>
        : <Add disabled>ADD TO CART</Add>}

    </Main>
  );
}
const Dropdown = styled.select`
height: 40px;
`;
const Add = styled.button`
grid-column: 1/3;
background:white;
border: 1px solid black;
height: 40px;
font-size:16px;
font-weigth: bold;
&:hover{
  transform:${(prop) => prop.act && 'scale(1.02)'};
}
`;
const Main = styled.div`
height: auto;
width: 100%;
display: grid;
grid-template-columns: 3fr 1fr;
grid-gap: 8px;
`;
