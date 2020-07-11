import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import Controls from './Controls';
import { useSpring, a } from 'react-spring/three';

import './App.css';

function Spinner() {
  const spinningCube = useRef();

  useFrame(() => {});
  const [expand, setExpand] = useState(false);
  const props = useSpring({ scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1] });

  return (
    <a.mesh
      ref={spinningCube}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      position={[0, 1, 0]}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshNormalMaterial attach="material" color={'#4FFF9C'} />
    </a.mesh>
  );
}

function App() {
  return (
    <div className="App">
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[4, 10, 3]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Controls />
        <Spinner />
      </Canvas>
    </div>
  );
}

export default App;
