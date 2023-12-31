import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";

const Ground = () => {
  const [roughness, normal] = useLoader(TextureLoader, [
    "textures/terrain_roughness.jpg",
    "textures/terrain_normal.jpg",
  ]);
  useEffect(() => {
    [normal, roughness].forEach((t) => {
      (t.wrapS = RepeatWrapping),
        (t.wrapT = RepeatWrapping),
        t.repeat.set(5, 5);

      normal.encoding = LinearEncoding;
    });
  }, [normal, roughness]);
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[100, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        reflectorOffset={0.2}
        normalMap={normal}
        roughnessMap={roughness}
        //@ts-ignore
        normalScale={[0.15, 0.15]}
      />
    </mesh>
  );
};

export default Ground;
