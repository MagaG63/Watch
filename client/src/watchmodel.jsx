// WatchModel.jsx
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef } from 'react';

const WatchModel = () => {
  const gltf = useLoader(GLTFLoader, '/watch8.gltf');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      object={gltf.scene}
      ref={modelRef}
      scale={0.5}
      position={[0, 0, 0]}
    />
  );
};

export default WatchModel;
