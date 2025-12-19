// Watch.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import WatchModel from './watchmodel'; // Импортируем новый компонент

const Watch = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 0, 5], fov: 50 }}>
      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />

      {/* Компонент с моделью */}
      <WatchModel />

      {/* Управление камерой */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </Canvas>
  );
};

export default Watch;
