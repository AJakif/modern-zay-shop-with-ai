'use client';

import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function TopNav() {
  return (
    <nav className="bg-gray-900 text-white hidden lg:block">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@company.com" className="text-sm hover:text-gray-300">
                info@company.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:010-020-0340" className="text-sm hover:text-gray-300">
                010-020-0340
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://fb.com/templatemo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
