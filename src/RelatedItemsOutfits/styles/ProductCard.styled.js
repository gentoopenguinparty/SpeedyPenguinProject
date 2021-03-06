import styled from 'styled-components';

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 auto;

  position: relative;
  border: 1px solid black;
  height: 400px;
  width: 300px;
  margin: 10px;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

`;
export default ProductCard;
