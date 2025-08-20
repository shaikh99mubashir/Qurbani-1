import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
} from "../redux/slices/cartSlice";
import Header from "../components/header";
import Footer from "../components/footer";
import "./CheckoutPage.css";
import { useCreateOrderMutation } from "../redux/services/orderSlice";
import sha256 from "crypto-js/sha256";
import PayFastForm from '../components/PayFastForm';
import { BASE_URL } from '../constants/api';
import FullScreenLoader from '../components/FullScreenLoader';

const SHIPPING_FEE = 350;
const MERCHANT_ID = "27067";
const SECURED_KEY = "Y1g7QcH6dqwOfnXL83ENW1pu";
const CURRENCY_CODE = "PKR";
const MERCHANT_NAME = "My Zabiha";
const PAYFAST_TOKEN_API = `${BASE_URL}/orders/payfast-token`;
const SUCCESS_URL = "/payment-success";
const FAILURE_URL = "/payment-failure";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const [shipping] = useState("delivery");
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    address: "",
    note: "",
    paymentMethod: "",
  });
  const [errors, setErrors] = useState({});
  const [payfastFields, setPayfastFields] = useState(null);

  const [createOrder, { isLoading, isSuccess, isError, error }] =
    useCreateOrderMutation();

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      errs.email = "Invalid email address.";
    if (!form.phone.trim()) errs.phone = "Phone is required.";
    else if (form.phone.replace(/\D/g, "").length < 7)
      errs.phone = "Phone number is too short.";
    if (shipping === "delivery") {
      if (!form.address.trim()) errs.address = "Address is required.";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    // Validate form
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Build order payload
    const orderPayload = {
      customer: {
        name: form.firstName,
        email: form.email,
        phone: form.phone,
        address: shipping === "delivery" ? form.address : "",
      },
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        qty: item.qty,
      })),
      shippingMethod: shipping,
      paymentMethod: form.paymentMethod || "cod",
      subtotal: cartTotal,
      shippingFee: shipping === "delivery" ? SHIPPING_FEE : 0,
      total: shipping === "delivery" ? cartTotal + SHIPPING_FEE : cartTotal,
    };
    console.log("orderPayload", orderPayload);
    try {
      // 1. Place order
      const orderResponse = await createOrder(orderPayload).unwrap();
      console.log("Order API response:", orderResponse);
      if ((form.paymentMethod || "cod") === "cod") {
        // COD: Redirect to success page with order details
        // Show instant overlay to indicate redirect
        setPayfastFields(prev => prev); // no-op to trigger rerender
        navigate(SUCCESS_URL, { state: { order: orderResponse } });
        return;
      }
      // ... rest of online payment flow ...
      const basketId = orderResponse.orderNumber;
      const txnAmt = orderResponse.orderTotalPrice;
      const tokenRes = await fetch(PAYFAST_TOKEN_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          MERCHANT_ID,
          SECURED_KEY,
          BASKET_ID: basketId,
          CURRENCY_CODE,
          TXNAMT: txnAmt,
        }),
      });
      const tokenData = await tokenRes.json();
      if (!tokenData.ACCESS_TOKEN) {
        alert("Failed to get payment token from PayFast.");
        return;
      }
      console.log("PayFast token API response:", tokenData);
      const signatureString = `${basketId}|${SECURED_KEY}|${MERCHANT_ID}`;
      const hash = sha256(signatureString).toString();
      // 4. Prepare PayFast form fields
      const fields = {
        MERCHANT_ID,
        MERCHANT_NAME,
        TOKEN: tokenData.ACCESS_TOKEN,
        PROCCODE: "00",
        TXNAMT: txnAmt,
        CURRENCY_CODE,
        CUSTOMER_MOBILE_NO: orderResponse.customerPhone || form.phone,
        CUSTOMER_EMAIL_ADDRESS: orderResponse.customerEmail || form.email,
        SIGNATURE: hash,
        VERSION: "MY_VER_1.0",
        TXNDESC: "Order Payment",
        SUCCESS_URL: window.location.origin + SUCCESS_URL,
        FAILURE_URL: window.location.origin + FAILURE_URL,
        BASKET_ID: basketId,
        ORDER_DATE: new Date().toISOString().slice(0, 10),
      };
      setPayfastFields(fields);
    } catch (err) {
      console.error("Payment processing error:", err);
      alert("Order ya payment process karte hue error aa gayi. Please try again.");
    }
  };

  const total = shipping === "delivery" ? cartTotal + SHIPPING_FEE : cartTotal;

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(clearCart());
  //     const timer = setTimeout(() => {
  //       navigate('/');
  //     }, 2000); // 2 seconds to show thank you
  //     return () => clearTimeout(timer);
  //   }
  // }, [isSuccess, dispatch, navigate]);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  return (
    <>
      <Header />
      <div className="checkout-page">
        <div className="container">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="checkout-cols">
              {/* Billing Details */}
              <div className="checkout-col billing-col">
                <h2 className="checkout-heading">Billing Details</h2>
                <div className="checkout-fields">
                  <div className="checkout-row">
                    <div className="checkout-field">
                      <label>First name *</label>
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleInput}
                        required
                        placeholder="First name"
                        disabled={isLoading || isSuccess}
                      />
                      {errors.firstName && (
                        <div className="checkout-error">{errors.firstName}</div>
                      )}
                    </div>
                  </div>
                  <div className="checkout-field">
                    <label>Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleInput}
                      required
                      placeholder="Email"
                      disabled={isLoading || isSuccess}
                    />
                    {errors.email && (
                      <div className="checkout-error">{errors.email}</div>
                    )}
                  </div>
                  <div className="checkout-field">
                    <label>Phone *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleInput}
                      required
                      placeholder="Phone"
                      disabled={isLoading || isSuccess}
                    />
                    {errors.phone && (
                      <div className="checkout-error">{errors.phone}</div>
                    )}
                  </div>
                  {shipping === "delivery" && (
                    <div className="checkout-field">
                      <label>Address *</label>
                      <textarea
                        name="address"
                        value={form.address}
                        onChange={handleInput}
                        required
                        placeholder="Address"
                        rows={3}
                        style={{ resize: "vertical" }}
                        disabled={isLoading || isSuccess}
                      />
                      {errors.address && (
                        <div className="checkout-error">{errors.address}</div>
                      )}
                    </div>
                  )}
                  {shipping === "pickup" && (
                    <div className="checkout-field">
                      <label>Note</label>
                      <textarea
                        name="note"
                        value={form.note}
                        onChange={handleInput}
                        placeholder="Note (optional)"
                        rows={3}
                        style={{ resize: "vertical" }}
                        disabled={isLoading || isSuccess}
                      />
                    </div>
                  )}
                </div>
              </div>
              {/* Order Summary */}
              <div className="checkout-col summary-col">
                <h2 className="checkout-heading">Your Order</h2>
                <div className="order-summary-card">
                  <div className="order-summary-table">
                    <div className="order-summary-row order-summary-header">
                      <span>Product</span>
                      <span>Subtotal</span>
                    </div>
                    {cartItems.map((item) => (
                      <div className="order-summary-row" key={item.id}>
                        <span>
                          {item.name} × {item.qty}
                        </span>
                        <span>Rs {item.price * item.qty}</span>
                      </div>
                    ))}
                    <div className="order-summary-row">
                      <span>Subtotal</span>
                      <span className="order-summary-bold">Rs {cartTotal}</span>
                    </div>
                    <div className="order-summary-row">
                      <span>Shipping</span>
                      <span>
                        <label style={{ fontWeight: 400 }}>
                          {/* <input
                            type="radio"
                            name="shipping"
                            value="delivery"
                            checked={shipping === "delivery"}
                            onChange={handleShipping}
                            disabled={isLoading || isSuccess}
                          /> */}
                          Delivery Charges: Rs {SHIPPING_FEE}
                        </label>
                        {/* <br />
                        <label style={{ fontWeight: 400 }}>
                          <input
                            type="radio"
                            name="shipping"
                            value="pickup"
                            checked={shipping === "pickup"}
                            onChange={handleShipping}
                            disabled={isLoading || isSuccess}
                          />
                          Distribute
                        </label> */}
                      </span>
                    </div>
                    {/* Payment Method in order summary */}
                    <div className="order-summary-row">
                      <span>Payment</span>
                      <span>
                        <div className="checkout-payment-methods">
                          <label>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="cod"
                              checked={form.paymentMethod === "cod"}
                              onChange={handleInput}
                              required
                              disabled={isLoading || isSuccess}
                            />
                            Cash on Delivery
                          </label>
                          <label style={{ marginLeft: "18px" }}>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="online"
                              checked={form.paymentMethod === "online"}
                              onChange={handleInput}
                              required
                              disabled={isLoading || isSuccess}
                            />
                            Online Payment
                          </label>
                        </div>
                        {errors.paymentMethod && (
                          <div className="checkout-error">
                            {errors.paymentMethod}
                          </div>
                        )}
                      </span>
                    </div>
                    <div className="order-summary-row order-summary-total">
                      <span>Total</span>
                      <span className="order-summary-total-amount">
                        Rs {total}
                      </span>
                    </div>
                  </div>
                  <button
                    className="checkout-submit-btn"
                    type="submit"
                    disabled={isLoading || isSuccess}
                  >
                    {isLoading
                      ? "Placing Order..."
                      : isSuccess
                      ? "Order Placed"
                      : "Place Order"}
                  </button>
                  {isError && (
                    <div className="checkout-error" style={{ marginTop: 8 }}>
                      {error?.data?.message ||
                        "Failed to place order. Please try again."}
                    </div>
                  )}
                  {/* {isSuccess && (
                    <div className="checkout-thankyou">
                      Thank you for your order!
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </form>
          {(isLoading || isSuccess || payfastFields) && (
            <FullScreenLoader text={isLoading ? "Placing order..." : isSuccess ? "Order placed. Redirecting..." : "Redirecting to payment..."} />
          )}
          {/* PayFastForm ko yahan render karo jab fields ready ho */}
          {payfastFields && <PayFastForm fields={payfastFields} />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
