import React, { useState } from 'react';
import styled from 'styled-components';

export default function PhotoGallery({ images }) {
  const [currentPicInd, setCurrentPicInd] = useState(0);// CHANGE TO PARENT LATER
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [imagePos, setImagePos] = useState('center');
  const [sideBarOffset, setSideBarOffset] = useState(0);
  const handleImageMove = (e) => {
    if (e.target.id === 'current-image') {
      setImagePos(`${(e.nativeEvent.offsetX / e.target.clientWidth) * 100}% ${(e.nativeEvent.offsetY / e.target.clientHeight) * 100}%`);
    }
  };
  const handleFullScreen = (e) => {
    if (e.target.id === 'current-image') {
      setIsFullScreen(true);
    }
  };
  return (
    <Main
      className="test"
      size={isFullScreen ? '98vw' : 'auto'}
    >
      <CurrentImage
        id="current-image"
        data-testid="current-image"
        pos={imagePos}
        image={images.photos[currentPicInd].url}
        onClick={isFullScreen ? (e) => {
          if (e.target.id === 'current-image') {
            setZoomed((prev) => !prev);
          }
        } : handleFullScreen}
        fullScreen={isFullScreen}
        zoomed={zoomed}
        onMouseMove={zoomed ? handleImageMove : undefined}
      >
        { !isFullScreen ? (
          <Side>
            {(sideBarOffset !== 0 && images.photos.length >= 7)
              ? (
                <SideBarArrow
                  data-testid="left-arrow"
                  onClick={() => setSideBarOffset((prev) => prev - 1)}
                  direction={-90}
                />
              ) : ''}
            {images.photos.map((photo, i) => (
              <Thumbnail
                onClick={() => setCurrentPicInd(i)}
                key={photo.thumbnail_url}
                image={photo.thumbnail_url}
                boxShadow={currentPicInd === i ? '0px 3px 0px orange' : ''}
              />
            )).slice(sideBarOffset, sideBarOffset + 7)}
            {!(sideBarOffset + 7 === images.photos.length) && images.photos.length >= 7
              && (
                <SideBarArrow
                  data-testid="right-arrow"
                  onClick={() => setSideBarOffset((prev) => prev + 1)}
                  direction={90}
                />
              )}
          </Side>
        ) : (images.photos.map((photo, i) => (
          <Thumbnail
            onClick={() => {
              setCurrentPicInd(i);
              setZoomed(false);
            }}
            key={photo.thumbnail_url}
            image={photo.thumbnail_url}
            size={1}
            boxShadow={currentPicInd === i ? '0px 3px 0px orange' : ''}
          />
        )).slice(sideBarOffset, sideBarOffset + 7))}
        {isFullScreen ? (
          <FullScreen
            data-testid="fullscreen-btn"
            onClick={() => {
              setZoomed(false);
              setIsFullScreen((prev) => !prev);
            }}
          />
        ) : ''}
        {!(currentPicInd === 0)
          ? (
            <Arrow
              data-testid="up-arrow"
              onClick={() => {
                if (currentPicInd <= sideBarOffset) {
                  setSideBarOffset((prev) => prev - 1);
                }
                setCurrentPicInd((prev) => prev - 1);
              }}
              left="80px"
              flip={-1}
            />
          ) : ''}

        {!((currentPicInd + 1) === images.photos.length)
          ? (
            <Arrow
              data-testid="down-arrow"
              onClick={() => {
                if (currentPicInd >= sideBarOffset + 6) {
                  setSideBarOffset((prev) => prev + 1);
                }
                setCurrentPicInd((prev) => prev + 1);
              }}
              right="25px"
              flip={1}
            />
          ) : ''}

      </CurrentImage>
    </Main>
  );
}
const Main = styled.div`
height: 100%;
width: ${(props) => props.size};
color: white;
position:relative;
`;
const CurrentImage = styled.div.attrs((props) => ({
  style: {
    backgroundPosition: props.zoomed ? props.pos : 'center',
  },
}))`
  height: 100%;
  min-height: 460px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: ${(props) => (props.zoomed ? '250%' : 'cover')} ;
  transition: all 0.1s;
  width:100%;
  cursor: ${(props) => {
    if (!props.fullScreen) {
      return 'zoom-in';
    } if (!props.zoomed) {
      return 'crosshair';
    }
    return 'zoom-out';
  }};
  `;

const Side = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 80px;
`;
const Thumbnail = styled.div`
background-image: url(${(props) => props.image});
background-color: rgba(255,255,255,0.5);
background-repeat: no-repeat;
background-size: contain ;
background-position: center;
height: ${({ size }) => (size ? '20px' : '50px')};
width: ${({ size }) => (size ? '20px' : '50px')};
margin:${({ size }) => (size ? '10px' : '5px')};
border: 0.2px solid rgba(0,0,0,0.5);
cursor: pointer;
box-shadow: ${(props) => props.boxShadow};

`;
const FullScreen = styled.div`
width: 20px;
height: 20px;
background-image: url(https://cdn0.iconfinder.com/data/icons/bold-multimedia-player-button/512/media_player_button_24-512.png);
background-size: contain;
position: absolute;
right: 40px;
top:10px;
cursor: pointer;
`;
const Arrow = styled.div`
position: absolute;
background-size:contain;
background-position: center;
background-repeat: no-repeat;
background-image: url(https://freepngimg.com/thumb/arrow/5-2-arrow-transparent.png);
background-color:rgba(255,255,255,0.5);
border-radius:30%;
right: ${(props) => props.right};
left: ${(props) => props.left};
bottom:50%;
height:20px;
width:20px;
transform: scaleX(${(props) => props.flip});
cursor: pointer;
`;
const SideBarArrow = styled.div`
height:20px;
width:20px;
background-size:contain;
background-position: center;
background-repeat: no-repeat;
background-image: url(https://freepngimg.com/thumb/arrow/5-2-arrow-transparent.png);
background-color:rgba(255,255,255,0.5);
border-radius:30%;
transform:rotate(${(props) => props.direction}deg);
cursor: pointer;
`;
