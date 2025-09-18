'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function TopNav() {
  return (
    <nav id='templatemo_nav_top' className="bg-dark text-[#cfd6e1] hidden lg:block min-h-[40px] text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2" />
            <a href="mailto:info@company.com" className="hover:text-[#cfd6e1] text-[#cfd6e1] no-underline">info@company.com</a>
          </div>
          <div className="flex items-center ml-4">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
            <a href="tel:010-020-0340" className="hover:text-[#cfd6e1] text-[#cfd6e1] no-underline">010-020-0340</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://fb.com/templatemo" target="_blank" rel="noopener noreferrer" className="hover:text-[#68bb7d]">
            <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#68bb7d]">
            <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#68bb7d]">
            <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#68bb7d]">
            <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}