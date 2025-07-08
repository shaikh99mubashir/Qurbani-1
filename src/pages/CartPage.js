import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
  updateQty,
  removeFromCart,
} from "../redux/slices/cartSlice";
import QuantitySelector from "../components/QuantitySelector";
import Header from "../components/header";
import Footer from "../components/footer";
import "./CartPage.css";

const CartPage = () => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length === 0) {
      navigate("/");
    }
  }, [items, navigate]);

  const handleQtyChange = (id, qty) => {
    if (qty > 0) dispatch(updateQty({ id, qty }));
  };

  const handleGoToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Header />
      <div className="cart-page">
        <div className="cart-card">
          <h1 className="cart-title">Your Cart</h1>
          {items.length === 0 ? (
            <div className="cart-empty">Your cart is empty.</div>
          ) : (
            <>
              <div className="cart-table-wrap">
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="cart-product-cell">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-product-img"
                          />
                          <span>{item.name}</span>
                        </td>
                        <td>Rs{item.price}</td>
                        <td>
                          <QuantitySelector
                            value={item.qty}
                            onChange={(qty) => handleQtyChange(item.id, qty)}
                            min={1}
                          />
                        </td>
                        <td>Rs{item.price * item.qty}</td>
                        <td>
                          <button
                            className="cart-remove-btn"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="cart-total-row">
                  <span>Total:</span>
                  <span className="cart-total">Rs{total}</span>
                </div>
              </div>
              <div className="cart-checkout-row">
                <button
                  className="cart-checkout-btn"
                  style={{ marginTop: 12 }}
                  onClick={handleGoToCheckout}
                  disabled={items.length === 0}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
