import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const FAQs = () => {
  return (
    <>
    <Header />
    <main className="book">
      <div className="container breadcrumb">
        <div className="container">
          <p>Home / Frequently Asked Questions (FAQs)</p>
        </div>
        <section className="privacy-policy container">
          <h3><span>Frequently Asked Questions (FAQs)</span></h3>

          <h4>1. What is My Zabiha?</h4>
          <p>My Zabiha is an online platform that allows you to perform Qurbani, Aqiqah, and Sadaqah remotely. We handle everything from selecting healthy animals to performing the sacrifice and distributing the meat to the needy.</p>

          <h4>2. How does the Qurbani process work?</h4>
          <p>Once you place an order, we:</p>
          <ul>
            <li>Purchase a healthy animal on your behalf</li>
            <li>Perform the sacrifice according to Islamic guidelines</li>
            <li>
              Distribute or deliver the meat to deserving families as per customer choice
              You’ll receive confirmation along with photos/videos of the sacrifice.
            </li>
          </ul>

          
      

          <h4>3. Will I receive proof of sacrifice?</h4>
          <p>
          Yes. After the sacrifice is completed, we send you confirmation via email or WhatsApp. A photo and video of your Qurbani may be shared depending on availability and region.
          </p>

          <h4>4. How do I pay for my order?</h4>
          <p>You can pay online using secure payment methods such as:</p>
          <ul>
            <li>Online Transfer / Bank Payment</li>
          </ul>
          <h4>5. Who receives the meat?</h4>
          <p>
          As per customer choice we distribute the meat to their family members, to the 
          most deserving — including orphans, widows, refugees, and poor families 
          in local communities.
          </p>

          <h4>6. Can I do Qurbani on behalf of someone else?</h4>
          <p>
          Yes, you can do Qurbani on behalf others
          </p>
          
          <h4>7. Changes to This Policy</h4>
          <p>
            We may update this Privacy Policy occasionally. Changes will be
            posted on this page with the effective date.
          </p>

          <h4>9. Do you offer Aqiqah and Sadaqah year-round?</h4>
          <p>
          Yes. Aqiqah and Sadaqah services are available throughout the year. Qurbani services are specific to Eid ul-Adha.
          </p>
          <h4>10. Can I get a receipt?</h4>
          <p>
          Yes. After your order is processed, we email you a receipt. Depending on your country and the type of donation.
          </p>
          <h4>11. Contact Information</h4>
            <p>
              If you have any questions about these Terms and Conditions, you
              can contact us at:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> support@myzabiha.com
              </li>
              <li>
                <strong>WhatsApp:</strong> +923282341188
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
  )
}

export default FAQs
