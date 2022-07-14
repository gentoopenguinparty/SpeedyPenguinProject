import styled from 'styled-components';

export const TriangleContainer = styled.div
`
display: flex;
min-width: 150px;
border-style: ${props => props.border};
height: ${props => props.height}px;
background: linear-gradient(to right,
  #9c9e9f 0%,#9c9e9f 27%,
  #f6f6f6 30%,#f6f6f6 31%,
  #9c9e9f 34%,#9c9e9f 65%,
  #f6f6f6 68%,#f6f6f6 69%,
  #9c9e9f 72%,#9c9e9f 100%
  );
margin: 5px 5px 5px 5px;
overflow: hidden;
`