import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

const GlobeComponent = ({ pointsData }) => {
  const globeEl = useRef();

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.2;

    // Add a sun
    const sun = new THREE.DirectionalLight(0xffffff, 0.6);
    sun.position.set(-2, 0.5, 1.5);
    globeEl.current.scene().add(sun);
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
      onPointHover={point => globeEl.current.pointColor(point ? 'rgba(255, 255, 0, 0.5)' : 'color')}
    />
  );
};

export default GlobeComponent;