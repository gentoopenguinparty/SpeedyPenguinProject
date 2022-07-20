import React from 'react';

export default function Tracker({render}) {
  const trackClick = (e, w) => {
    //console.log(e.target, w);
  };
  return (
    <>
      {render(trackClick)}
    </>
  );
}
