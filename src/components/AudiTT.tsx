import { useGLTF, useTexture } from "@react-three/drei";
//@ts-ignore
import state from "../store/index.js";
import { useSnapshot } from "valtio";

export function AudiTT(props: any) {
  //@ts-ignore
  const { nodes, materials } = useGLTF("./models/audiTT.glb");

  const snap = useSnapshot(state);

  const metal = useTexture({
    map: "./texture/metal/Metal_006_basecolor.jpg",
    // displacementMap: "./texture/metal/Metal_006_basecolor.jpg",
    normalMap: "./texture/metal/Metal_006_normal.jpg",
    roughnessMap: "./texture/metal/Metal_006_roughness.jpg",
    aoMap: "./texture/metal/Metal_006_ambientOcclusion.jpg",
  });
  const plastic = useTexture({
    map: "./texture/plastic/Plastic_Rough_001_basecolor.jpg",
    // displacementMap: "./texture/lava/Lava_001_DISP.png",
    normalMap: "./texture/plastic/Plastic_Rough_001_normal.jpg",
    roughnessMap: "./texture/plastic/Plastic_Rough_001_roughness.jpg",
    aoMap: "./texture/plastic/Plastic_Rough_001_ambientOcclusion.jpg",
  });
  const glass = useTexture({
    map: "./texture/glass/Glass_Frosted_001_basecolor.jpg",
    // displacementMap: "./texture/lava/Lava_001_DISP.png",
    normalMap: "./texture/glass/Glass_Frosted_001_normal.jpg",
    roughnessMap: "./texture/glass/Glass_Frosted_001_roughness.jpg",
    aoMap: "./texture/glass/Glass_Frosted_001_ambientOcclusion.jpg",
  });
  const metalScrathed = useTexture({
    map: "./texture/metalScrached/Metal_scratched_009_basecolor.jpg",
    // displacementMap: "./texture/lava/Lava_001_DISP.png",
    normalMap: "./texture/metalScrached/Metal_scratched_009_normal.jpg",
    roughnessMap: "./texture/metalScrached/Metal_scratched_009_roughness.jpg",
    aoMap: "./texture/metalScrached/Metal_scratched_009_ambientOcclusion.jpg",
  });

  let texture = plastic;
  switch (snap.texture) {
    case "metal":
      texture = metal;
      break;
    case "Metal Scrached":
      texture = metalScrathed;
      break;
    case "glass":
      texture = glass;
      break;
    case "plastic":
      texture = plastic;
      break;
  }

  // const logo = useTexture(snap.logo);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.car.geometry}>
        <meshStandardMaterial {...texture} color={snap.color} />
      </mesh>
      <mesh geometry={nodes.logo.geometry} material={materials.Material} />
      <mesh geometry={nodes.spl.geometry} rotation={[0, 0, -Math.PI / 2]}>
        <meshStandardMaterial {...texture} color={snap.color} />
      </mesh>
      <mesh
        geometry={nodes.tube.geometry}
        material={materials["Material.017"]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh geometry={nodes.cap.geometry}>
        <meshStandardMaterial {...texture} color={snap.color} />
      </mesh>
      <mesh
        geometry={nodes.grill.geometry}
        material={materials.Material}
        rotation={[0, 0, -Math.PI / 2]}
      ></mesh>
      <mesh geometry={nodes.pl.geometry} rotation={[0, 0, -Math.PI / 2]}>
        <meshStandardMaterial {...texture} color={snap.color} />
      </mesh>
      <mesh geometry={nodes.door.geometry}>
        <meshStandardMaterial {...texture} color={snap.color} />
      </mesh>
      <mesh geometry={nodes.mbv.geometry} rotation={[0, 0, -Math.PI / 2]}>
        <meshStandardMaterial {...texture} color={snap.color} />
      </mesh>
      <mesh geometry={nodes.back_cup.geometry}>
        <meshStandardMaterial {...texture} color={snap.color} />
      </mesh>
      <mesh geometry={nodes.lamp.geometry}>
        <meshStandardMaterial {...glass} transparent opacity={0.5} />
      </mesh>
      <mesh
        geometry={nodes.grill2.geometry}
        material={materials["Material.006"]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.grill3.geometry}
        material={materials["Material.005"]}
      />
      <mesh geometry={nodes.chrome.geometry} material={materials.Material} />
      <mesh
        geometry={nodes.mask.geometry}
        material={materials["Material.003"]}
      />
      <mesh geometry={nodes.b_lamp.geometry}>
        <meshStandardMaterial {...glass} transparent opacity={0.5} />
      </mesh>
      <mesh
        geometry={nodes.air.geometry}
        material={materials["Material.001"]}
        position={[0, 0, -0.035]}
      />
      <mesh geometry={nodes.win.geometry}>
        <meshStandardMaterial {...glass} transparent opacity={0.5} />
      </mesh>
      <mesh
        geometry={nodes.rrr.geometry}
        material={materials["Material.004"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrr1.geometry}
        material={materials["Material.028"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrr2.geometry}
        material={materials["Material.031"]}
        position={[-1.3, 0.364, 0.956]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.lamp2.geometry}
        material={materials["Material.009"]}
      />
      <mesh
        geometry={nodes.lamp3.geometry}
        material={materials["Material.011"]}
      />
      <mesh geometry={nodes.b_cap.geometry}>
        <meshStandardMaterial {...texture} color={snap.color} />
      </mesh>
      <mesh
        geometry={nodes.int.geometry}
        material={materials["Material.013"]}
      />
      <mesh
        geometry={nodes.dno.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        geometry={nodes.win1.geometry}
        material={materials["Material.016"]}
      />
      <mesh
        geometry={nodes.b_lamp1.geometry}
        material={materials["Material.018"]}
      />
      <mesh
        geometry={nodes.b_lamp2.geometry}
        material={materials["Material.019"]}
      />
      <mesh
        geometry={nodes.b_lamp3.geometry}
        material={materials["Material.020"]}
      />
      <mesh
        geometry={nodes.b_lamp4.geometry}
        material={materials["Material.011"]}
      />
      <mesh
        geometry={nodes.int2.geometry}
        material={materials["Material.013"]}
      />
      <mesh geometry={nodes.int3.geometry} material={materials.Material} />
      <mesh geometry={nodes.int4.geometry} material={nodes.int4.material} />
      <mesh geometry={nodes.int8.geometry} material={nodes.int8.material} />
      <mesh geometry={nodes.int5.geometry} material={nodes.int5.material} />
      <mesh
        geometry={nodes.int7.geometry}
        material={materials["Material.006"]}
      />
      <mesh
        geometry={nodes.int6.geometry}
        material={materials["Material.014"]}
      />
      <mesh
        geometry={nodes.int9.geometry}
        material={materials["Material.014"]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <group position={[-1.3, 0.364, 0.956]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.rrr2005.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          geometry={nodes.rrr2005_1.geometry}
          material={materials["Material.028"]}
        />
      </group>
      <mesh
        geometry={nodes.rrr001.geometry}
        material={materials["Material.035"]}
        position={[2.687, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrr1001.geometry}
        material={materials["Material.034"]}
        position={[2.687, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrr2001.geometry}
        material={materials["Material.033"]}
        position={[1.387, 0.364, 0.956]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group position={[1.387, 0.364, 0.956]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.rrr2006.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          geometry={nodes.rrr2006_1.geometry}
          material={materials["Material.034"]}
        />
      </group>
      <mesh
        geometry={nodes.int10.geometry}
        material={nodes.int10.material}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.mbv1.geometry}
        material={materials["Material.008"]}
      />
    </group>
  );
}

useGLTF.preload("./models/audiTT.glb");
