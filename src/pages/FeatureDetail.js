import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link, useParams } from "react-router-dom";
const FeatureDetail = () => {
  const { slug } = useParams();
  const featureContent = {
    "qurbani-overseas": {
      title: "Facilitate Qurbani for Overseas",
      detail: `Living overseas should never be a barrier to fulfilling your religious obligations. At My Zabiha, we bridge that gap by providing a fully digital platform that allows Muslims across the globe to perform Qurbani with ease, reliability, and full transparency.
  
  Through our platform, users can select their animal, choose their preferences, and let our team handle the rest — from sacrifice to distribution. You’ll receive timely updates, proof of sacrifice, and details on where the meat is sent.
  
  No middlemen, no confusion — just a smooth, spiritual, and responsible Qurbani experience managed by a dedicated and trustworthy team.`,
    },
    "convenience": {
      title: "Convenience",
      detail: `We understand that time is precious — especially during busy religious holidays. That's why My Zabiha puts the entire Qurbani process at your fingertips.
  
  From selecting your preferred animal to confirming the sacrifice, everything happens online. Our platform is designed with simplicity and user experience in mind — making it accessible for everyone, no matter their tech skills.
  
  Whether you’re ordering from your phone in the middle of a work meeting or from your laptop at home, you’ll be done in just a few minutes — with full peace of mind.`,
    },
    "variety": {
      title: "Variety",
      detail: `Every family and individual has unique needs — and we cater to them all. My Zabiha offers a wide selection of animals, including goats, sheep, cows, and shared options, so you can choose according to your tradition, region, and budget.
  
  We also showcase animal photos, weight details, and pricing upfront so you know exactly what you're purchasing. Each animal is raised under proper care, ensuring health, cleanliness, and adherence to Islamic values.
  
  Whether you're looking for a premium option or something more affordable, we have something for everyone — without compromising quality or standards.`,
    },
    "ethical-sourcing": {
      title: "Ethical Sourcing",
      detail: `Animal welfare is not just a buzzword for us — it’s a responsibility. My Zabiha partners only with farms and suppliers who treat animals with dignity and compassion throughout their life.
  
  Our team regularly inspects and verifies conditions to ensure animals are healthy, well-fed, and raised in a natural, stress-free environment. During the sacrifice, we follow proper Islamic guidelines and ensure the process is swift, respectful, and professional.
  
  This commitment to ethical sourcing ensures that your Qurbani aligns with your values — both spiritual and humanitarian.`,
    },
    "streamlined-sacrifice": {
      title: "Streamlined Sacrifice",
      detail: `We’ve eliminated the complexities around Qurbani by developing a streamlined process. Once your order is placed, our team schedules and carries out the sacrifice during the appropriate days of Eid, as per Islamic teachings.
  
  Our experts handle everything with precision — from slaughter to meat processing — while you receive regular updates and, if you choose, video or image proof of the sacrifice.
  
  You no longer have to worry about coordinating with butchers or following up with charities. We manage it all for you, professionally and spiritually.`,
    },
    "accountability": {
      title: "Accountability",
      detail: `Trust is earned, and we take that seriously. Our platform gives you access to real-time updates about your Qurbani journey — from purchase to sacrifice to distribution.
  
  You’ll receive confirmation messages, progress updates, and even visual proof (photos/videos) to ensure you’re never in the dark. Everything is documented and handled with complete transparency.
  
  We believe that accountability is what builds trust in online religious services, and our aim is to offer that trust — consistently and sincerely.`,
    },
    "delivery-doorstep": {
      title: "Delivery at Your Doorstep",
      detail: `Whether you want to keep a portion of your Qurbani or send it to loved ones, My Zabiha makes it easy by offering doorstep delivery — both locally and internationally.
  
  The meat is packed in hygienic, tamper-proof packaging and transported using proper cold chain logistics to preserve freshness and safety. We coordinate with reliable courier services to ensure it reaches the right place, right on time.
  
  You focus on your worship — we’ll handle the logistics. It's simple, fast, and designed around your comfort.`,
    },
    "distribution": {
      title: "Distribution to the Needy",
      detail: `Qurbani is not just about sacrifice — it's about sharing. We make sure that your meat reaches families who need it most, in regions where hunger and poverty are most pressing.
  
  Our distribution network is deeply rooted in communities and charitable organizations that understand local needs. Whether you donate 100% or a portion of your Qurbani, we’ll carry out the distribution with care and documentation.
  
  You’ll receive confirmation and reports of the distribution, so you know that your Qurbani is truly making a difference in someone’s life.`,
    },
  };
  
  
  
  const currentFeature = featureContent[slug];

  if (!currentFeature) return <div>Feature not found</div>;
  return (
    <>
      <Header />
      <main className="book">
        <div className="container breadcrumb">
          <div className="container">
            <p>
              <Link to="/" style={{ textDecoration: "none", }}>
                Home
              </Link>{" "}
              / {currentFeature.title}
            </p>
          </div>
          <div className="feature-detail">
            <h3>
              <span>{currentFeature.title}</span>
            </h3>
            <p>{currentFeature.detail}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FeatureDetail;
