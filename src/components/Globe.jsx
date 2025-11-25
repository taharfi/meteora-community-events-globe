import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = ({ pointsData }) => {
  const globeEl = useRef();

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.2;
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      pointsData={pointsData}
      pointAltitude="size"
      pointColor="color"
      pointLabel={d => `
        <div><b>${d.description}</b></div>
        <div>LAT: ${d.lat}</div>
        <div>LNG: ${d.lng}</div>
      `}
      atmosphereColor="lightskyblue"
    />
  );
};

export default GlobeComponent;