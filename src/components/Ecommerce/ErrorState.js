import React from "react";
import { FaRedoAlt } from "react-icons/fa";
import "./ErrorState.css";

const ErrorState = ({ title = "Something went wrong", description = "Please try again.", onRetry }) => {
  return (
    <div className="error-state">
      <div className="error-state-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M11 7h2v6h-2V7zm0 8h2v2h-2v-2z"/>
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        </svg>
      </div>
      <div className="error-state-title">{title}</div>
      <div className="error-state-desc">{description}</div>
      {onRetry && (
        <div className="error-state-actions">
          <button className="error-btn" onClick={onRetry}>
            <FaRedoAlt /> Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorState; 