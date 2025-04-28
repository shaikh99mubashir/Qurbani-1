import React from 'react';
// import { FaWhatsapp } from 'react-icons/fa'; // Install react-icons: npm install react-icons
// import './WhatsAppButton.css'; // Create this CSS file for styling
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const WhatsAppButton = () => {
  const phoneNumber = '923282341188'; // Replace with your WhatsApp number (include country code, e.g., +91)
  const message = 'Hello! I need assistance.'; // Optional pre-filled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
       
<i class="fa fa-whatsapp" aria-hidden="true"></i>
      {/* <FaWhatsapp size={50} /> */}
    </a>
  );
};

export default WhatsAppButton;