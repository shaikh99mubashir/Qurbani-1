import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const TermsandConditions = () => {
  return (
    <>
      <Header />
      <main className="book">
        <div className="container breadcrumb">
          <div className="container">
            <p>Home /Terms and Conditions</p>
          </div>
          <section className="privacy-policy container">
            <h3>
              <span>Terms and Conditions</span>
            </h3>
            <h6>
              <strong>Effective Date:</strong> 15-Jan-2024
            </h6>
            <h4>1. Acceptance of Terms</h4>
            <p>
              By using the My Zabiha website or placing an order, you agree to
              be bound by these Terms and Conditions. If you do not agree,
              please do not use this service.
            </p>

            <h4>2. Services Offered</h4>
            <p>
              My Zabiha facilitates the religious sacrifices of Qurbani, Aqiqah,
              and Sadaqah on behalf of customers. We partner with verified local
              vendors to ensure the sacrifice is performed according to Islamic
              guidelines.
            </p>

            <h4>3. Religious Compliance</h4>
            <p>
              All efforts are made to perform the sacrifice in accordance with
              Islamic rules. However, My Zabiha shall not be liable for slight
              variations due to regional practices or unforeseen circumstances.
            </p>

            <h4>4. Payments</h4>
            <p>
              All payments must be made in full at the time of placing an order.
              Orders are not confirmed until payment has been successfully
              received.
            </p>

            <h4>5. Order Modifications & Cancellations</h4>
            <p>
              Modifications or cancellations can only be made before your order
              is processed. Once the animal has been purchased or the sacrifice
              has been scheduled, no changes or refunds are permitted.
            </p>

            <h4>6. No Delivery of Meat</h4>
            <p>
              Meat from sacrifices will <strong>not be delivered</strong> to the
              customer. It will be distributed locally to the needy, as per the
              religious intention behind Qurbani, Aqiqah, or Sadaqah.
            </p>

            <h4>7. Confirmation & Proof</h4>
            <p>
              Customers will receive confirmation via email or WhatsApp once
              their sacrifice is completed. In some regions, photo or video
              proof may be provided depending on availability.
            </p>

            <h4>8. Refund Policy</h4>
            <p>
              Refunds are only available before processing begins. Please refer
              to our <a href="/RefundPolicy">Refund Policy</a> for more
              details.
            </p>

            <h4>9. Limitation of Liability</h4>
            <p>
              My Zabiha is not responsible for delays or failure in performance
              due to causes beyond our control, including but not limited to
              weather conditions, political unrest, or logistical issues in
              remote areas.
            </p>

            <h4>10. User Responsibilities</h4>
            <p>
              You agree to provide accurate information when placing your order.
              You are responsible for ensuring that your intentions for the
              sacrifice (e.g., for Qurbani, Aqiqah) are correct.
            </p>

            <h4>11. Changes to Terms</h4>
            <p>
              My Zabiha reserves the right to change these Terms at any time
              without notice. Continued use of the service after changes implies
              acceptance of those changes.
            </p>

            <h4>12. Contact Information</h4>
            <p>
              If you have any questions about these Terms and Conditions, you
              can contact us at:
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
                <a href="https://myzabiha.com"  target="_blank" rel="noreferrer">
                  https://myzabiha.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsandConditions;
