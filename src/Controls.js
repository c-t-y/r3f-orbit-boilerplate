import React, { useRef } from 'react';
import { useFrame, extend, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      enableDamping={true}
      enableZoom={false}
      minDistance={3}
      rotateSpeed={0.2}
      maxDistance={5}
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  );
};

export default Controls;
