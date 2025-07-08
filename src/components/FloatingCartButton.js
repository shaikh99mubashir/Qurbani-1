import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../redux/slices/cartSlice';
import { FaShoppingCart } from 'react-icons/fa';
import './FloatingCartButton.css';

const FloatingCartButton = () => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/checkout') {
    return null; // Hide on checkout page
  }

  if (!items || items.length === 0) return null;

  return (
    <div className="floating-cart-btn" onClick={() => navigate('/cart')}>
      <FaShoppingCart size={28} />
      <span className="cart-badge">Rs.{total}</span>
    </div>
  );
};

export default FloatingCartButton; 