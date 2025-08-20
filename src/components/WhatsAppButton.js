import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
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
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;