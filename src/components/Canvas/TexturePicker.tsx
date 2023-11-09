import React, { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../../store/index.js";
interface ITexturePicker {
  options: Array<object>;
}

const TexturePicker = ({ options }: ITexturePicker) => {
  const snap = useSnapshot(state);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    state.texture = option.name;
  };

  return (
    <div className="">
      <div
        className="dropdown-toggle font-bold"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        Select a texture
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              className="cursor-pointer font-bold"
              key={option.id}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TexturePicker;
