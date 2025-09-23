'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-[#212934]" id="tempaltemo_footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4"> {/* Bootstrap row */}
          
          {/* Column 1 */}
          <div className="w-full md:w-1/3 px-4 pt-5"> {/* col-md-4 pt-5 */}
            <h2 
              className="border-b pb-3 mb-0"
              style={{
                color: '#59ab6e',
                borderColor: '#2d343f',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '30px !important',
                fontWeight: 500,
                lineHeight: 1.2
              }}
            >
              Zay Shop
            </h2>
            <ul className="list-none p-0 m-0 mt-4" style={{ color: '#cfd6e1' }}>
              <li className="pt-2.5"> {/* footer-link-list li padding-top: 10px */}
                <FontAwesomeIcon 
                  icon={faMapMarkerAlt} 
                  className="w-4 h-4 mr-2" 
                  style={{ fontSize: '1em', fontWeight: 400 }}
                />
                <span 
                  style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '18px',
                    fontWeight: 300
                  }}
                >
                  123 Consectetur at ligula 10660
                </span>
              </li>
              <li className="pt-2.5">
                <FontAwesomeIcon 
                  icon={faPhone} 
                  className="w-4 h-4 mr-2" 
                  style={{ fontSize: '1em', fontWeight: 400 }}
                />
                <Link 
                  href="tel:010-020-0340" 
                  className="no-underline hover:text-[#68bb7d]"
                  style={{
                    color: '#dcdde1',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '18px',
                    fontWeight: 300
                  }}
                >
                  010-020-0340
                </Link>
              </li>
              <li className="pt-2.5">
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="w-4 h-4 mr-2" 
                  style={{ fontSize: '1em', fontWeight: 400 }}
                />
                <Link 
                  href="mailto:info@company.com" 
                  className="no-underline hover:text-[#68bb7d]"
                  style={{
                    color: '#dcdde1',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '18px',
                    fontWeight: 300
                  }}
                >
                  info@company.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/3 px-4 pt-5">
            <h2 
              className="border-b pb-3 mb-0"
              style={{
                color: '#cfd6e1',
                borderColor: '#2d343f',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '30px',
                fontWeight: 300,
                lineHeight: 1.2
              }}
            >
              Products
            </h2>
            <ul className="list-none p-0 m-0 mt-4" style={{ color: '#cfd6e1' }}>
              {['Luxury','Sport Wear',"Men's Shoes","Women's Shoes",'Popular Dress','Gym Accessories','Sport Shoes'].map((item, idx) => (
                <li key={idx} className="pt-2.5">
                  <Link 
                    href="#" 
                    className="no-underline hover:text-[#68bb7d]"
                    style={{
                      color: '#dcdde1',
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '18px',
                      fontWeight: 300
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/3 px-4 pt-5">
            <h2 
              className="border-b pb-3 mb-0"
              style={{
                color: '#cfd6e1',
                borderColor: '#2d343f',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '30px',
                fontWeight: 300,
                lineHeight: 1.2
              }}
            >
              Further Info
            </h2>
            <ul className="list-none p-0 m-0 mt-4" style={{ color: '#cfd6e1' }}>
              {['Home','About Us','Shop Locations','FAQs','Contact'].map((item, idx) => (
                <li key={idx} className="pt-2.5">
                  <Link 
                    href="#" 
                    className="no-underline hover:text-[#68bb7d]"
                    style={{
                      color: '#dcdde1',
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '18px',
                      fontWeight: 300
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social and Subscribe Row */}
        <div className="flex flex-wrap text-[#cfd6e1] mb-4"> {/* row text-light mb-4 */}
          <div className="w-full mb-3"> {/* col-12 mb-3 */}
            <div className="w-full my-3 border-t" style={{ borderColor: '#2d343f' }}></div> {/* border-top border-light */}
          </div>
          
          <div className="w-auto mr-auto mb-3"> {/* col-auto me-auto */}
            <ul className="flex list-none p-0 m-0"> {/* list-inline text-left footer-icons */}
              {[
                { icon: faFacebookF, link: "http://facebook.com/" },
                { icon: faInstagram, link: "https://www.instagram.com/" },
                { icon: faTwitter, link: "https://twitter.com/" },
                { icon: faLinkedin, link: "https://www.linkedin.com/" }
              ].map((item, idx) => (
                <li key={idx} className="inline-block mr-2"> {/* list-inline-item */}
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-[#cfd6e1] no-underline rounded-full text-center inline-flex items-center justify-center transition-all duration-500 hover:bg-[#cfd6e1] hover:text-[#212934]"
                    style={{
                      width: '2.6em',
                      height: '2.6em',
                      lineHeight: '2.6em',
                      border: '1px solid #2d343f'
                    }}
                  >
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className="text-lg transition-all duration-500"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-auto"> {/* col-auto */}
            <div className="flex mb-2"> {/* input-group mb-2 */}
              <input 
                type="text" 
                className="px-3 py-2 border border-[#2d343f] focus:outline-none bg-[#212934] text-[#cfd6e1]"
                id="subscribeEmail"
                placeholder="Email address"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '18px',
                  fontWeight: 300
                }}
              />
              <div className="px-3 py-2 bg-[#59ab6e] text-[#cfd6e1] border border-[#59ab6e] cursor-pointer">
                <span 
                  style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '18px',
                    fontWeight: 300
                  }}
                >
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full bg-[#1d242d] py-3"> {/* bg-black py-3 */}
        <div className="container mx-auto px-4">
          <div className="flex pt-2"> {/* row pt-2 */}
            <div className="w-full"> {/* col-12 */}
              <p 
                className="text-left mb-0"
                style={{
                  color: '#cfd6e1',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '18px',
                  fontWeight: 300
                }}
              >
                Copyright &copy; 2021 Company Name 
                | Designed by <Link 
                  href="https://templatemo.com" 
                  target="_blank" 
                  rel="sponsored"
                  className="hover:text-[#68bb7d]"
                  style={{
                    color: '#dcdde1',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '18px',
                    fontWeight: 300
                  }}
                >
                  TemplateMo
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}