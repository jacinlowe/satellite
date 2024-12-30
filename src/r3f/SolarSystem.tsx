import { useRef } from 'react';
import { useFrame, useThree} from '@react-three/fiber';
import { useControls } from 'leva';
import { gsap } from 'gsap';
import Earth from './Earth';
import Moon from './Moon';
import Satellite from './Satellite';
import OrbitLine from './OrbitLines';
import Sun from './Sun';

const SolarSystem = () => {
  const earthRotationSettings = useControls({ rotationSpeed: 1, stopRotation: false });
  const moonRotationSettings = useControls({ rotationSpeed: 1, stopRotation: false });
  const orbitLineSettings = useControls({ angle: 1, color: 'white' });
  const { camera } = useThree();

  const earthGroupRef = useRef<THREE.Group>(null);
  const earthRef = useRef<THREE.Group>(null);
  const moonRef = useRef<THREE.Group>(null);
  const satelliteRef = useRef<THREE.Group>(null);

  const handleClick = (ref) => {
    gsap.to(camera.position, {
      x: ref.current.position.x,
      y: ref.current.position.y,
      z: ref.current.position.z + 5,
      duration: 1.5,
      ease: 'power2.inOut'
    });
  };

  /* useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (earthGroupRef.current) {
      earthRef.current.position.x = Math.cos(elapsedTime * 0.1) * 10;
      earthRef.current.position.z = Math.sin(elapsedTime * 0.1) * 10;
    }

    if (moonRef.current) {
      moonRef.current.position.x = Math.cos(elapsedTime * 0.5) * 2;
      moonRef.current.position.z = Math.sin(elapsedTime * 0.5) * 2;
    }

    if (satelliteRef.current) {
      satelliteRef.current.position.x = Math.cos(elapsedTime * 0.7) * 3;
      satelliteRef.current.position.z = Math.sin(elapsedTime * 0.7) * 3;
    }
  });*/

  return (
    <group>
      <Sun/>
      <group ref={earthGroupRef}>
        <group ref={earthRef} onClick={() => handleClick(earthRef)}>
          <Earth stopRotation={earthRotationSettings.stopRotation} rotationSpeed={earthRotationSettings.rotationSpeed} />
        </group>
        <group ref={moonRef} onClick={() => handleClick(moonRef)}>
          <Moon stopRotation={moonRotationSettings.stopRotation} rotationSpeed={moonRotationSettings.rotationSpeed} />
        </group>
        <group ref={satelliteRef} onClick={() => handleClick(satelliteRef)}>
          <Satellite />
        </group>
        <OrbitLine angle={orbitLineSettings.angle} lineColor={orbitLineSettings.color} />
      </group>
    </group>
  );
};

export default SolarSystem;