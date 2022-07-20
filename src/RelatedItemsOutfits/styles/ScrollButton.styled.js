import styled from 'styled-components';

const ScrollButton = styled.div`
  height: 60px;
  width: 60px;
  flex-shrink: 0;

  z-index: 2;
  border-radius: 50%;
  background-color: lightgray;
  background-image: url(../../assets/${(props) => props.direction}-arrow.png);
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
`;

export default ScrollButton;
