import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ThankYou.css';

function ThankYou() {
  return (
    <div className="thankyou-container">
      <h1>🎉 Thank You for Your Order!</h1>
      <p>Your order has been placed successfully. We’ll contact you shortly for delivery.</p>
      <Link to="/" className="thankyou-home-btn">Back to Home</Link>
    </div>
  );
}

export default ThankYou;
