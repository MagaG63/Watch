import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const Watch = () => {
  // Корпус часов (цилиндр)
  const caseGeometry = new THREE.CylinderGeometry(1, 1, 0.3, 32);
  const caseMaterial = new THREE.MeshStandardMaterial({ color: 'silver' });

  // Стекло (плоскость)
  const glassGeometry = new THREE.CircleGeometry(0.9, 32);
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: 'lightblue',
    transparent: true,
    opacity: 0.5,
  });

  // Циферблат (плоскость)
  const dialGeometry = new THREE.CircleGeometry(0.8, 32);
  const dialMaterial = new THREE.MeshStandardMaterial({ color: 'white' });

  // Стрелки (конусы)
  const hourHandGeometry = new THREE.ConeGeometry(0.05, 0.4, 32);
  const hourHandMaterial = new THREE.MeshStandardMaterial({ color: 'black' });

  const minuteHandGeometry = new THREE.ConeGeometry(0.03, 0.6, 32);
  const minuteHandMaterial = new THREE.MeshStandardMaterial({ color: 'black' });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* Корпус */}
      <mesh geometry={caseGeometry} material={caseMaterial} position={[0, 0, 0]} />
      {/* Стекло */}
      <mesh geometry={glassGeometry} material={glassMaterial} position={[0, 0, 0.15]} />
      {/* Циферблат */}
      <mesh geometry={dialGeometry} material={dialMaterial} position={[0, 0, 0.16]} />
      {/* Стрелки */}
      <mesh geometry={hourHandGeometry} material={hourHandMaterial} position={[0, 0, 0.17]} rotation={[0, 0, Math.PI / 6]} />
      <mesh geometry={minuteHandGeometry} material={minuteHandMaterial} position={[0, 0, 0.17]} rotation={[0, 0, Math.PI / 2]} />
      <OrbitControls />
    </Canvas>
  );
};

export default Watch;
