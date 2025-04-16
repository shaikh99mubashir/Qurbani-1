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
              PDistribute the meat to deserving families
              You’ll receive confirmation and sometimes photos/videos of the sacrifice.
            </li>
          </ul>

          <h4>3. Can I choose the country where the Qurbani is performed?</h4>
          <p>
          Yes. We offer Qurbani services in multiple countries. You can select your preferred country while placing your order based on availability.
          </p>
      

          <h4>4. Will I receive proof of sacrifice?</h4>
          <p>
          Yes. After the sacrifice is completed, we send you confirmation via email or WhatsApp. In some cases, a photo or video of your Qurbani may be shared depending on availability and region.
          </p>

          <h4>5. How do I pay for my order?</h4>
          <p>You can pay online using secure payment methods such as:</p>
          <ul>
            <li>Online Transfer</li>
          </ul>
          <h4>6. Is my payment Zakat-eligible?</h4>
          <p>No. Qurbani, Aqiqah, and Sadaqah are separate from Zakat. However, if you're giving general Sadaqah or meat distribution, that may qualify based on intention. Please consult a scholar for personal Zakat matters.</p>

          <h4>7. Who receives the meat?</h4>
          <p>
          We distribute the meat to the most deserving — including orphans, widows, refugees, and impoverished families in local communities.
          </p>

          <h4>8. Can I do Qurbani on behalf of someone else?</h4>
          <p>
          Yes, you can do Qurbani on behalf of:
          </p>
          <ul>
            <li>Yourself</li>
            <li>Your parents</li>
            <li>Deceased loved ones</li>
            <li>As a gift for others</li>
          </ul>
          <h4>8. Changes to This Policy</h4>
          <p>
            We may update this Privacy Policy occasionally. Changes will be
            posted on this page with the effective date.
          </p>

          <h4>9. Do you offer Aqiqah and Sadaqah year-round?</h4>
          <p>
          Yes. Aqiqah and Sadaqah services are available throughout the year. Qurbani services are specific to Eid ul-Adha.
          </p>
          <h4>10. Can I get a tax receipt?</h4>
          <p>
          Yes. After your order is processed, we email you a receipt. Depending on your country and the type of donation, it may be tax-deductible.
          </p>
         
        </section>
      </div>
    </main>
    <Footer />
  </>
  )
}

export default FAQs
