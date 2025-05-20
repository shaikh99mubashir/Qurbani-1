import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Book from "./pages/book";
import Home from "./pages/home";
import Track from "./pages/track";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQs from "./pages/FAQs";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsandConditions from "./pages/TermsandConditions";
import ContactUs from "./pages/ContactUs";
import FeatureDetail from "./pages/FeatureDetail";
import PaymentForm from "./pages/PaymentForm";
import WhatsAppButton from "./components/WhatsAppButton";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/book" element={<Book />}></Route>
            <Route exact path="/track" element={<Track />}></Route>
            <Route exact path="/FAQs" element={<FAQs />}></Route>
            <Route
              exact
              path="/PrivacyPolicy"
              element={<PrivacyPolicy />}
            ></Route>
            <Route
              exact
              path="/RefundPolicy"
              element={<RefundPolicy />}
            ></Route>
            <Route
              exact
              path="/ShippingPolicy"
              element={<ShippingPolicy />}
            ></Route>
            <Route
              exact
              path="/TermsandConditions"
              element={<TermsandConditions />}
            ></Route>
            <Route exact path="/ContactUs" element={<ContactUs />}></Route>
            <Route exact path="/PaymentForm" element={<PaymentForm />}></Route>
            <Route path="/feature/:slug" element={<FeatureDetail />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-failure" element={<PaymentFailure />} />
          </Routes>
        </div>
        <WhatsAppButton />
      </BrowserRouter>
    );
  }
}

export default App;
