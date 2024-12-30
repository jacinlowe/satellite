import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import SolarSystem from './SolarSystem';
import Skybox from './Skybox';

const R3FCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <Skybox />
        <SolarSystem />
      </Suspense>
      <OrbitControls minDistance={2} maxDistance={50} />
      <Stats />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  );
};

export default R3FCanvas;