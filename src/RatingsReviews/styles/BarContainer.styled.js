import styled from 'styled-components';

export const BarContainer = styled.div
`
display: flex;
min-width: 235px;
border-style: ${props => props.border};
height: ${props => props.height}px;
background-color: ${props => props.color};
margin: 5px 5px 5px 5px;
overflow: hidden;
`