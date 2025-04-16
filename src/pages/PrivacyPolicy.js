import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="book">
        <div className="container breadcrumb">
          <div className="container">
            <p>Home / Privacy Policy</p>
          </div>
          <section className="privacy-policy container">
            <h3><span>Privacy Policy</span></h3>
            <h6>
              <strong>Effective Date:</strong> 15-Jan-2024
            </h6>

            <h4>1. Information We Collect</h4>
            <p>We collect the following types of information:</p>
            <h4>Personal Information</h4>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Billing and Shipping Address</li>
              <li>Country of residence</li>
              <li>
                {/* Payment details (processed via third-party payment gateways) */}
                Payment details (processed via Online Transfer)
              </li>
            </ul>

            <h4>2. How We Use Your Information</h4>
            <ul>
              <li>Process and fulfill your religious sacrifice orders</li>
              <li>Send order confirmations and updates</li>
              <li>
                Provide receipts and documentation for religious or tax purposes
              </li>
              <li>Respond to inquiries or customer service requests</li>
              <li>Improve our website, services, and offerings</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h4>3. Sharing Your Information</h4>
            <p>
              We do <strong>not</strong> sell your personal information.
            </p>
            <p>We may share data with:</p>
            <ul>
              <li>
                Verified partners or local representatives for animal sacrifice
                logistics
              </li>
              <li>Payment processors for secure transactions</li>
              <li>Government or legal authorities if required by law</li>
            </ul>

            <h4>4. Data Security</h4>
            <p>
              We implement strict security measures to protect your data,
              including:
            </p>
            <ul>
              <li>SSL encryption</li>
              <li>Secure payment gateways</li>
              <li>Access control and limited data retention policies</li>
            </ul>

            {/* <h4>5. Cookies</h4>
            <p>We use cookies to:</p>
            <ul>
              <li>Analyze traffic and user behavior</li>
              <li>Improve functionality and personalization</li>
            </ul>
            <p>You can control cookie preferences in your browser settings.</p> */}

            <h4>5. Your Rights</h4>
            <p>You have the right to:</p>
            <ul>
              <li>Access or correct your personal information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time (may impact service usage)</li>
            </ul>

            <h4>6. Third-Party Links</h4>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices.
            </p>

            <h4>7. Children's Privacy</h4>
            <p>
              Our services are not directed to children under the age of 13. We
              do not knowingly collect data from minors.
            </p>

            <h4>8. Changes to This Policy</h4>
            <p>
              We may update this Privacy Policy occasionally. Changes will be
              posted on this page with the effective date.
            </p>

            <h4>9. Contact Us</h4>
            <p>
              If you have any questions or concerns about this policy, please
              contact:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> support@myzabiha.com
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://myzabiha.com" target="_blank">
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

export default PrivacyPolicy;
