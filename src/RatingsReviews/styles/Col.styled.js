import styled from 'styled-components';

export const Col = styled.div`
flex: ${(props) => props.size};
align-items: ${(props) => props.align};
flex-direction: ${(props) => props.direction};
justify-content: ${props => props.space};
font-weight: ${props => props.weight};
background-color: ${props => props.color};
min-width: ${props => props.width}px;
max-height: ${props => props.height}px;
`;