import React, { useState, useEffect } from 'react';

const generateRandomString = (length = 4) => {
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
};

const getAccessToken = async (merchantId, securedKey, basketId, transAmount, currencyCode) => {
  // Mock API call - replace with server-side API call in production
  const tokenApiUrl = 'https://ipg1.apps.net.pk/Ecommerce/api/Transaction/GetAccessToken';
  const urlPostParams = `MERCHANT_ID=${merchantId}&SECURED_KEY=${securedKey}&BASKET_ID=${basketId}&TXNAMT=${transAmount}&CURRENCY_CODE=${currencyCode}`;
  
  try {
    const response = await fetch(tokenApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlPostParams,
    });
    const payload = await response.json();
    console.log("payload",payload);
    
    return payload.ACCESS_TOKEN || '';
  } catch (error) {
    console.error('Error fetching token:', error);
    return 'mock-token-' + Math.random().toString(36).substring(2); // Fallback mock token
  }
};

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    currency_code: 'PKR',
    merchant_id: '19340',
    merchant_name: 'Payfast Merchant',
    token: '',
    basket_id: `ITEM-${generateRandomString(4)}`,
    trans_amount: '3',
    order_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
    success_url: 'http://localhost/redirection/success.php',
    failure_url: 'http://localhost/redirection/failure.php',
    checkout_url: 'http://localhost/redirection/checkout.php',
    customer_email: 'some.one@example.com',
    customer_mobile: '03000000090',
    signature: 'SOME-RANDOM-STRING',
    version: 'MERCHANT-CART-0.1',
    txn_desc: 'Item Purchased from Cart',
    proc_code: '00',
    tran_type: 'ECOMM_PURCHASE',
    store_id: '',
    recurring_txn: '',
  });

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getAccessToken(
        formData.merchant_id,
        'W7rrGkCH3zgFvCpw0wqVhjOGsm',
        formData.basket_id,
        formData.trans_amount,
        formData.currency_code
      );
      setFormData((prev) => ({ ...prev, token }));
    };
    fetchToken();
  }, [formData.basket_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">PayFast Payment Form</h2>
              <form
                id="PayFast_payment_form"
                name="PayFast-payment-form"
                method="POST"
                action="https://ipg1.apps.net.pk/Ecommerce/api/Transaction/PostTransaction"
              >
                <div className="mb-3">
                  <label className="form-label">CURRENCY_CODE</label>
                  <input
                    type="text"
                    name="CURRENCY_CODE"
                    value={formData.currency_code}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">MERCHANT_ID</label>
                  <input
                    type="text"
                    name="MERCHANT_ID"
                    value={formData.merchant_id}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">MERCHANT_NAME</label>
                  <input
                    type="text"
                    name="MERCHANT_NAME"
                    value={formData.merchant_name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">TOKEN</label>
                  <input
                    type="text"
                    name="TOKEN"
                    value={formData.token}
                    readOnly
                    className="form-control bg-light"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">BASKET_ID</label>
                  <input
                    type="text"
                    name="BASKET_ID"
                    value={formData.basket_id}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">TXNAMT</label>
                  <input
                    type="text"
                    name="TXNAMT"
                    value={formData.trans_amount}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">ORDER_DATE</label>
                  <input
                    type="text"
                    name="ORDER_DATE"
                    value={formData.order_date}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">SUCCESS_URL</label>
                  <input
                    type="text"
                    name="SUCCESS_URL"
                    value={formData.success_url}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">FAILURE_URL</label>
                  <input
                    type="text"
                    name="FAILURE_URL"
                    value={formData.failure_url}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">CHECKOUT_URL</label>
                  <input
                    type="text"
                    name="CHECKOUT_URL"
                    value={formData.checkout_url}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">CUSTOMER_EMAIL_ADDRESS</label>
                  <input
                    type="text"
                    name="CUSTOMER_EMAIL_ADDRESS"
                    value={formData.customer_email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">CUSTOMER_MOBILE_NO</label>
                  <input
                    type="text"
                    name="CUSTOMER_MOBILE_NO"
                    value={formData.customer_mobile}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">SIGNATURE</label>
                  <input
                    type="text"
                    name="SIGNATURE"
                    value={formData.signature}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">VERSION</label>
                  <input
                    type="text"
                    name="VERSION"
                    value={formData.version}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Item Description</label>
                  <input
                    type="text"
                    name="TXNDESC"
                    value={formData.txn_desc}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Proccode</label>
                  <input
                    type="text"
                    name="PROCCODE"
                    value={formData.proc_code}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Transaction Type</label>
                  <input
                    type="text"
                    name="TRAN_TYPE"
                    value={formData.tran_type}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Store ID/Terminal ID (optional)</label>
                  <input
                    type="text"
                    name="STORE_ID"
                    value={formData.store_id}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Create Recurring Token</label>
                  <select
                    name="RECURRING_TXN"
                    value={formData.recurring_txn}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Do NOT Create Token</option>
                    <option value="TRUE">YES, Create Token</option>
                  </select>
                </div>
                <input
                  type="hidden"
                  name="MERCHANT_USERAGENT"
                  value="Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"
                />
                <input type="hidden" name="ITEMS[0][SKU]" value="SAMPLE-SKU-01" />
                <input type="hidden" name="ITEMS[0][NAME]" value="An Awesome Dress" />
                <input type="hidden" name="ITEMS[0][PRICE]" value="150" />
                <input type="hidden" name="ITEMS[0][QTY]" value="2" />
                <input type="hidden" name="ITEMS[1][SKU]" value="SAMPLE-SKU-02" />
                <input type="hidden" name="ITEMS[1][NAME]" value="Ice Cream" />
                <input type="hidden" name="ITEMS[1][PRICE]" value="45" />
                <input type="hidden" name="ITEMS[1][QTY]" value="5" />
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;