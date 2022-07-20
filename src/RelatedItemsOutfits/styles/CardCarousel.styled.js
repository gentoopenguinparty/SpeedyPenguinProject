import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CardCarousel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 420px;
  padding: 10px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }


`;
