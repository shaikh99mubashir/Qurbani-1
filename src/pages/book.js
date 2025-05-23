// import React, { useState, useEffect } from "react";
// import "../App.css";
// import Header from "../components/header";
// import Footer from "../components/footer";
// import Tabs from "../components/tabs";
// import Tab1 from "../components/Tab_1";
// import Tab2 from "../components/Tab_2";
// import Tab3 from "../components/tab_3";

// const Book = () => {
//   const [formReset, setFormReset] = useState(false);
//   function set_FormReset(form_reset) {
//     setFormReset(form_reset);
//   }
//   useEffect(() => {
//     // console.log(formReset);
//   }, [formReset]);

//   const [prices, setPrices] = useState({});
//   function setprice(func_prices) {
//     setPrices(func_prices);
//   }
//   useEffect(() => {
//     // console.log(prices);
//   }, [prices]);

//   const [price, setPrice] = useState(0);
//   useEffect(() => {}, [price]);
//   function set_animal_price(animal_val) {

//     switch (animal_val) {
//       case "cow":
//         setPrice(prices.cow);
//         break;
//       case "goat":
//         setPrice(prices.goat);
//         break;
//       case "sheep":
//         setPrice(prices.sheep);
//         break;
//       default:
//         break;
//     }
//   }
//   function set_share_price(share_val) {
//     console.log("share",share_val)
//     console.log("localStorage.getItem",localStorage.getItem("currency"))
//     const currency = localStorage.getItem("currency");
//     let fixed_share_price = 0;

//     if (currency === "PKR") {
//       fixed_share_price = 32000;
//     } else if (currency === "USD") {
//       fixed_share_price = 114;
//     } else if (currency === "AED") {
//       fixed_share_price = 445;
//     } else {
//       fixed_share_price = 32000; // Default PKR
//     }

//     console.log("share", share_val);
//     console.log("currency from localStorage", currency);
//     console.log("fixed_share_price", fixed_share_price);
//     let share_price = fixed_share_price * share_val;
//     setPrice(share_price);
//     // let calc_price = (prices.cow / 7) * share_val;
//     // // let round_num = Math.ceil(calc_price);
//     // let round_num = Math.ceil(calc_price / 1000) * 1000;
//     // console.log("round_num",round_num)

//     // setPrice(round_num);
//     // let fixed_share_price = 32000 * share_val; // 1 share = 32000

//     // console.log("fixed_share_price", fixed_share_price);
//     // setPrice(fixed_share_price);
//   }

//   const [dcs, setdcs] = useState({});
//   function setDcs(func_prices) {
//     setdcs(func_prices);
//   }
//   useEffect(() => {
//     // console.log(dcs);
//   }, [dcs]);

//   const [dc, setdc] = useState(0);
//   useEffect(() => {
//     // console.log(dc);
//   }, [dc]);
//   function set_delivery_charges(country_val) {
//     switch (country_val) {
//       case "Pakistan":
//         setdc(dcs.local);

//         break;

//       default:
//         setdc(dcs.int);
//         break;
//     }
//   }

//   const [formResetTab2, setFormResetTab2] = useState(false);
//   function set_FormResetTab2(form_reset) {
//     setFormResetTab2(form_reset);
//   }
//   useEffect(() => {}, [formResetTab2]);

//   //**************  Form Data Collection ********************************

//   const [form_val_1, set_form_val_1] = useState({});
//   function set_form_tab1(val) {
//     set_form_val_1(val);
//   }
//   useEffect(() => {
//     // console.log(form_val_1);
//   }, [form_val_1]);

//   const [form_val_2, set_form_val_2] = useState({ data: 22 });
//   function set_form_tab2(val) {
//     set_form_val_2(val);
//     //  sendForm()
//   }

//   const [formData, setFormData] = useState({});
//   useEffect(() => {
//     setFormData({ ...form_val_1, ...form_val_2 });
//   }, [form_val_2, form_val_1]);

//   const [response, setresponse] = useState("");
//   const [loading, setLoading] = useState(false)
//   let sendForm = async (formData) => {
//     console.log('formDate',formData);
//     setLoading(true)
//     try {
//       const response = await fetch(
//         "https://myzabiha.com/web_app/public/api/book_now",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData), // Convert form data to JSON format
//         }
//       );
//       if (response.ok) {
//         // API call succeeded
//         const responseData = await response.json();
//         setresponse(responseData);
//         const orderId = responseData.order.id;
//         const url =
//           "https://myzabiha.com/web_app/public/api/upload-payment-proof";
//         const formData = new FormData();
//         formData.append("order_id", orderId);
//         formData.append("attachement", attachment);
//         try {
//           const response = await fetch(url, {
//             method: "POST",
//             body: formData,
//           });

//           if (response.ok) {
//             toggleBool2();
//             setLoading(false)
//           }

//           // Perform any additional actions based on API response
//         } catch (error) {
//           console.error("Error:", error);
//           setLoading(false)
//         }
//       } else {
//         // API call failed
//         // const errorData = await response.json();
//         // Handle error condition
//       }
//     } catch (error) {
//       alert("Your Order Cannot be proceed due to some error!");
//       setLoading(false)
//       // Handle fetch error
//     }
//     // console.log(formData);
//   };

//   const [showDelivery, setShowDelivery] = useState(false);
//   function toggleShowDelivery(data) {
//     if (data === "Delivery") {
//       setShowDelivery(true);
//     } else {
//       setShowDelivery(false);
//     }
//   }

//   const [myBool, setmyBool] = useState(1);
//   const [attachment, setAttachment] = useState(null);
//   console.log("attachment", attachment);
//   let component;
//   let activate = false;
//   let activate2 = false;
//   let activate3 = false;
//   function toggleBool() {
//     setmyBool(2);
//     window.scrollTo(0, 0);
//   }
//   function backBtn() {
//     setmyBool(1);
//     window.scrollTo(0, 0);
//   }
//   function toggleBool2() {
//     setmyBool(3);
//     window.scrollTo(0, 0);
//   }
//   if (myBool === 1) {
//     component = (
//       <Tab1
//         set_share_price={set_share_price}
//         price={price}
//         set_FormReset={set_FormReset}
//         formReset={formReset}
//         set_animal_price={set_animal_price}
//         form_val_1={form_val_1}
//         set_form_tab1={set_form_tab1}
//         toggleBool={toggleBool}
//         showDelivery={showDelivery}
//         toggleShowDelivery={toggleShowDelivery}
//       />
//     );
//     activate = true;
//   } else if (myBool === 2) {
//     component = (
//       <Tab2
//         dc={dc}
//         set_FormResetTab2={set_FormResetTab2}
//         formResetTab2={formResetTab2}
//         dcs={dcs}
//         set_delivery_charges={set_delivery_charges}
//         formData={formData}
//         sendForm={sendForm}
//         form_val_1={form_val_1}
//         set_form_tab2={set_form_tab2}
//         backBtn={backBtn}
//         toggleBool2={toggleBool2}
//         showDelivery={showDelivery}
//         uploadImage={setAttachment}
//         loading={loading}
//       />
//     );
//     activate2 = true;
//   } else if (myBool === 3) {
//     component = (
//       <Tab3
//         response={response}
//         dc={form_val_2.delivery_charges}
//         form_val_1={form_val_1}
//       />
//     );
//     activate3 = true;
//   }

//   return (
//     <>
//       <Header
//         backBtn={backBtn}
//         setDcs={setDcs}
//         set_FormReset={set_FormReset}
//         setprice={setprice}
//       />
//       <main className="book">
//         <div className="container breadcrumb">
//           <div className="container">
//             <p>
//               {/* <a href="#">Home</a> / Create Order */}
//               Home / Create Order
//             </p>
//           </div>
//         </div>
//         <div className="create_order">
//           <h3 style={{ textAlign: "center" }}>
//             Book your Qurbani using <span>simple steps.</span>
//           </h3>
//         </div>
//         <Tabs activate={[activate, activate2, activate3]} />
//         {component}
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Book;

import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Tabs from "../components/tabs";
import Tab1 from "../components/Tab_1";
import Tab2 from "../components/Tab_2";
import Tab3 from "../components/tab_3";
import axios from "axios";

const Book = () => {
  const [formReset, setFormReset] = useState(false);
  function set_FormReset(form_reset) {
    setFormReset(form_reset);
  }
  useEffect(() => {}, [formReset]);

  const [prices, setPrices] = useState({});
  function setprice(func_prices) {
    setPrices(func_prices);
  }
  useEffect(() => {}, [prices]);

  const [price, setPrice] = useState(0);
  console.log('price',price)
  useEffect(() => {}, [price]);
  function set_animal_price(animal_val) {
    switch (animal_val) {
      case "cow":
        setPrice(prices.cow);
        break;
      case "goat":
        setPrice(prices.goat);
        break;
      case "sheep":
        setPrice(prices.sheep);
        break;
      default:
        break;
    }
  }
  function set_share_price(share_val) {
    const currency = localStorage.getItem("currency");
    let fixed_share_price = 0;

    if (currency === "PKR") {
      fixed_share_price = 32000;
    } else if (currency === "USD") {
      fixed_share_price = 114;
    } else if (currency === "AED") {
      fixed_share_price = 445;
    } else {
      fixed_share_price = 32000; // Default PKR
    }

    let share_price = fixed_share_price * share_val;
    setPrice(share_price);
  }

  const [dcs, setdcs] = useState({});
  function setDcs(func_prices) {
    setdcs(func_prices);
  }
  useEffect(() => {}, [dcs]);

  const [dc, setdc] = useState(0);
  useEffect(() => {}, [dc]);
  function set_delivery_charges(country_val) {
    switch (country_val) {
      case "Pakistan":
        setdc(dcs.local);
        break;
      default:
        setdc(dcs.int);
        break;
    }
  }

  const [formResetTab2, setFormResetTab2] = useState(false);
  function set_FormResetTab2(form_reset) {
    setFormResetTab2(form_reset);
  }
  useEffect(() => {}, [formResetTab2]);

  const [form_val_1, set_form_val_1] = useState({});
  function set_form_tab1(val) {
    set_form_val_1(val);
  }
  useEffect(() => {}, [form_val_1]);

  const [form_val_2, set_form_val_2] = useState({ data: 22 });
  function set_form_tab2(val) {
    set_form_val_2(val);
  }

  const [formData, setFormData] = useState({});
  useEffect(() => {
    setFormData({ ...form_val_1, ...form_val_2 });
  }, [form_val_2, form_val_1]);

  const [response, setresponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to fetch access token from your backend API
  const getAccessToken = async (transAmount, basketId) => {
    const tokenApiUrl =
      "https://myzabiha.com/web_app/public/api/payfast/get-token";
    const payload = {
      merchant_id: "14833", // Replace with your actual merchant ID
      secured_key: "rPcy4T7GQkSCFsHBLdn26s", // Replace with your actual secured key
      trans_amount: transAmount,
      currency_code: "PKR",
      basket_id: basketId,
    };

    try {
      const response = await axios.post(tokenApiUrl, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("PayFast Token Response:", response.data);

      if (response.data && response.data.access_token) {
        return {
          access_token: response.data.access_token,
          basket_id: response.data.basket_id || basketId,
        };
      } else {
        throw new Error(response.data?.error || "Access token not found");
      }
    } catch (error) {
      console.error(
        "Failed to fetch PayFast token:",
        error.message,
        error.response?.data
      );
      return null;
    }
  };

  // Function to redirect to PayFast payment gateway
  const redirectToPayfast = (token, orderId, transAmount) => {
    console.log('transAmount',transAmount,orderId,token)
    let currency =  localStorage.getItem("currency")
    console.log("currency",currency);
    
    const payfastUrl =
      "https://ipguat.apps.net.pk/Ecommerce/api/Transaction/PostTransaction";

    // Create form dynamically
    const form = document.createElement("form");
    form.method = "POST";
    form.action = payfastUrl;
    console.log("transAmount",transAmount)
    // Define form fields based on PayFast requirements
    const fields = {
      MERCHANT_ID: "14833", // Replace with your actual merchant ID
      MERCHANT_NAME: "Payfast Merchant",
      TOKEN: token,
      PROCCODE: "00",
      TXNAMT: transAmount,
      CUSTOMER_MOBILE_NO: formData.phone || "03000000090",
      CUSTOMER_EMAIL_ADDRESS: formData.email || "someone234@gmai.com",
      SIGNATURE: "SOME-RANDOM-STRING", // Replace with actual signature logic
      VERSION: "MERCHANT-CART-0.1",
      TXNDESC: "Qurbani Order",
      // SUCCESS_URL: "https://myzabiha.com/success", // Backend endpoint to handle success
      // FAILURE_URL: "https://myzabiha.com/failure", // Replace with your failure URL
      SUCCESS_URL: "https://myzabiha.com/#/payment-success",
      FAILURE_URL: "https://myzabiha.com/#/payment-failure",
      BASKET_ID: orderId,
      ORDER_DATE: new Date().toISOString().split("T")[0], // Format: YYYY-MM-DD
      // CHECKOUT_URL: "https://myzabiha.com/checkout", // Replace with your checkout URL
      // CURRENCY_CODE: "PKR",
      CURRENCY_CODE: currency,
      TRAN_TYPE: "ECOMM_PURCHASE",
      STORE_ID: "", // Optional, replace if needed
      "ITEMS[0][SKU]": "QURBANI-001",
      "ITEMS[0][NAME]": "Qurbani Animal",
      "ITEMS[0][PRICE]": transAmount,
      "ITEMS[0][QTY]": "1",
    };

    // Append fields to form
    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    // Append form to document and submit
    document.body.appendChild(form);
    form.submit();
  };

  // Function to handle form submission and payment initiation
  let sendForm = async (formData) => {
    setLoading(true);
    try {
      // Step 1: Create order via your API
      const orderResponse = await fetch(
        "https://myzabiha.com/web_app/public/api/book_now",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!orderResponse.ok) {
        throw new Error("Order creation failed");
      }

      const responseData = await orderResponse.json();
      setresponse(responseData);
      const orderId = responseData.order.id;
      const transAmount = Number(price) + Number(dc); // Total amount including delivery charges
      console.log("price",price);
      console.log("dc",dc);
      
      const basketId = `ZIB-${orderId}-${Date.now()}`; // Unique basket ID

      // Step 2: Fetch access token
      const tokenData = await getAccessToken(transAmount, basketId);
      if (!tokenData) {
        throw new Error("Failed to fetch access token");
      }

      // Step 3: Redirect to PayFast
      redirectToPayfast(
        tokenData.access_token,
        tokenData.basket_id,
        transAmount
      );
    } catch (error) {
      console.error("Error processing order:", error);
      alert("An error occurred while processing your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const [showDelivery, setShowDelivery] = useState(false);
  function toggleShowDelivery(data) {
    if (data === "Delivery") {
      setShowDelivery(true);
    } else {
      setShowDelivery(false);
    }
  }

  const [myBool, setmyBool] = useState(1);
  function toggleBool() {
    setmyBool(2);
    window.scrollTo(0, 0);
  }
  function backBtn() {
    setmyBool(1);
    window.scrollTo(0, 0);
  }
  function toggleBool2() {
    setmyBool(3);
    window.scrollTo(0, 0);
  }

  let component;
  let activate = false;
  let activate2 = false;
  let activate3 = false;
  if (myBool === 1) {
    component = (
      <Tab1
        set_share_price={set_share_price}
        price={price}
        set_FormReset={set_FormReset}
        formReset={formReset}
        set_animal_price={set_animal_price}
        form_val_1={form_val_1}
        set_form_tab1={set_form_tab1}
        toggleBool={toggleBool}
        showDelivery={showDelivery}
        toggleShowDelivery={toggleShowDelivery}
      />
    );
    activate = true;
  } else if (myBool === 2) {
    component = (
      <Tab2
        dc={dc}
        set_FormResetTab2={set_FormResetTab2}
        formResetTab2={formResetTab2}
        dcs={dcs}
        set_delivery_charges={set_delivery_charges}
        formData={formData}
        sendForm={sendForm}
        form_val_1={form_val_1}
        set_form_tab2={set_form_tab2}
        backBtn={backBtn}
        toggleBool2={toggleBool2}
        showDelivery={showDelivery}
        loading={loading}
      />
    );
    activate2 = true;
  } else if (myBool === 3) {
    component = (
      <Tab3
        response={response}
        dc={form_val_2.delivery_charges}
        form_val_1={form_val_1}
      />
    );
    activate3 = true;
  }

  return (
    <>
      <Header
        backBtn={backBtn}
        setDcs={setDcs}
        set_FormReset={set_FormReset}
        setprice={setprice}
      />
      <main className="book">
        <div className="container breadcrumb">
          <div className="container">
            <p>Home / Create Order</p>
          </div>
        </div>
        <div className="create_order">
          <h3 style={{ textAlign: "center" }}>
            Book your Qurbani using <span>simple steps.</span>
          </h3>
        </div>
        <Tabs activate={[activate, activate2, activate3]} />
        {component}
      </main>
      <Footer />
    </>
  );
};

export default Book;

// import React, { useState, useEffect } from "react";
// import "../App.css";
// import Header from "../components/header";
// import Footer from "../components/footer";
// import Tabs from "../components/tabs";
// import Tab1 from "../components/Tab_1";
// import Tab2 from "../components/Tab_2";
// import Tab3 from "../components/tab_3";
// import axios from "axios";
// const Book = () => {
//   const [formReset, setFormReset] = useState(false);
//   function set_FormReset(form_reset) {
//     setFormReset(form_reset);
//   }
//   useEffect(() => {}, [formReset]);

//   const [prices, setPrices] = useState({});
//   function setprice(func_prices) {
//     setPrices(func_prices);
//   }
//   useEffect(() => {}, [prices]);

//   const [price, setPrice] = useState(0);
//   useEffect(() => {}, [price]);
//   function set_animal_price(animal_val) {
//     switch (animal_val) {
//       case "cow":
//         setPrice(prices.cow);
//         break;
//       case "goat":
//         setPrice(prices.goat);
//         break;
//       case "sheep":
//         setPrice(prices.sheep);
//         break;
//       default:
//         break;
//     }
//   }
//   function set_share_price(share_val) {
//     const currency = localStorage.getItem("currency");
//     let fixed_share_price = 0;

//     if (currency === "PKR") {
//       fixed_share_price = 32000;
//     } else if (currency === "USD") {
//       fixed_share_price = 114;
//     } else if (currency === "AED") {
//       fixed_share_price = 445;
//     } else {
//       fixed_share_price = 32000; // Default PKR
//     }

//     let share_price = fixed_share_price * share_val;
//     setPrice(share_price);
//   }

//   const [dcs, setdcs] = useState({});
//   function setDcs(func_prices) {
//     setdcs(func_prices);
//   }
//   useEffect(() => {}, [dcs]);

//   const [dc, setdc] = useState(0);
//   useEffect(() => {}, [dc]);
//   function set_delivery_charges(country_val) {
//     switch (country_val) {
//       case "Pakistan":
//         setdc(dcs.local);
//         break;
//       default:
//         setdc(dcs.int);
//         break;
//     }
//   }

//   const [formResetTab2, setFormResetTab2] = useState(false);
//   function set_FormResetTab2(form_reset) {
//     setFormResetTab2(form_reset);
//   }
//   useEffect(() => {}, [formResetTab2]);

//   const [form_val_1, set_form_val_1] = useState({});
//   function set_form_tab1(val) {
//     set_form_val_1(val);
//   }
//   useEffect(() => {}, [form_val_1]);

//   const [form_val_2, set_form_val_2] = useState({ data: 22 });
//   function set_form_tab2(val) {
//     set_form_val_2(val);
//   }

//   const [formData, setFormData] = useState({});
//   useEffect(() => {
//     setFormData({ ...form_val_1, ...form_val_2 });
//   }, [form_val_2, form_val_1]);

//   const [response, setresponse] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [attachment, setAttachment] = useState(null);

//   // Function to fetch access token from PAYFAST
//   const getAccessToken = async (merchantId, securedKey, basketId, transAmount) => {
//     const tokenApiUrl = "https://ipguat.apps.net.pk/Ecommerce/api/Transaction/GetAccessToken";
//     const payload = new URLSearchParams({
//       MERCHANT_ID: 27067,
//       SECURED_KEY: '8nYylUgQPzS_YNFuZmbwPNG_',
//       TXNAMT: 50,
//       BASKET_ID: "ZIB-" + Date.now(),
//       CURRENCY_CODE: "PKR"
//     });

//     try {
//       const response = await axios.post(tokenApiUrl, payload.toString(), {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         }
//       });

//       console.log("PayFast Token Response:", response.data);

//       if (response.data && response.data.ACCESS_TOKEN) {
//         return response.data.ACCESS_TOKEN;
//       } else {
//         throw new Error(response.data?.error || "Access token not found");
//       }
//     } catch (error) {
//       console.error("Failed to fetch PayFast token:", error.message, error.response?.data);
//       return "";
//     }
//   };
//   // Function to redirect to PAYFAST payment gateway
//   const redirectToPayfast = (token, orderId, transAmount) => {
//     const payfastUrl =
//       "https://ipguat.apps.net.pk/Ecommerce/api/Transaction/PostTransaction";

//     // Create form dynamically
//     const form = document.createElement("form");
//     form.method = "POST";
//     form.action = payfastUrl;

//     // Define form fields based on PAYFAST requirements
//     const fields = {
//       MERCHANT_ID: "27067",
//       MERCHANT_NAME: "UAT Demo Merchant",
//       TOKEN: token,
//       PROCCODE: "00",
//       TXNAMT: transAmount,
//       CUSTOMER_MOBILE_NO: formData.phone || "00000000000",
//       CUSTOMER_EMAIL_ADDRESS: formData.email || "customer@example.com",
//       SIGNATURE: "SOMERANDOM-STRING", // Replace with actual signature logic
//       VERSION: "MERCHANTCART0.1",
//       TXNDESC: "Qurbani Order",
//       SUCCESS_URL: "https://myzabiha.com/success", // Replace with your success URL
//       FAILURE_URL: "https://myzabiha.com/failure", // Replace with your failure URL
//       BASKET_ID: orderId,
//       ORDER_DATE: new Date().toISOString().split("T")[0], // Format: YYYY-MM-DD
//       CHECKOUT_URL: "https://myzabiha.com/checkout", // Replace with your checkout URL
//       CURRENCY_CODE: "PKR",
//       TRAN_TYPE: "ECOMM_PURCHASE",
//       STORE_ID: "102-ZEOJDZS3V", // Optional, replace if needed
//       MERCHANT_USERAGENT:
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
//       "ITEMS[0][SKU]": "QURBANI-001",
//       "ITEMS[0][NAME]": "Qurbani Animal",
//       "ITEMS[0][PRICE]": transAmount,
//       "ITEMS[0][QTY]": "1",
//     };

//     // Append fields to form
//     Object.entries(fields).forEach(([name, value]) => {
//       const input = document.createElement("input");
//       input.type = "hidden";
//       input.name = name;
//       input.value = value;
//       form.appendChild(input);
//     });

//     // Append form to document and submit
//     document.body.appendChild(form);
//     form.submit();
//   };

//   const postTransaction = async (accessToken, basketId) => {
//   try {
//     const data = ({
//       CURRENCY_CODE: 'PKR',
//       MERCHANT_ID: '14833',
//       MERCHANT_NAME: 'Payfast Merchant',
//       TOKEN: accessToken, // Received from first API
//       BASKET_ID: basketId, // Received from first API
//       TXNAMT: '50',
//       ORDER_DATE: '2025-05-12 12:00:00',
//       SUCCESS_URL: 'http://localhost/redirection/success.php',
//       FAILURE_URL: 'http://localhost/redirection/failure.php',
//       CHECKOUT_URL: 'http://localhost/redirection/checkout.php',
//       CUSTOMER_EMAIL_ADDRESS: 'someone234@gmai.com',
//       CUSTOMER_MOBILE_NO: '03000000090',
//       SIGNATURE: 'SOME-RANDOM-STRING',
//       VERSION: 'MERCHANT-CART-0.1',
//       TXNDESC: 'Item Purchased from Cart',
//       PROCCODE: '00',
//       TRAN_TYPE: 'ECOMM_PURCHASE',
//       STORE_ID: '',
//       RECURRING_TXN: '',
//       // MERCHANT_USERAGENT: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
//       // 'ITEMS[0][SKU]': 'SAMPLE-SKU-01',
//       // 'ITEMS[0][NAME]': 'An Awesome Dress',
//       // 'ITEMS[0][PRICE]': '150',
//       // 'ITEMS[0][QTY]': '2',
//       // 'ITEMS[1][SKU]': 'SAMPLE-SKU-02',
//       // 'ITEMS[1][NAME]': 'Ice Cream',
//       // 'ITEMS[1][PRICE]': '45',
//       // 'ITEMS[1][QTY]': '5'
//     });

//     const response = await axios.post(
//       'https://ipguat.apps.net.pk/Ecommerce/api/Transaction/PostTransaction',
//       data,
//       {
//         headers: {
//           'Content-Type': 'Access-Control-Allow-Origin',
//         }
//       }
//     );

//     console.log('PostTransaction response:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error in PostTransaction:', error.response?.data || error.message);
//   }
// };

//   let sendForm = async (formData) => {
//     try {
//     const data = ({
//       merchant_id: '14833',
//       secured_key: 'rPcy4T7GQkSCFsHBLdn26s',
//       trans_amount: '50',
//       currency_code: 'PKR'
//     });

//     const response = await axios.post(
//       'https://myzabiha.com/web_app/public/api/payfast/get-token',
//       data,
//       {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         }
//       }
//     );
//     postTransaction(response.data.access_token, response.data.basket_id);
//     console.log('Token response:', response.data.access_token);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching token:', error.response?.data || error.message);
//   }

//     // setLoading(true);
//     // try {
//     //   // Step 1: Create order via your API
//     //   const response = await fetch(
//     //     "https://myzabiha.com/web_app/public/api/book_now",
//     //     {
//     //       method: "POST",
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //       body: JSON.stringify(formData),
//     //     }
//     //   );

//     //   if (response.ok) {
//     //     const responseData = await response.json();
//     //     setresponse(responseData);
//     //     const orderId = responseData.order.id;
//     //     const transAmount = price + dc; // Total amount including delivery charges

//     //     // Step 2: Upload payment proof if attachment exists
//     //     if (attachment) {
//     //       const url = "https://myzabiha.com/web_app/public/api/upload-payment-proof";
//     //       const uploadFormData = new FormData();
//     //       uploadFormData.append("order_id", orderId);
//     //       uploadFormData.append("attachement", attachment);

//     //       try {
//     //         const uploadResponse = await fetch(url, {
//     //           method: "POST",
//     //           body: uploadFormData,
//     //         });

//     //         if (!uploadResponse.ok) {
//     //           console.error("Failed to upload payment proof");
//     //         }
//     //       } catch (error) {
//     //         console.error("Error uploading payment proof:", error);
//     //       }
//     //     }

//     //     // Step 3: Fetch access token for PAYFAST
//     //     const merchantId = "102"; // Replace with your merchant ID
//     //     const securedKey = "zWHjBp2AlttNu1sK"; // Replace with your secured key
//     //     const basketId = orderId; // Use order ID as basket ID
//     //     const token = await getAccessToken(merchantId, securedKey, basketId, transAmount);

//     //     if (token) {
//     //       // Step 4: Redirect to PAYFAST payment gateway
//     //       redirectToPayfast(token, basketId, transAmount);
//     //       setLoading(false);
//     //     } else {
//     //       alert("Failed to initiate payment. Please try again.");
//     //       setLoading(false);
//     //     }
//     //   } else {
//     //     alert("Order creation failed. Please try again.");
//     //     setLoading(false);
//     //   }
//     // } catch (error) {
//     //   alert("An error occurred while processing your order. Please try again.");
//     //   console.error("Error:", error);
//     //   setLoading(false);
//     // }
//   };

//   const [showDelivery, setShowDelivery] = useState(false);
//   function toggleShowDelivery(data) {
//     if (data === "Delivery") {
//       setShowDelivery(true);
//     } else {
//       setShowDelivery(false);
//     }
//   }

//   const [myBool, setmyBool] = useState(1);
//   function toggleBool() {
//     setmyBool(2);
//     window.scrollTo(0, 0);
//   }
//   function backBtn() {
//     setmyBool(1);
//     window.scrollTo(0, 0);
//   }
//   function toggleBool2() {
//     setmyBool(3);
//     window.scrollTo(0, 0);
//   }

//   let component;
//   let activate = false;
//   let activate2 = false;
//   let activate3 = false;
//   if (myBool === 1) {
//     component = (
//       <Tab1
//         set_share_price={set_share_price}
//         price={price}
//         set_FormReset={set_FormReset}
//         formReset={formReset}
//         set_animal_price={set_animal_price}
//         form_val_1={form_val_1}
//         set_form_tab1={set_form_tab1}
//         toggleBool={toggleBool}
//         showDelivery={showDelivery}
//         toggleShowDelivery={toggleShowDelivery}
//       />
//     );
//     activate = true;
//   } else if (myBool === 2) {
//     component = (
//       <Tab2
//         dc={dc}
//         set_FormResetTab2={set_FormResetTab2}
//         formResetTab2={formResetTab2}
//         dcs={dcs}
//         set_delivery_charges={set_delivery_charges}
//         formData={formData}
//         sendForm={sendForm}
//         form_val_1={form_val_1}
//         set_form_tab2={set_form_tab2}
//         backBtn={backBtn}
//         toggleBool2={toggleBool2}
//         showDelivery={showDelivery}
//         uploadImage={setAttachment}
//         loading={loading}
//       />
//     );
//     activate2 = true;
//   } else if (myBool === 3) {
//     component = (
//       <Tab3
//         response={response}
//         dc={form_val_2.delivery_charges}
//         form_val_1={form_val_1}
//       />
//     );
//     activate3 = true;
//   }

//   return (
//     <>
//       <Header
//         backBtn={backBtn}
//         setDcs={setDcs}
//         set_FormReset={set_FormReset}
//         setprice={setprice}
//       />
//       <main className="book">
//         <div className="container breadcrumb">
//           <div className="container">
//             <p>Home / Create Order</p>
//           </div>
//         </div>
//         <div className="create_order">
//           <h3 style={{ textAlign: "center" }}>
//             Book your Qurbani using <span>simple steps.</span>
//           </h3>
//         </div>
//         <Tabs activate={[activate, activate2, activate3]} />
//         {component}
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Book;
