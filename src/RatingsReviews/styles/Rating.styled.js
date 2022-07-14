import styled from 'styled-components';

export const Rating = styled.div
`
--star-size: 60px;
--star-color: #fff;
--star-background: #000000;
-webkit-text-stroke: 1px black;
&:before {
  content: "★★★★★";
  letter-spacing: 3px;
  background: linear-gradient(90deg, var(--star-background) calc((${props => props.rating})/ 5 * 100%), var(--star-color) calc(${props => props.rating} / 5 * 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`