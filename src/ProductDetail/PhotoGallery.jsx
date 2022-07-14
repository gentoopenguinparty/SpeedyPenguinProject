import React, { useState } from 'react';
import styled from 'styled-components';

const Main = styled.div`
width: ${(props) => props.size};
color: white;
position:relative;
background-color:none;
`;
const CurrentImage = styled.div.attrs((props) => ({
  style: {
    backgroundPosition: props.pos,
  },
}))`
  background-image: url(${(props) => props.image});
  background-color:grey;
  background-repeat: no-repeat;
  background-size: cover ;
  transition: all 1s;
  width:100%;
  `;

const Side = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const Thumbnail = styled.div`
background-image: url(${(props) => props.image});
background-color: white;
background-repeat: no-repeat;
background-size: contain ;
background-position: center;
height: 50px;
width: 50px;
margin:5px;
border: 0.5px solid black;
`;
const FullScreen = styled.div`
width: 20px;
height: 20px;
background-image: url(https://cdn0.iconfinder.com/data/icons/bold-multimedia-player-button/512/media_player_button_24-512.png);
background-size: contain;
position: absolute;
right: 10px;
top:10px;
cursor: pointer;
`;
const Arrow = styled.div`
position: absolute;
background-image: url(https://freepngimg.com/thumb/arrow/5-2-arrow-transparent.png);
right: ${(props) => props.right};
left: ${(props) => props.left};
bottom:50%;
height:20px;
width:20px;
background-size:contain;
background-position: center;
background-repeat: no-repeat;
transform: scaleX(${(props) => props.flip});
cursor: pointer;
`;
export default function PhotoGallery({ images }) {
  const [currentPicInd, setCurrentPicInd] = useState(0);// CHANGE TO PARENT LATER
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [imagePos, setImagePos] = useState('center');
  const handleImageMove = (e) => {
    setImagePos(`center -${e.nativeEvent.offsetY * (isFullScreen ? 3 : 1)}px`);
  };
  return (
    <Main
      className="test"
      size={isFullScreen ? '100vw' : 'auto'}
    >
      <CurrentImage
        pos={imagePos}
        onMouseMove={handleImageMove}
        image={images.photos[currentPicInd].url}
      >
        <Side>
          {images.photos.map((photo, i) => <Thumbnail key={i} image={photo.thumbnail_url} />)}
        </Side>
        <FullScreen onClick={() => setIsFullScreen((prev) => !prev)} />
        {!((currentPicInd + 1) === images.photos.length)
          ? <Arrow onClick={() => setCurrentPicInd((prev) => prev + 1)} right="10px" flip={1} /> : ''}
        {!(currentPicInd === 0)
          ? <Arrow onClick={() => setCurrentPicInd((prev) => prev - 1)} left="80px" flip={-1} /> : ''}

      </CurrentImage>
    </Main>
  );
}
