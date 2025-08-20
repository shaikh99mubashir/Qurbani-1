import React from "react";
import "./CategorySkeleton.css";

const CategorySkeleton = ({ count = 3 }) => {
  const placeholders = Array.from({ length: count });
  return (
    <div className="category-skeleton-grid">
      {placeholders.map((_, idx) => (
        <div className="category-skeleton-item" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
          <div className="category-skeleton-circle">
            <div className="skeleton-block" />
          </div>
          <div className="category-skeleton-text" />
        </div>
      ))}
    </div>
  );
};

export default CategorySkeleton; 