import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PaymentSuccess = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const query = useQuery();
  // Clear cart on mount
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  // If redirected with state (COD), show order details
  const order = location.state?.order;
  // Payment gateway (online) details from query
  const msg = query.get('err_msg') || 'Payment processed successfully!';
  const transactionId = query.get('transaction_id');
  const basketId = query.get('basket_id');
  const amount = query.get('transaction_amount');
  const currency = query.get('transaction_currency');

  return (
    <div style={{textAlign:'center',marginTop:100}}>
      <h2 style={{color:'green'}}>Payment Successful</h2>
      {/* COD order details */}
      {order && (
        <>
          <p>Thank you for your order!</p>
          <p><b>Order Number:</b> {order.orderNumber}</p>
          <p><b>Total Amount:</b> {order.orderTotalPrice} PKR</p>
          <p><b>Customer Name:</b> {order.customerName || order.customer?.name}</p>
          <p><b>Phone:</b> {order.customerPhone || order.customer?.phone}</p>
        </>
      )}
      {/* Online payment details */}
      {!order && (
        <>
          <p>{decodeURIComponent(msg)}</p>
          {transactionId && <p><b>Transaction ID:</b> {transactionId}</p>}
          {basketId && <p><b>Order/Basket ID:</b> {basketId}</p>}
          {amount && <p><b>Amount:</b> {amount} {currency}</p>}
        </>
      )}
      <p style={{marginTop:30}}><a href="/">Back to Home</a></p>
    </div>
  );
};

export default PaymentSuccess; 