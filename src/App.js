import React, { useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import Controls from './Controls';
import Spinner from './Spinner';
import SpinnerFast from './SpinnerFast';
import './App.css';

const Selector = () => {
  const [selector, setSelector] = useState('Spinner');
  useEffect(() => {
    function setupKeyLogger() {
      document.onkeydown = function (e) {
        console.log(e);
        if (e.keyCode === 65) {
          setSelector('spinnerFast');
        }
      };
    }
    setupKeyLogger();
  });
  if (selector === 'Spinner') {
    return (
      <>
        <Spinner />
      </>
    );
  } else if (selector === 'spinnerFast') {
    return (
      <>
        <SpinnerFast />
      </>
    );
  }
};

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
        <Selector />
      </Canvas>
    </div>
  );
}

export default App;
