import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PaymentFailure = () => {
  const query = useQuery();
  const errMsg = query.get('err_msg') || 'Payment failed.';
  const errCode = query.get('err_code');
  const transactionId = query.get('transaction_id');
  const basketId = query.get('basket_id');
  const amount = query.get('transaction_amount');
  const currency = query.get('transaction_currency');

  return (
    <div style={{textAlign:'center',marginTop:100}}>
      <h2 style={{color:'red'}}>Payment Failed</h2>
      <p>{decodeURIComponent(errMsg)}</p>
      {errCode && <p><b>Error Code:</b> {errCode}</p>}
      {transactionId && <p><b>Transaction ID:</b> {transactionId}</p>}
      {basketId && <p><b>Order/Basket ID:</b> {basketId}</p>}
      {amount && <p><b>Amount:</b> {amount} {currency}</p>}
      <p style={{marginTop:30}}><a href="/">Back to Home</a></p>
    </div>
  );
};

export default PaymentFailure; 