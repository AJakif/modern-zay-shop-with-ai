'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Shop', href: '/shop' },
  { name: 'Contact', href: '/contact' },
];

const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const toggleSearchModal = () => setIsSearchModalOpen((v) => !v);

  return (
    <>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between min-h-[90px]">
          {/* Logo */}
          <Link
            href="/"
            className="text-success logo h1 no-underline font-['Roboto'] font-medium"
            style={{
              color: '#59ab6e',
              fontWeight: '500 !important',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '48px !important',
              lineHeight: 1.1,
              letterSpacing: '-1px',
            }}
          >
            Zay
          </Link>
          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 items-center justify-between">
            <ul className="flex flex-row justify-center mx-auto space-x-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-[#212934] hover:text-[#69bb7e] no-underline transition-colors font-normal"
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 400,
                      fontSize: 18,
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-2 ml-6">
              <button
                className="p-3 text-gray-800 hover:text-[#59ab6e] transition-colors"
                onClick={toggleSearchModal}
                aria-label="Open search"
              >
                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
              </button>
              <Link
                href="#"
                className="relative no-underline text-gray-800 hover:text-[#59ab6e] transition-colors p-3"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-[#e9eef5] text-[#212934] text-xs rounded-full px-2 py-0.5 min-w-[22px] text-center leading-none font-medium">
                  7
                </span>
              </Link>
              <Link
                href="#"
                className="relative no-underline text-gray-800 hover:text-[#59ab6e] transition-colors p-3"
              >
                <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                <span className="absolute -top-2 -right-3 bg-[#e9eef5] text-[#212934] text-xs rounded-full px-2 py-0.5 min-w-[28px] text-center leading-none font-medium">
                  +99
                </span>
              </Link>
            </div>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="lg:hidden border-0 bg-transparent p-3 ml-2 focus:outline-none"
            type="button"
            onClick={toggleMenu}
            aria-controls="templatemo_main_nav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-600 text-2xl" />
          </button>
        </div>
        {/* Mobile Nav Dropdown */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden bg-white border-t border-gray-200 shadow`}
          id="templatemo_main_nav"
        >
          <ul className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} className="border-b border-gray-100 last:border-0">
                <Link
                  href={item.href}
                  className="block px-6 py-3 text-[#212934] hover:text-[#69bb7e] no-underline transition-colors font-normal"
                  style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    fontSize: 18,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* Mobile search input (inside nav dropdown, like the original) */}
            <li className="py-2 px-6">
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#59ab6e] bg-white"
                  id="inputMobileSearch"
                  placeholder="Search ..."
                />
                <button
                  className="px-3 py-2 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md"
                  aria-label="Search"
                >
                  <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
                </button>
              </div>
            </li>
            {/* Mobile icons (cart/user) in a row at the bottom */}
            <li className="flex items-center justify-center space-x-6 py-2">
              <Link
                href="#"
                className="relative no-underline text-gray-800 hover:text-[#59ab6e] transition-colors p-2"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-[#e9eef5] text-[#212934] text-xs rounded-full px-2 py-0.5 min-w-[22px] text-center leading-none font-medium">
                  7
                </span>
              </Link>
              <Link
                href="#"
                className="relative no-underline text-gray-800 hover:text-[#59ab6e] transition-colors p-2"
              >
                <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                <span className="absolute -top-2 -right-3 bg-[#e9eef5] text-[#212934] text-xs rounded-full px-2 py-0.5 min-w-[28px] text-center leading-none font-medium">
                  +99
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Search Modal - matching HTML design exactly */}
      {isSearchModalOpen && (
        <div 
          className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50 transition-opacity duration-150"
          onClick={(e) => {
            // Close modal if clicking on backdrop
            if (e.target === e.currentTarget) {
              toggleSearchModal();
            }
          }}
        >
          <div className="w-full max-w-4xl mx-4 px-8">
            {/* Close button positioned like in HTML */}
            <div className="w-full pt-4 mb-12 text-right">
              <button
                type="button"
                onClick={toggleSearchModal}
                className="text-gray-500 hover:text-gray-700 bg-transparent border-0 p-2 focus:outline-none transition-colors"
                aria-label="Close"
                style={{ fontSize: '28px', lineHeight: '1' }}
              >
                ×
              </button>
            </div>
            
            {/* Search form matching HTML structure */}
            <form 
              action="" 
              method="get" 
              className="w-full border-0 p-0 bg-transparent"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle search logic here
                console.log('Search submitted');
              }}
            >
              <div className="flex mb-8">
                <input
                  type="text"
                  className="flex-1 px-4 py-3 text-lg border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#59ab6e] focus:border-[#59ab6e] bg-white"
                  id="inputModalSearch"
                  name="q"
                  placeholder="Search ..."
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#59ab6e] text-white border border-[#59ab6e] rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#59ab6e] transition-colors"
                >
                  <FontAwesomeIcon icon={faSearch} className="text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MainHeader;