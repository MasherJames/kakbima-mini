import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "./index.css";

const Loader = () => {
  return Array(5)
    .fill()
    .map((item, index) => (
      <div className="row" key={index}>
        <SkeletonTheme color="#fff" highlightColor="#000000de">
          <p>
            <Skeleton height={60} />
          </p>
        </SkeletonTheme>
      </div>
    ));
};

export default Loader;
