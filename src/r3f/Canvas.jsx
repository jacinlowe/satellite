import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Stars from './Stars';

const R3FCanvas = () => {
  return (
    <Canvas style={{ background: 'black' }}>      <Suspense fallback={null}>
      <Stars/>
      </Suspense>
    </Canvas>
  );
};

export default R3FCanvas;