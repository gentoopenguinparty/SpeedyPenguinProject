import styled from 'styled-components';

export const BarGraph = styled.div
`
display: flex
height: 24px;
width: ${props => props.percent}%;
background-color: rgb(43,194,83);
`