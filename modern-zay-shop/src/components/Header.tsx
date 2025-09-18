'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearchModal = () => setIsSearchModalOpen(!isSearchModalOpen);

  return (
    <>
      {/* Header */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4 min-h-[90px]">
          {/* Logo */}
          <Link href="/" className="header-logo no-underline self-center">
            Zay
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden border-0 bg-transparent p-3 focus:outline-none"
            type="button"
            onClick={toggleMenu}
            aria-controls="templatemo_main_nav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-600 text-xl" />
          </button>

          {/* Nav Items */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:flex flex-1 lg:justify-between items-center`}
            id="templatemo_main_nav"
          >
            {/* Menu */}
            <div className="flex-1">
              <ul className="flex flex-col lg:flex-row lg:justify-center lg:mx-auto space-y-2 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0">
                {['Home', 'About', 'Shop', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="block px-4 py-3 text-gray-700 hover:text-[#59ab6e] no-underline transition-colors font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center self-center mt-4 lg:mt-0 space-x-1">
              {/* Mobile Search */}
              <div className="lg:hidden flex-1 mt-3 mb-4 pr-3 sm:w-auto w-full">
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#59ab6e]"
                    id="inputMobileSearch"
                    placeholder="Search ..."
                  />
                  <div className="px-3 py-2 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md">
                    <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Desktop Search Icon */}
              <button
                className="hidden lg:inline-block p-3 text-gray-800 hover:text-[#59ab6e] transition-colors"
                onClick={toggleSearchModal}
              >
                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
              </button>

              {/* Cart Icon */}
              <Link
                href="#"
                className="relative no-underline text-gray-800 hover:text-[#59ab6e] transition-colors p-3"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-gray-200 text-gray-800 text-xs rounded-full px-2 py-0.5 min-w-[22px] text-center leading-none">
                  7
                </span>
              </Link>

              {/* User Icon */}
              <Link
                href="#"
                className="relative no-underline text-gray-800 hover:text-[#59ab6e] transition-colors p-3"
              >
                <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                <span className="absolute -top-2 -right-3 bg-gray-200 text-gray-800 text-xs rounded-full px-2 py-0.5 min-w-[28px] text-center leading-none">
                  +99
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Search</h3>
              <button
                onClick={toggleSearchModal}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="flex">
              <input
                type="text"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#59ab6e]"
                placeholder="Search ..."
              />
              <button className="px-4 py-2 bg-[#59ab6e] text-white rounded-r-md hover:bg-green-700 transition-colors">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainHeader;
