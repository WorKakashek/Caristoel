import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { Suspense } from "react";
import { AudiTT } from "../AudiTT";

const CarModel = () => {
  return (
    <>
      <PresentationControls
        speed={1}
        global
        zoom={2}
        polar={[0.3, Math.PI / 1.5]}
      >
        <Stage environment={"city"} intensity={0.6} castShadow={false}>
          <mesh>
            <Suspense fallback={null}>
              <AudiTT />
            </Suspense>
          </mesh>
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={0}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
            mirror={0}
          />
        </mesh>
      </PresentationControls>
    </>
  );
};

export default CarModel;
