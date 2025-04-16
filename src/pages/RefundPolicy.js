import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <main className="book">
        <div className="container breadcrumb">
          <div className="container">
            <p>Home / Refund Policy</p>
          </div>
          <section className="privacy-policy container">
            <h3>
              <span>Refund Policy</span>
            </h3>
            <h6>
              <strong>Effective Date:</strong> 15-Jan-2024
            </h6>

            <h4>1. General Policy</h4>
            <p>
              At My Zabiha, we strive to ensure your complete satisfaction.
              However, due to the nature of our services—especially involving
              time-sensitive religious obligations—refunds are limited and
              handled on a case-by-case basis.
            </p>

            <h4>2. Eligibility for Refund</h4>
            <p>Refunds may only be issued under the following conditions:</p>
            <ul>
              <li>
                If you cancel your order{" "}
                <strong>
                  before the animal is purchased or the sacrifice is arranged
                </strong>
                .
              </li>
              <li>
                If there is an error on our part (e.g., payment processed but no
                order confirmation or service was rendered).
              </li>
              <li>
                If the order cannot be fulfilled due to unforeseen circumstances
                on our end.
              </li>
            </ul>

            <h4>3. Non-Refundable Situations</h4>
            <p>
              Refunds will <strong>not</strong> be issued in the following
              cases:
            </p>
            <ul>
              <li>After the animal has been purchased or sacrificed.</li>
              <li>For changes of mind or personal circumstances.</li>
              <li>
                Incorrect details provided by the customer (name, location,
                etc.).
              </li>
              <li>
                Failure to receive video or photo evidence due to local
                restrictions or logistics.
              </li>
            </ul>

            <h4>4. Processing Time</h4>
            <p>
              If approved, refunds will be processed within 7–10 business days.
              Depending on your payment method, it may take additional time for
              the funds to appear in your account.
            </p>

            <h4>5. Modifications to Orders</h4>
            <p>
              You may request changes to your order (such as name on behalf,
              country, or type of sacrifice){" "}
              <strong>before processing begins</strong>. Once the sacrifice is
              scheduled, changes cannot be guaranteed.
            </p>

            <h4>5. Your Rights</h4>
            <p>You have the right to:</p>
            <ul>
              <li>Access or correct your personal information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time (may impact service usage)</li>
            </ul>

            <h4>6. Contact Us</h4>
            <p>
              To request a refund or inquire about your order, please contact
              us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> support@myzabiha.com
              </li>
              <li>
                <strong>WhatsApp:</strong> +923353375813
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://myzabiha.com" target="_blank">
                  https://myzabiha.com
                </a>
              </li>
            </ul>

            <p>
              We appreciate your trust in My Zabiha and aim to handle all
              requests with transparency and care.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RefundPolicy;
