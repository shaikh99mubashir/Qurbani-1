import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Book from './pages/book';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetail from './pages/ProductDetail';
import Track from './pages/track';
import ContactUs from './pages/ContactUs';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsandConditions from './pages/TermsandConditions';
import FeatureDetail from './pages/FeatureDetail';
import PaymentFailure from './pages/PaymentFailure';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import "./App.css";
import WhatsAppButton from "./components/WhatsAppButton";
import FloatingCartButton from "./components/FloatingCartButton";
import PaymentSuccess from './pages/PaymentSuccess';

function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/track" element={<Track />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsandConditions />} />
            <Route path="/feature/:id" element={<FeatureDetail />} />
            <Route path="/payment-failure" element={<PaymentFailure />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
          <WhatsAppButton />
          <FloatingCartButton />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
