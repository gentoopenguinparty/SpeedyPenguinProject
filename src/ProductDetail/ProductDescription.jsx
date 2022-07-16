import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
background-color: green;
color: white;
`
export default function ProductDescription({currentStyle , styles, data}) {
  console.log(data)


  return (
    <Main> Desc here </Main>
  )
}