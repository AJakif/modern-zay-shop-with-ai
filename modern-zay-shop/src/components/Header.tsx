'use client';

import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-green-600">
              Zay
            </a>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden border-0 bg-transparent"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
              <ul className="flex space-x-8">
                <li>
                  <a href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/shop" className="text-gray-700 hover:text-green-600 transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Action buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <button
                onClick={toggleSearch}
                className="text-gray-700 hover:text-green-600 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <a href="#" className="relative text-gray-700 hover:text-green-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-gray-100 text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                7
                </span>
              </a>
              <a href="#" className="relative text-gray-700 hover:text-green-600 transition-colors">
                <User className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-gray-100 text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  +99
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {/* Mobile search */}
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="px-3 py-2 bg-green-600 text-white rounded-r-md">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Mobile menu items */}
                <ul className="flex flex-col space-y-2">
                  <li>
                    <a href="/" className="block py-2 text-gray-700 hover:text-green-600">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="block py-2 text-gray-700 hover:text-green-600">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/shop" className="block py-2 text-gray-700 hover:text-green-600">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="block py-2 text-gray-700 hover:text-green-600">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Search</h2>
              <button
                onClick={toggleSearch}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close search"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="flex">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
