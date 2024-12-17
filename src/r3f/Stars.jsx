import * as THREE from 'three';
import React, { useMemo } from 'react';

const vertexShader = `
  varying float vBrightness;
  void main() {
    vBrightness = 1.0 - length(position) / 50.0;
    gl_PointSize = 2.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying float vBrightness;
  void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    if (distanceToCenter > 0.5) {
      discard;
    }
    gl_FragColor = vec4(vec3(1.0), vBrightness);
  }
`;

function minDistance(x, minDistance){
  return x >= minDistance? x: x+minDistance 
}

const Stars = () => {
  const starGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const starPositions = [];
    for (let i = 0; i < 10000; i++) {
      let x = (Math.random() - 0.5) * 100;
      let y = (Math.random() - 0.5) * 100;
      let z = (Math.random() - 0.5) * 100;
      x = minDistance(x,20)
      y = minDistance(y,20)
      z = minDistance(z,20)
      starPositions.push(x, y, z);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    return geometry;
  }, []);

  const starMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true
    });
  }, []);

  return (
    <points geometry={starGeometry} material={starMaterial} />
  );
};

export default Stars;