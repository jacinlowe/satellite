const Sun = () => {
  return (
    <mesh position={[1000, 0, 0]}>
      <sphereGeometry args={[100, 128, 128]} />
      <meshStandardMaterial emissive="yellow" emissiveIntensity={10} />
      <pointLight color="white" intensity={10000000}  />
    </mesh>
  );
};

export default Sun;