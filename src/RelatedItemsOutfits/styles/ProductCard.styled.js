import styled from 'styled-components';

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 auto;

  position: relative;
  border: 1px solid black;
  height: 400px;
  width: 275px;
  margin: 10px;

  &:hover {
    box-shadow: 5px 5px 3px darkorange;
  }

`;

export default ProductCard;
