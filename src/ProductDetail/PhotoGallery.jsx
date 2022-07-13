import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
width: ${(props) => props.size};
color: white;
position:relative;

background-color:red;
`;
const CurrentImage = styled.div`
background-image: url(${(props) => props.image});
background-color:red;
background-repeat: no-repeat;
background-size: contain ;
background-position: center;
transition: all 2s;
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
export default function PhotoGallery({ images }) {
  const [isFullScreen, setIsFullScreen] = React.useState(false)

  return (
    <Main
      className="test"
      size={isFullScreen ? '100vw' : 'auto'}
    >
      <CurrentImage image={images.photos[4].url}>
        <Side>
          {images.photos.map((photo, i) => <Thumbnail key={i} image={photo.thumbnail_url} />)}
        </Side>
        <FullScreen onClick={() => setIsFullScreen((prev) => !prev)} />
      </CurrentImage>
    </Main>
  );
}
