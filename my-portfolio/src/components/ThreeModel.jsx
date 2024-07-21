import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/assets/desktop_pc/scene.gltf');

  return (
    <primitive object={scene} scale={[0.35, 0.35, 0.35]} />
  );
};

const ThreeModel = () => {
  return (
    <Canvas
      style={{ height: '800px', width: '100%' }} // Adjust size for performance
      camera={{ position: [5, 2, 5], fov: 60 }} // Adjust camera settings
      performance={{ minQuality: 'high', maxQuality: 'medium' }} // Performance settings
    >
      <ambientLight intensity={0.5} />
      {/* Consider reducing or removing spotLight if not needed */}
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      <Model />
      <OrbitControls enableZoom={false} /> {/* Disable zoom if not needed */}
    </Canvas>
  );
};

export default ThreeModel;
