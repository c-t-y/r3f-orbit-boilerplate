import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import Controls from './Controls';

import './App.css';

function Spinner() {
  const spinningCube = useRef(null);

  useFrame(() => {
    // spinningCube.current.rotation.x += 0.01;
  });
  return (
    <mesh ref={spinningCube}>
      <boxBufferGeometry attach="geometry" />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <Controls />
        <Spinner />
      </Canvas>
    </div>
  );
}

export default App;
