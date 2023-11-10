import { Decal, useCursor, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function LogoDecal(props: any) {
  const meshRef = useRef();
  const texture = useTexture("/logo.png");
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useCursor(hovered);
  useFrame(
    //@ts-ignore
    (state, delta) =>
      //@ts-ignore
      (meshRef.current.rotation.x = meshRef.current.rotation.y += delta)
  );
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={clicked ? 2.25 : 1.75}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <dodecahedronGeometry args={[0.75]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "goldenrod"} />
      <Decal position={[0, -0.2, 0.5]} scale={0.75} map={texture} />
    </mesh>
  );
}

export default LogoDecal;
