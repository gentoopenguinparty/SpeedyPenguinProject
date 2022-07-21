import styled from 'styled-components';

export const Triangle = styled.div
`
width: 0;
height: 0;
border-left: 6px solid transparent;
border-right: 6px solid transparent;
border-top: 12px solid orange;
margin-left: ${props => props.margin}%;
margin-top: ${props => props.marginTop}%;
`