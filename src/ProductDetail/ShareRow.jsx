import React from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,

  FacebookIcon,
  PinterestIcon,
  TwitterIcon,

} from 'react-share';

export default function ShareRow() {
  const iconSize = 30;
  const shareUrl = 'localhost:3000';
  return (
    <Main>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={iconSize} />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={iconSize} />
      </TwitterShareButton>
      <PinterestShareButton url={shareUrl}>
        <PinterestIcon size={iconSize} />
      </PinterestShareButton>
    </Main>
  );
}
const Main = styled.div`
color: white;
display: flex;
flex:-direction: row;
justify-content:space-between;
width: 100px;
`;
