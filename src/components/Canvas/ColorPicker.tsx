//@ts-ignore
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
//@ts-ignore
import state from "../../store/index.js";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div>
      <SketchPicker
        color={snap.color}
        disableAlpha
        //@ts-ignore
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
