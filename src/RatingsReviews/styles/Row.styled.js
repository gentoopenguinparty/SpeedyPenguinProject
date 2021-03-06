import styled from 'styled-components';

export const Row = styled.div`
display: flex;
justify-content: ${props => props.space};
padding:${props => props.padding}px;
border-style: ${props => props.border};
height: ${props => props.height}px;
background-color: ${props => props.color};
align-items: ${props => props.align};
flex-direction: ${(props) => props.direction}
`;