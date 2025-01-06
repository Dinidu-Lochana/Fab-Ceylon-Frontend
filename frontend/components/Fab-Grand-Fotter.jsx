// components/Footer.js
import React from 'react';
import Image from 'next/image';

import Link from "next/link";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        {/* First Row */}
        <div className="first__row">
          <div className="first__container">
            {/* Address Section */}
            <address className="address">
              <p>No: 146</p>
              <p>DS Senanayake Road</p>
              <p>Kandy</p>
              <p>20000</p>
            </address>
            {/* Contact Section */}
            <div className="contact">
              <p>
                Hotline - <a href="tel:+94760221222">+94 76 022 1222</a>
              </p>
              <p>
                WhatsApp - <a href="https://wa.me/94722280404">+94 72 22 80404</a>
              </p>
              <p>
                Email - <a href="mailto:info@nuwara.cafe">info@nuwara.cafe</a>
              </p>
            </div>
            {/* Review Section */}
            
          </div>
        </div>
        {/* Second Container */}
        
        {/* Mobile Footer */}
        
        {/* Third Container */}
        
      </div>
    </footer>
  );
};

export default Footer;
