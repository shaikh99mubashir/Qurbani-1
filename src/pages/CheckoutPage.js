import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotal, clearCart } from '../redux/slices/cartSlice';
import Header from '../components/header';
import Footer from '../components/footer';
import './CheckoutPage.css';
import { useCreateOrderMutation } from '../redux/services/orderSlice';

const SHIPPING_FEE = 350;

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shipping, setShipping] = useState('delivery');
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    phone: '',
    address: '',
    note: '',
    paymentMethod: '',
  });
  const [errors, setErrors] = useState({});

  const [createOrder, { isLoading, isSuccess, isError, error }] = useCreateOrderMutation();

  const handleInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShipping = e => {
    setShipping(e.target.value);
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'First name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email address.';
    if (!form.phone.trim()) errs.phone = 'Phone is required.';
    else if (form.phone.replace(/\D/g, '').length < 7) errs.phone = 'Phone number is too short.';
    if (shipping === 'delivery') {
      if (!form.address.trim()) errs.address = 'Address is required.';
    }
    return errs;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Build order payload
      const orderPayload = {
        customer: {
          name: form.firstName,
          email: form.email,
          phone: form.phone,
          address: shipping === 'delivery' ? form.address : '',
        },
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          qty: item.qty,
        })),
        shippingMethod: shipping,
        paymentMethod: form.paymentMethod || 'cod',
        subtotal: cartTotal,
        shippingFee: shipping === 'delivery' ? SHIPPING_FEE : 0,
        total: shipping === 'delivery' ? cartTotal + SHIPPING_FEE : cartTotal,
      };
      console.log('orderPayload',orderPayload);
      try {
        const response = await createOrder(orderPayload).unwrap();
        console.log('Order API response:', response.orderNumber, response.orderTotalPrice);

        // PayFast token API call
        const tokenRes = await fetch('http://localhost:3050/v1/orders/payfast-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            MERCHANT_ID: '14833',
            SECURED_KEY: 'rPcy4T7GQkSCFsHBLdn26s',
            BASKET_ID: response.orderNumber,
            CURRENCY_CODE: 'PKR',
            TXNAMT: response.orderTotalPrice
          })
        });
        const tokenData = await tokenRes.json();
        console.log('PayFast token API response:', tokenData);

        // PayFast form submit karo
        const payfastFields = {
          MERCHANT_ID: '14833',
          MERCHANT_NAME: 'My Merchant',
          TOKEN: tokenData.ACCESS_TOKEN,
          PROCCODE: '00',
          TXNAMT: response.orderTotalPrice,
          CURRENCY_CODE: 'PKR',
          CUSTOMER_MOBILE_NO: response.customerPhone || form.phone,
          CUSTOMER_EMAIL_ADDRESS: response.customerEmail || form.email,
          SIGNATURE: 'RANDOMSTRINGVALUE',
          VERSION: 'MY_VER_1.0',
          TXNDESC: 'Order Payment',
          SUCCESS_URL: 'http://localhost:3000/payment-success',
          FAILURE_URL: 'http://localhost:3000/payment-failure',
          BASKET_ID: response.orderNumber,
          ORDER_DATE: new Date().toISOString().slice(0, 10),
        };

        const formEl = document.createElement('form');
        formEl.method = 'POST';
        formEl.action = 'https://ipguat.apps.net.pk/Ecommerce/api/Transaction/PostTransaction';
        formEl.target = '_blank';

        Object.entries(payfastFields).forEach(([k, v]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = k;
          input.value = v;
          formEl.appendChild(input);
        });

        document.body.appendChild(formEl);
        formEl.submit();
        document.body.removeChild(formEl);

      } catch (err) {
        console.log('err',err);
        // error handled by isError
      }
    }
  };

  const total = shipping === 'delivery' ? cartTotal + SHIPPING_FEE : cartTotal;

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
      navigate('/');
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
                      <input name="firstName" value={form.firstName} onChange={handleInput} required placeholder="First name" disabled={isLoading || isSuccess} />
                      {errors.firstName && <div className="checkout-error">{errors.firstName}</div>}
                    </div>
                  </div>
                  <div className="checkout-field">
                    <label>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleInput} required placeholder="Email" disabled={isLoading || isSuccess} />
                    {errors.email && <div className="checkout-error">{errors.email}</div>}
                  </div>
                  <div className="checkout-field">
                    <label>Phone *</label>
                    <input name="phone" value={form.phone} onChange={handleInput} required placeholder="Phone" disabled={isLoading || isSuccess} />
                    {errors.phone && <div className="checkout-error">{errors.phone}</div>}
                  </div>
                  {shipping === 'delivery' && (
                    <div className="checkout-field">
                      <label>Address *</label>
                      <textarea name="address" value={form.address} onChange={handleInput} required placeholder="Address" rows={3} style={{resize:'vertical'}} disabled={isLoading || isSuccess} />
                      {errors.address && <div className="checkout-error">{errors.address}</div>}
                    </div>
                  )}
                  {shipping === 'pickup' && (
                    <div className="checkout-field">
                      <label>Note</label>
                      <textarea name="note" value={form.note} onChange={handleInput} placeholder="Note (optional)" rows={3} style={{resize:'vertical'}} disabled={isLoading || isSuccess} />
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
                    {cartItems.map(item => (
                      <div className="order-summary-row" key={item.id}>
                        <span>{item.name} × {item.qty}</span>
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
                        <label style={{fontWeight:400}}>
                          <input type="radio" name="shipping" value="delivery" checked={shipping === 'delivery'} onChange={handleShipping} disabled={isLoading || isSuccess} />
                          Delivery Charges: Rs {SHIPPING_FEE}
                        </label>
                        <br />
                        <label style={{fontWeight:400}}>
                          <input type="radio" name="shipping" value="pickup" checked={shipping === 'pickup'} onChange={handleShipping} disabled={isLoading || isSuccess} />
                          Distribute
                        </label>
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
                              checked={form.paymentMethod === 'cod'}
                              onChange={handleInput}
                              required
                              disabled={isLoading || isSuccess}
                            />
                            Cash on Delivery
                          </label>
                          <label style={{marginLeft: '18px'}}>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="online"
                              checked={form.paymentMethod === 'online'}
                              onChange={handleInput}
                              required
                              disabled={isLoading || isSuccess}
                            />
                            Online Payment
                          </label>
                        </div>
                        {errors.paymentMethod && <div className="checkout-error">{errors.paymentMethod}</div>}
                      </span>
                    </div>
                    <div className="order-summary-row order-summary-total">
                      <span>Total</span>
                      <span className="order-summary-total-amount">Rs {total}</span>
                    </div>
                  </div>
                  <button className="checkout-submit-btn" type="submit" disabled={isLoading || isSuccess}>
                    {isLoading ? 'Placing Order...' : isSuccess ? 'Order Placed' : 'Place Order'}
                  </button>
                  {isError && (
                    <div className="checkout-error" style={{marginTop:8}}>
                      {error?.data?.message || 'Failed to place order. Please try again.'}
                    </div>
                  )}
                  {isSuccess && <div className="checkout-thankyou">Thank you for your order!</div>}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage; 