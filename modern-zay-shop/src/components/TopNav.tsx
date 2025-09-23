'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function TopNav() {
  return (
    <nav 
      id="templatemo_nav_top" 
      className="bg-[#212934] text-[#cfd6e1] hidden lg:block"
      style={{ minHeight: '40px' }}
    >
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-between items-center py-2">
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3 mx-2" />
            <a 
              className="text-[#cfd6e1] no-underline hover:text-[#cfd6e1] text-base font-light" 
              href="mailto:info@company.com"
            >
              info@company.com
            </a>
            <FontAwesomeIcon icon={faPhone} className="w-3 h-3 mx-2" />
            <a 
              className="text-[#cfd6e1] no-underline hover:text-[#cfd6e1] text-base font-light" 
              href="tel:010-020-0340"
            >
              010-020-0340
            </a>
          </div>
          <div>
            <a 
              className="text-[#cfd6e1] hover:text-[#69bb7e] inline-block" 
              href="https://fb.com/templatemo" 
              target="_blank" 
              rel="sponsored"
            >
              <FontAwesomeIcon 
                icon={faFacebookF} 
                className="w-3 h-3 mr-2" 
                style={{ fontSize: '0.875em', fontWeight: '400' }} 
              />
            </a>
            <a 
              className="text-[#cfd6e1] hover:text-[#69bb7e] inline-block" 
              href="https://www.instagram.com/" 
              target="_blank"
            >
              <FontAwesomeIcon 
                icon={faInstagram} 
                className="w-3 h-3 mr-2" 
                style={{ fontSize: '0.875em', fontWeight: '400' }} 
              />
            </a>
            <a 
              className="text-[#cfd6e1] hover:text-[#69bb7e] inline-block" 
              href="https://twitter.com/" 
              target="_blank"
            >
              <FontAwesomeIcon 
                icon={faTwitter} 
                className="w-3 h-3 mr-2" 
                style={{ fontSize: '0.875em', fontWeight: '400' }} 
              />
            </a>
            <a 
              className="text-[#cfd6e1] hover:text-[#69bb7e] inline-block" 
              href="https://www.linkedin.com/" 
              target="_blank"
            >
              <FontAwesomeIcon 
                icon={faLinkedin} 
                className="w-3 h-3" 
                style={{ fontSize: '0.875em', fontWeight: '400' }} 
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}