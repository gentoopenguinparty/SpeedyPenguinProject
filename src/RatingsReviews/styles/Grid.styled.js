import styled from 'styled-components';

export const Grid = styled.div`
background-color: ${props => props.color};
padding: ${props => props.padding}px;
margin-left: ${props => props.left}px;
margin-right: ${props => props.right}px;
margin-bottom: ${props => props.bottom}px;
margin-top: ${props => props.top}px;
border-style: ${props => props.border};
max-height: ${props => props.height}px;
min-width: ${props => props.width}px;
border-color: ${props => props.bColor};
overflow-y: auto;
`;