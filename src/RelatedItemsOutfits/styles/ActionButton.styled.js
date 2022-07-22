import styled from 'styled-components';

const ActionButton = styled.div`
  /* border: 2px solid purple; */
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;

  font-size: 25px;
  color: darkorange;
  &:hover {
    color: mediumorchid;
  }
`;
export default ActionButton;
