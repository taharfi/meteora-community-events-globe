import React, { useState } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
  const [data] = useState(() => {
    const N = 20;
    return [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: Math.random() / 3,
      color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
    }));
  });

  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      pointsData={data}
      pointAltitude="size"
      pointColor="color"
    />
  );
};

export default GlobeComponent;