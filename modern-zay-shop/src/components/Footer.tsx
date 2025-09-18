'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#212934]" id="tempaltemo_footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Column 1 */}
          <div className="md:w-1/3 pt-5">
            <h2 className="text-green-600 font-roboto font-medium text-2xl border-b border-gray-300 pb-3">
              Zay Shop
            </h2>
            <ul className="list-none text-gray-100 mt-3 space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt fa-fw"></i>
                <span>123 Consectetur at ligula 10660</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fa fa-phone fa-fw"></i>
                <Link href="tel:010-020-0340" className="text-gray-100 hover:underline">
                  010-020-0340
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fa fa-envelope fa-fw"></i>
                <Link href="mailto:info@company.com" className="text-gray-100 hover:underline">
                  info@company.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="md:w-1/3 pt-5">
            <h2 className="text-gray-100 border-b border-gray-300 pb-3 text-xl">Products</h2>
            <ul className="list-none text-gray-100 mt-3 space-y-2">
              {['Luxury','Sport Wear',"Men's Shoes","Women's Shoes",'Popular Dress','Gym Accessories','Sport Shoes'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:underline">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:w-1/3 pt-5">
            <h2 className="text-gray-100 border-b border-gray-300 pb-3 text-xl">Further Info</h2>
            <ul className="list-none text-gray-100 mt-3 space-y-2">
              {['Home','About Us','Shop Locations','FAQs','Contact'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:underline">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social and Subscribe */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-100 mt-6 mb-4">
        <div className="flex space-x-3 mb-3 md:mb-0">
        {[
          { icon: FaFacebookF, link: "http://facebook.com/", label: "Facebook" },
          { icon: FaInstagram, link: "https://www.instagram.com/", label: "Instagram" },
          { icon: FaTwitter, link: "https://twitter.com/", label: "Twitter" },
          { icon: FaLinkedin, link: "https://www.linkedin.com/", label: "LinkedIn" }
        ].map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            target="_blank"
            aria-label={`Visit our ${item.label} page`}
            className="border border-[#cfd6e1] rounded-full w-10 h-10 flex items-center justify-center bg-transparent 
                      hover:bg-[#cfd6e1] transition-colors duration-200"
          >
            <item.icon className="text-[#cfd6e1] text-lg hover:text-[#212934] transition-colors duration-200" />
          </Link>
        ))}
      </div>


          <div className="flex items-center space-x-2">
            <input 
              type="text" 
              placeholder="Email address" 
              className="px-3 py-2 bg-gray-900 border border-gray-300 text-white focus:outline-none focus:ring-1 focus:ring-green-600 rounded-l-md"
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="w-full bg-[#1d242d] py-3 mt-4">
        <div className="container mx-auto px-4">
          <p className="text-left text-gray-100 text-sm">
            Copyright &copy; 2021 Company Name | Designed by{' '}
            <Link href="https://templatemo.com" target="_blank" className="hover:underline">
              TemplateMo
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
