import React from "react";
import { handleFocus, handleBlur } from "../../Utils";
import Select from "react-select";
import "./index.css";

const InputField = ({
  type,
  size,
  name,
  labelText,
  value,
  onChange,
  select = false,
}) => {
  return (
    <div
      className={`input-container ${
        size === "full" ? "full-input-container" : "half-input-container"
      } ${select ? "select-input" : ""}`}
    >
      {select ? (
        <Select
          placeholder="Select benefit ..."
          name={name}
          isMulti
          value={value}
          onChange={onChange}
          options={[
            { label: "Third Party", isClaimed: false, value: 1 },
            { label: "Another Party", isClaimed: false, value: 2 },
          ]}
        />
      ) : (
        <>
          {" "}
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
        </>
      )}
    </div>
  );
};

export default InputField;
