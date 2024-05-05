import React, { useState } from "react";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import "./CustomDropDown.css";

const CustomDropDown = ({ value, options, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown-container">
      <div className="selector-wrapper">
        <select value={value} onChange={onChange} className="dropdown-input">
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="dropdown_options"
            >
              {option.label}
            </option>
          ))}
        </select>

        <div className="icons-wrapper">
          <div className="separator"> | </div>
          <span className="dropdown-icon" onClick={toggleDropdown}>
            {" "}
            <ArrowDropDownSharpIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomDropDown;
