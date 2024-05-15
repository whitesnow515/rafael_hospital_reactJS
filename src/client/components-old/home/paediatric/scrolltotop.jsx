/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ProgressCircle = () => {
  const [strokeDasharray, setStrokeDasharray] = useState("307.919px");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        300;
      const newStrokeDasharray = `${scrollPercentage}%, 307.919px`;
      setStrokeDasharray(newStrokeDasharray);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="progress-wrap active-progress" onClick={handleClick}>
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{ strokeDasharray }}
        />
      </svg>
    </div>
  );
};

export default ProgressCircle;
