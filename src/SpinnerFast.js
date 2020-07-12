import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

function SpinnerFast() {
  const spinningCube = useRef();

  useFrame(() => {});
  const [expand, setExpand] = useState(false);
  const props = useSpring({ scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1] });

  return (
    <a.mesh
      ref={spinningCube}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      position={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" color={'#4FFF9C'} />
    </a.mesh>
  );
}

export default SpinnerFast;
