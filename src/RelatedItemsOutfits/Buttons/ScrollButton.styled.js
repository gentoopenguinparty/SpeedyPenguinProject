import styled from 'styled-components';

const ScrollButton = styled.div`
  height: 60px;
  width: 60px;
  flex-shrink: 0;

  background-image: url(../../assets/${(props) => props.direction}-arrow.png);
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
`;

export default ScrollButton;
