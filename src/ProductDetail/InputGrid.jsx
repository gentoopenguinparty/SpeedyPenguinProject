import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function InputGrid({ style }) {
  // create an array of skus options
  const sizeOptions = Object.keys(style.skus)
    .filter((sku) => style.skus[sku].quantity > 0)
    .map((sku) => <option value={sku} key={sku}>{style.skus[sku].size}</option>);

  const [currentSku, setCurrentSku] = useState(null);

  const [currentQty, setCurrentQty] = useState(null);

  const handleSizeChange = (e) => {
    setCurrentSku(e.target.value);
    setCurrentQty(null);
  };
  const handleQtyChange = (e) => {
    setCurrentQty(e.target.value);
  };
  const addToCart = () => {
    console.log(currentSku, currentQty);
  };
  const q = (style.skus[currentSku]
    ? Array(style.skus[currentSku].quantity).map((x, i) => <option>{i}</option>).fill(1)
    : undefined);

  return (
    <Main>

      <Dropdown onChange={handleSizeChange} value={style.skus[currentSku] || 'default'}>
        <option value="default" disabled hidden>{sizeOptions.length ? 'SELECT SIZE' : 'Out of Stock'}</option>
        {sizeOptions}
      </Dropdown>
      <Dropdown value={style.skus[currentSku] || 'default'} onChange={handleQtyChange}>
        <option value="default" disabled hidden>Select QTY</option>
        {q && q.map((x, i) => <option key={i}>{i + 1}</option>).slice(0, 15)}
      </Dropdown>
      {(currentQty)
        ? <Add onClick={addToCart}>ADD TO CART</Add>
        : <Add disabled>ADD TO CART</Add>}
    </Main>
  );
}
const Dropdown = styled.select`
`;
const Add = styled.button`
grid-column: 1/3;
background:white;
border: 1px solid black;
height: 40px;
font-size:16px;
font-weigth: bold;
`;
const Main = styled.div`
height: auto;
width: 100%;
display: grid;
grid-template-columns: 3fr 1fr;
grid-gap: 3px;
`;
