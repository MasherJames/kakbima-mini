import React from "react";
import { handleFocus, handleBlur } from "../../Utils";

import "./index.css";

const InputField = ({ type, size, name, labelText, value, onChange }) => {
  return (
    <div
      className={`input-container ${
        size === "full" ? "full-input-container" : "half-input-container"
      }`}
    >
      <label className="input-labels" htmlFor={name}>
        {labelText}
      </label>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        onFocus={(e) => {
          handleFocus(e);
        }}
        onBlur={(e) => {
          handleBlur(e);
        }}
      />
    </div>
  );
};

export default InputField;
