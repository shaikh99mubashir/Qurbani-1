import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './QuantitySelector.css';

const QuantitySelector = ({ value, onChange, min = 1, disabled = false }) => {
  return (
    <div className="qty-selector">
      <button
        className="qty-btn"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min || disabled}
        type="button"
      >
        <FaMinus />
      </button>
      <input
        type="number"
        min={min}
        value={value}
        onChange={e => onChange(Math.max(min, Number(e.target.value)))}
        className="cart-qty-input"
        disabled={disabled}
      />
      <button
        className="qty-btn"
        onClick={() => onChange(value + 1)}
        disabled={disabled}
        type="button"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantitySelector; 