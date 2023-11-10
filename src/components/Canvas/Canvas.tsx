import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CarModel from "./CarModel";
import { useSnapshot } from "valtio";
//@ts-ignore
import state from "../../store/index.js";
import ColorPicker from "./ColorPicker.js";
import TexturePicker from "./TexturePicker.js";
const CanvasMain = () => {
  const snap = useSnapshot(state);
  return (
    <div className="h-full relative">
      <div className="bg-red-600  rounded-md p-2 z-10 absolute left-3 top-3 flex ">
        <ColorPicker />
      </div>
      <div className=" rounded-md p-2 z-10 absolute flex right-3 top-3 bg-red-600 cursor-pointer">
        <TexturePicker options={snap.textures} />
      </div>
      <div className=" rounded-md p-2 z-10 absolute flex left-3 bottom-3 bg-red-600 ">
        {/* <FilePicker modelJSX={<AudiTT />} /> */}
      </div>
      <Suspense>
        <Canvas>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          <CarModel />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default CanvasMain;
