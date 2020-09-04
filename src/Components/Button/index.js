import React from "react";
import "./index.css";

const defaultFunc = () => {
  console.log("Something fucked up !!!");
  return;
};

const Button = ({ type, text, click = defaultFunc, disabled = false }) => {
  // handle onclick if passed
  const handleClick = (e) => {
    if (type === "button") {
      click();
    }
  };

  return (
    <button
      className="btn"
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
