'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  reviews: number;
  rating: number; // 0–5 stars
  link: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Gym Weight',
    image: '/images/feature_prod_01.jpg',
    price: '$240.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.',
    reviews: 24,
    rating: 3,
    link: 'shop-single.html',
  },
  {
    id: 2,
    name: 'Cloud Nike Shoes',
    image: '/images/feature_prod_02.jpg',
    price: '$480.00',
    description: 'Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.',
    reviews: 48,
    rating: 3,
    link: 'shop-single.html',
  },
  {
    id: 3,
    name: 'Summer Addides Shoes',
    image: '/images/feature_prod_03.jpg',
    price: '$360.00',
    description: 'Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.',
    reviews: 74,
    rating: 5,
    link: 'shop-single.html',
  },
];

export default function FeaturedProducts() {
  return (
    <section style={{ backgroundColor: '#e9eef5' }}> {/* bg-light from templatemo.css */}
      <div className="container mx-auto py-12 px-4"> {/* py-5 = 3rem = py-12 */}
        <div className="flex justify-center text-center py-3"> {/* py-3 */}
          <div className="w-full lg:w-1/2 mx-auto"> {/* col-lg-6 m-auto */}
            <h1 
              className="mb-4"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '48px',
                fontWeight: 200,
                lineHeight: 1.1
              }}
            >
              Featured Product
            </h1>
            <p 
              className="mb-0"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '18px',
                fontWeight: 300,
                color: '#6c757d'
              }}
            >
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4"> {/* Bootstrap row */}
          {products.map((product) => (
            <div key={product.id} className="w-full md:w-1/3 px-4 mb-16"> {/* col-12 col-md-4 mb-4 */}
              <div className="bg-white rounded-none shadow-sm h-full flex flex-col" 
                   style={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.10)' }}> {/* Bootstrap card h-100 */}
                <Link href={product.link}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '4/3' }}
                  />
                </Link>
                
                <div className="p-6 flex-1 flex flex-col"> {/* card-body */}
                  {/* Rating and Price */}
                  <ul className="list-none flex justify-between items-start mb-0 p-0">
                    <li>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < product.rating ? 'text-[#ede861]' : 'text-[#bcbcbc]'} // text-warning and text-muted
                            size={16}
                          />
                        ))}
                      </div>
                    </li>
                    <li 
                      className="text-right"
                      style={{
                        color: '#bcbcbc',
                        fontSize: '18px',
                        fontWeight: 300,
                        fontFamily: 'Roboto, sans-serif'
                      }}
                    >
                      {product.price}
                    </li>
                  </ul>

                  <Link 
                    href={product.link} 
                    className="block no-underline text-[#212529] hover:text-[#212529] mb-3"
                    style={{
                      fontSize: '30px !important',
                      fontWeight: 300,
                      fontFamily: 'Roboto, sans-serif',
                      lineHeight: 1.2
                    }}
                  >
                    {product.name}
                  </Link>

                  <p 
                    className="mb-3 flex-1"
                    style={{
                      fontSize: '18px',
                      fontWeight: 300,
                      fontFamily: 'Roboto, sans-serif',
                      color: '#6c757d',
                      lineHeight: 1.5
                    }}
                  >
                    {product.description}
                  </p>

                  <p 
                    className="mb-0"
                    style={{
                      color: '#bcbcbc',
                      fontSize: '18px',
                      fontWeight: 300,
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    Reviews ({product.reviews})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}