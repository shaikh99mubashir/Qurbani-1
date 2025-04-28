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
              Aqiqah, and Sadaqah. These services primarily involve performing the
              sacrifice on your behalf and distributing the meat to those in need
              in local communities.
            </p>

            <h4>2. International Shipping Option</h4>
            <p>
              For international customers who request meat delivery, courier charges 
              will apply and must be paid by the customer. The cost will depend on:
            </p>
            <ul>
              <li>Requested meat quantity (in kilograms)</li>
              <li>Destination country's import policy for meat products</li>
              <li>Applicable courier service rates in that country</li>
            </ul>
            <p>
              Each country has different regulations regarding the import of meat. 
              Customers must confirm how much meat is allowed to be imported and 
              any necessary permits required before placing their shipping request.
            </p>

            <h4>3. Distribution Locations</h4>
            <p>
              We offer services in select country (Pakistan) where we carry
              out the sacrifice and meat distribution. You can choose your
              preferred region (based on availability) during the ordering
              process.
            </p>

            <h4>4. Confirmation of Fulfillment</h4>
            <p>
              Once your order has been completed, you will receive a
              confirmation via email or WhatsApp. In some cases, we may also
              provide photo or video proof depending on the country, local
              regulations, and feasibility.
            </p>

            <h4>5. Delivery of Meat (Standard Policy)</h4>
            <p>
              As a general policy, meat from the sacrifice can be{" "}
              <strong>ship or deliver to the customer</strong>.(as per customer choice)
              we can also distribut among the poor, orphans, widows, and
              other deserving individuals in accordance with Islamic guidelines as per customer wish
            </p>
            <p>
              However, if an international meat shipment is requested (where allowed), 
              additional charges and documentation may be required, and My Zabiha is not 
              responsible for customs delays, rejections, or confiscations. Subject to the import policy of the importer country.
            </p>

            <h4>6. Service Timeline</h4>
            <ul>
              <li>
                <strong>Qurbani:</strong> Performed during Eid ul-Adha
                (according to Islamic dates)
              </li>
              <li>
                <strong>Aqiqah:</strong> Fulfilled with in a day of order
                placement
              </li>
              <li>
                <strong>Sadaqah:</strong> Fulfilled with in a day of order
                placement
              </li>
            </ul>
            <p>
              Delays may occur in rare cases due to weather, local regulations,
              or logistical issues. We will notify you promptly in such
              scenarios.
            </p>

            <h4>7. Questions?</h4>
            <p>
              If you have questions about international shipping, courier charges, 
              or meat distribution, please contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> info@myzabiha.com
              </li>
              <li>
                <strong>WhatsApp:</strong>
                <a href="https://wa.me/923282341188"  target="_blank" rel="noreferrer">
                  {' '}Click to Message Us +923282341188
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://myzabiha.com" target="_blank" rel="noreferrer">
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
