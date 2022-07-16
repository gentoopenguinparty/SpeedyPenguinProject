import styled from 'styled-components';

export const Grid = styled.div`
background-color: ${props => props.color};
padding: ${props => props.padding}px;
margin-left: 20px;
margin-right: 20px;
margin-bottom: ${props => props.bottom}px;
border-style: ${props => props.border};
`;