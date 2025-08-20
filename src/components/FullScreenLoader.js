import React from "react";
import "./FullScreenLoader.css";

const FullScreenLoader = ({ text = "Redirecting..." }) => {
  return (
    <div className="fs-loader-overlay" role="status" aria-live="polite">
      <div className="fs-loader-box">
        <div className="fs-spinner" />
        <div className="fs-loader-text">{text}</div>
      </div>
    </div>
  );
};

export default FullScreenLoader; 