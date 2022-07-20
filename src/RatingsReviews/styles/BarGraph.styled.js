import styled from 'styled-components';

export const BarGraph = styled.div
`
height: 24px;
width: ${props => props.percent}%;
background-color: orange;
`