import React from "react";
import "./index.css";

const defaultFunc = () => {
  console.log("Something fucked up !!!");
  return;
};

const Button = ({ type, text, click = defaultFunc }) => {
  // handle onclick if passed
  const handleClick = (e) => {
    if (type === "button") {
      click();
    }
  };

  return (
    <div className="btn-container">
      <button className="btn" type={type} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
