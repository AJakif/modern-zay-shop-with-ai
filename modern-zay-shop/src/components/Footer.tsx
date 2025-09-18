'use client';

import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-green-600 border-b border-gray-700 pb-3 mb-6">
              Zay Shop
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <span>123 Consectetur at ligula 10660</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-600" />
                <a href="tel:010-020-0340" className="hover:text-green-400 transition-colors">
                  010-020-0340
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-600" />
                <a href="mailto:info@company.com" className="hover:text-green-400 transition-colors">
                  info@company.com
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-xl font-semibold border-b border-gray-700 pb-3 mb-6">
              Products
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Luxury
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Sport Wear
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Men's Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Women's Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Popular Dress
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Gym Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Sport Shoes
                </a>
              </li>
            </ul>
          </div>

          {/* Further Info */}
          <div>
            <h2 className="text-xl font-semibold border-b border-gray-700 pb-3 mb-6">
              Further Info
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-green-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-green-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Shop Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400">
            Copyright © 2021 Company Name | Designed by{' '}
            <a
              href="https://templatemo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              TemplateMo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
