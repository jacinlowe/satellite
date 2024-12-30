import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useControls } from 'leva';
import Earth from './Earth';
import Satellite from './Satellite';
import OrbitLine from './OrbitLines';
import Sun from './Sun';
import Skybox from './Skybox';

const R3FCanvas = () => {
  const earthRotationSettings = useControls({ rotationSpeed: 1, stopRotation: false });
  const orbitLineSettings = useControls({ angle: 1, color: 'white' });

  return (
    <Canvas>
      <Suspense fallback={null}>
        <Skybox />
        <ambientLight intensity={1} />
        <OrbitLine angle={orbitLineSettings.angle} lineColor={orbitLineSettings.color} />
        <group>
          <Earth stopRotation={earthRotationSettings.stopRotation} rotationSpeed={earthRotationSettings.rotationSpeed} />
          <Satellite />
          <Sun />
        </group>
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