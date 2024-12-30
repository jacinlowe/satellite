import { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';
import Earth from './Earth';
import Satellite from './Satellite';
import OrbitLine from './OrbitLines';

const R3FCanvas = () => {
  const earthRotationSettings = useControls({ rotationSpeed: 1, stopRotation: false });
  const orbitLineSettings = useControls({ angle: 1, color: 'white' });

  const Skybox = () => {
    const texture = useLoader(THREE.TextureLoader, '/milky_way.png');
    const skyboxRef = useRef();

    useFrame(({ camera }) => {
      if (skyboxRef.current) {
        skyboxRef.current.position.copy(camera.position);
      }
    });

    return (
      <mesh ref={skyboxRef}>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
    );
  };

  return (
    <Canvas>
      <Suspense fallback={null}>
        <Skybox />
        <ambientLight intensity={2} />
        <pointLight position={[-30, -10, -10]} decay={0} intensity={Math.PI * 2} />
        <OrbitLine angle={orbitLineSettings.angle} lineColor={orbitLineSettings.color} />
        <group>
          <Earth stopRotation={earthRotationSettings.stopRotation} rotationSpeed={earthRotationSettings.rotationSpeed} />
          <Satellite />
        </group>
      </Suspense>
      <OrbitControls minDistance={2} maxDistance={50} />
      <Stats />
    </Canvas>
  );
};

export default R3FCanvas;