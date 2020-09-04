import React from "react";
import "./index.css";

const LoadingButton = () => {
  return (
    <div className="btn-container">
      <button className="btn" type="submit">
        <div className="loader">Loading ...</div>
      </button>
    </div>
  );
};

export default LoadingButton;
