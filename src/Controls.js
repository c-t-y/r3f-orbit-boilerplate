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
      autoRotate
      autoRotateSpeed={10}
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      enableDamping={true}
      enableZoom={false}
      minDistance={3}
      rotateSpeed={0.5}
      maxDistance={5}
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  );
};

export default Controls;
