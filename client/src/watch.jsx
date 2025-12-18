import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useEffect } from 'react';

const Watch = () => {
  // Корпус часов
  const caseGeometry = new THREE.CylinderGeometry(1, 1.05, 0.2, 64);
  const caseMaterial = new THREE.MeshStandardMaterial({
    color: '#a0a0a0',
    metalness: 0.8,
    roughness: 0.2,
  });

  // Стекло (прозрачный купол)
  const glassGeometry = new THREE.SphereGeometry(0.95, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2);
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#e0f7fa',
    transparent: true,
    opacity: 0.3,
    transmission: 0.9,
    thickness: 0.1,
    roughness: 0.1,
  });

  // Циферблат с программно нарисованными цифрами
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  context.fillStyle = '#f5f5f5';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = '48px Arial';
  context.fillStyle = '#000000';
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  for (let i = 1; i <= 12; i++) {
    const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const x = canvas.width / 2 + Math.cos(angle) * canvas.width * 0.3;
    const y = canvas.height / 2 + Math.sin(angle) * canvas.height * 0.3;
    context.fillText(i.toString(), x, y);
  }

  const dialTexture = new THREE.CanvasTexture(canvas);

  // Стрелки
  const hourHandGeometry = new THREE.BoxGeometry(0.03, 0.3, 0.01);
  const hourHandMaterial = new THREE.MeshStandardMaterial({ color: '#1a1a1a' });

  const minuteHandGeometry = new THREE.BoxGeometry(0.02, 0.45, 0.01);
  const minuteHandMaterial = new THREE.MeshStandardMaterial({ color: '#1a1a1a' });

  // Ремешок
  const strapGeometry = new THREE.BoxGeometry(0.2, 0.8, 0.05);
  const strapMaterial = new THREE.MeshStandardMaterial({
    color: '#8d6e63',
    roughness: 0.7,
  });

  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />

      {/* Модель часов */}
      <group>
        <mesh geometry={caseGeometry} material={caseMaterial} position={[0, 0, 0]} />
        <mesh geometry={glassGeometry} material={glassMaterial} position={[0, 0, 0.1]} />
        <mesh
          geometry={new THREE.CircleGeometry(0.85, 64)}
          material={new THREE.MeshStandardMaterial({ map: dialTexture })}
          position={[0, 0, 0.11]}
        />
        <mesh geometry={hourHandGeometry} material={hourHandMaterial} position={[0, 0, 0.12]} rotation={[0, 0, Math.PI / 6]} />
        <mesh geometry={minuteHandGeometry} material={minuteHandMaterial} position={[0, 0, 0.12]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={strapGeometry} material={strapMaterial} position={[-0.6, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={strapGeometry} material={strapMaterial} position={[0.6, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
      </group>

      {/* Управление камерой */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </Canvas>
  );
};

export default Watch;
