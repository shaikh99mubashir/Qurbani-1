import React from "react";
import "./SubcategorySkeletonRow.css";

const SubcategorySkeletonRow = ({ count = 6 }) => {
  const placeholders = Array.from({ length: count });
  return (
    <div className="subcat-skeleton-row">
      {placeholders.map((_, i) => (
        <div className="subcat-skeleton-item" key={i}>
          <div className="subcat-skeleton-avatar">
            <div className="skeleton-circle" />
          </div>
          <div className="subcat-skeleton-text" />
        </div>
      ))}
    </div>
  );
};

export default SubcategorySkeletonRow; 