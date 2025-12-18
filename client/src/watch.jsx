import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Watch = () => {
  // Загрузка GLTF-модели
  const gltf = useLoader(GLTFLoader, 'watch8.gltf');

  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />

      {/* Отображение загруженной модели */}
      <primitive object={gltf.scene} scale={2.5} position={[0, 0, 0]} />

      {/* Управление камерой */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </Canvas>
  );
};

export default Watch;
