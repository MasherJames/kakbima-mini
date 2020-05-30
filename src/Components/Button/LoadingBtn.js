import React from "react";
import "./index.css";

const LoadingButton = () => {
  return (
    <div className="btn-container">
      <button className="btn" type="submit">
        <div className="loader"></div>
      </button>
    </div>
  );
};

export default LoadingButton;
