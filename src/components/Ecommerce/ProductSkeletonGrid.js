import React from "react";
import "./ProductSkeletonGrid.css";

const ProductSkeletonGrid = ({ count = 8 }) => {
  const placeholders = Array.from({ length: count });
  return (
    <div className="product-skeleton-grid">
      {placeholders.map((_, i) => (
        <div className="product-skeleton-card" key={i}>
          <div className="product-skeleton-img" />
          <div className="product-skeleton-content">
            <div className="product-skeleton-line full" />
            <div className="product-skeleton-line medium" />
            <div className="product-skeleton-line short" />
          </div>
          <div className="product-skeleton-actions">
            <div className="product-skeleton-btn" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeletonGrid; 