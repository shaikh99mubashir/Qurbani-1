import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const ShippingPolicy = () => {
  return (
    <>
      <Header />
      <main className="book">
        <div className="container breadcrumb">
          <div className="container">
            <p>Home / Shipping & Fulfillment Policy</p>
          </div>
          <section className="privacy-policy container">
            <h3>
              <span>Shipping & Fulfillment Policy</span>
            </h3>
            <h6>
              <strong>Effective Date:</strong> 15-Jan-2024
            </h6>

            <h4>1. Service Fulfillment</h4>
            <p>
              My Zabiha provides religious sacrifice services such as Qurbani,
              Aqiqah, and Sadaqah. These services do not involve the shipment of
              physical goods to customers. Instead, the sacrifice is performed
              on your behalf and the meat is distributed to those in need in
              local communities.
            </p>

            <h4>2. Distribution Locations</h4>
            <p>
              We offer services in select countries where local partners carry
              out the sacrifice and meat distribution. You can choose your
              preferred region (based on availability) during the ordering
              process.
            </p>

            <h4>3. Confirmation of Fulfillment</h4>
            <p>
              Once your order has been completed, you will receive a
              confirmation via email or WhatsApp. In some cases, we may also
              provide photo or video proof depending on the country, local
              regulations, and feasibility.
            </p>

            <h4>4. Delivery of Meat</h4>
            <p>
              As a policy, meat from the sacrifice is{" "}
              <strong>not shipped or delivered to the customer</strong>.
              Instead, it is distributed among the poor, orphans, widows, and
              other deserving individuals in accordance with Islamic guidelines.
            </p>

            <h4>5. Service Timeline</h4>
            <ul>
              <li>
                <strong>Qurbani:</strong> Performed during Eid ul-Adha
                (according to Islamic dates)
              </li>
              <li>
                <strong>Aqiqah:</strong> Fulfilled within 1–3 days of order
                placement
              </li>
              <li>
                <strong>Sadaqah:</strong> Typically processed within 1–2
                business days
              </li>
            </ul>
            <p>
              Delays may occur in rare cases due to weather, local regulations,
              or logistical issues. We will notify you promptly in such
              scenarios.
            </p>

            <h4>6. Questions?</h4>
            <p>
              If you have questions about how your order will be fulfilled or
              where your donation will be distributed, please reach out to us:
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

            <p>
              We thank you for choosing My Zabiha to fulfill your sacred
              obligations and trust us with your charitable giving.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShippingPolicy;
