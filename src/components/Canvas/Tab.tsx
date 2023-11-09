import React from "react";
import { useSnapshot } from "valtio";
import state from "../../store/index.js";

interface ITab {
  customStyle?: any;
  name?: String;
  handleClick?: any;
}

const Tab = ({ customStyle, name, handleClick }: ITab) => {
  const snap = useSnapshot(state);
  switch (snap.activeTab) {
    case "color":
  }
  return <div onClick={handleClick}>{name}</div>;
};

export default Tab;
