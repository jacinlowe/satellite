import * as THREE from 'three';
import { useRef,useMemo } from 'react';
import { Line, shaderMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


interface OrbitLineProps {
    radius: number;
    angle: number;
    lineColor: string;
    controlPoint?: THREE.Vector3;
  }

const OrbitLine: React.FC<OrbitLineProps> = ({radius=1.6, angle=18, lineColor='white', controlPoint}) => {
    const ref = useRef<THREE.Line>(null);
    
    // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
    const numPoints = 128;
    const points = useMemo(() => {
        const points = [];
        for (let i = 0; i < numPoints; i++) {
            const theta = (i / 64) * Math.PI * 2;

          points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }
        return points;
      }, [radius]);

      useFrame(() => {
        if (ref.current){
            ref.current.rotation.x = THREE.MathUtils.degToRad(angle);
            // ref.current.rotation.z = THREE.MathUtils.degToRad(angle);
        }
      });
      const defaultControlPoint = controlPoint || points[0];
      const ShaderMaterial = shaderMaterial({
        color: new THREE.Color(lineColor),
        controlPoint: defaultControlPoint,
        radius: radius,
        numPoints: numPoints
      },
      `
      varying vec3 vPosition;
      varying float vIndex;
      void main() {
        vPosition = position;
        vIndex = position.x; // Assuming x is the index for simplicity
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    `
      uniform vec3 color;
      varying float vIndex;
      varying float numPoints;
      void main() {
        float opacity = 1.0 - (vIndex / numPoints); // Assuming 128 points
        gl_FragColor = vec4(color, opacity);
      }
    `)
    
    return (
       <Line ref={ref} points={points} color={lineColor} linewidth={1}>
        <shaderMaterial attach="material" args={[ShaderMaterial]} transparent />
       </Line>
    );
 }

export default OrbitLine;

