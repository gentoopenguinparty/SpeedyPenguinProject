import React from 'react';
import styled from 'styled-components';

export default function ProductCheckmarks({ features }) {
  return (
    <Main>
      <List>
        {features.map(({ feature, value }) => (
          <FeatureCard key={feature}>
            <Feature>
              {feature}
              :
            </Feature>
            <Value>{value}</Value>
          </FeatureCard>
        ))}
      </List>
    </Main>
  );
}
const Main = styled.div`
color: white;
padding-top:10px;
padding-bottom:10px;

`;
const FeatureCard = styled.div`
border:2px solid black;
margin:3px;
padding: 5px;`;
const List = styled.div`
display:flex;
flex-direction: column;
justify-items: space-around;
border-left: 2px solid black;
padding: 10px;`;
const Feature = styled.p`
color:black;
margin: 2px;
font-weight: bold;`;
const Value = styled.p`
color:black;
margin: 2px;
`;
