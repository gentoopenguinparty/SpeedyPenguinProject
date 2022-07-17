import styled from 'styled-components';

const ScrollButton = styled.div`
  height: 120px;
  width: 40px;

  background-image: url(../../assets/${(props) => props.direction}-arrow.png);
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
`;

export default ScrollButton;
