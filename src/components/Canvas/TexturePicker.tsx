import { useState } from "react";
import { useSnapshot } from "valtio";
//@ts-ignore
import state from "../../store/index.js";
interface ITexturePicker {
  options: Array<object>;
}

const TexturePicker = ({ options }: ITexturePicker) => {
  //@ts-ignore
  const snap = useSnapshot(state);
  //@ts-ignore
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  //@ts-ignore
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
              //@ts-ignore
              key={option.id}
              onClick={() => handleOptionClick(option)}
            >
              {
                //@ts-ignore
                option.name
              }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TexturePicker;
