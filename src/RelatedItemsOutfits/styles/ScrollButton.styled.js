import styled from 'styled-components';

const ScrollButton = styled.div`
  height: 60px;
  width: 60px;
  z-index: 2;

  flex-shrink: 0;
  background-image: url(../../assets/${(props) => props.direction}-arrow.png);
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  background-color: orange;
  border-radius: 50%;
  opacity: 0.9;
  &:hover {
    background-color: mediumorchid;
  }
`;

export default ScrollButton;
