import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import Controls from './Controls';

import './App.css';

function Spinner() {
  const spinningCube = useRef(null);

  useFrame(() => {});
  return (
    <mesh ref={spinningCube} position={[0, 0, 0.5]}>
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
