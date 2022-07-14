import styled from 'styled-components';

export const Rating = styled.div
`
--rating: ${props=>props.rating};
--percent: calc(var(--rating) / 5 * 100%);

--star-size: ${props=>props.size}px;
--star-color: #fff;
--star-background: #000000;
-webkit-text-stroke: 1px black;

display: inline-block;
font-size: var(--star-size);
font-family: Times;
line-height: 1;

&:before {
  content: '★★★★★';
  letter-spacing: 3px;
  background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`