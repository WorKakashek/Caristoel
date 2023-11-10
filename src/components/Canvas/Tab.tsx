import { useSnapshot } from "valtio";
//@ts-ignore
import state from "../../store/index.js";

interface ITab {
  customStyle?: any;
  name?: String;
  handleClick?: any;
}

const Tab = ({ name, handleClick }: ITab) => {
  const snap = useSnapshot(state);
  switch (snap.activeTab) {
    case "color":
  }
  return <div onClick={handleClick}>{name}</div>;
};

export default Tab;
