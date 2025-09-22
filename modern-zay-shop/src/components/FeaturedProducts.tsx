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
    link: '/shop-single',
  },
  {
    id: 2,
    name: 'Cloud Nike Shoes',
    image: '/images/feature_prod_02.jpg',
    price: '$480.00',
    description: 'Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.',
    reviews: 48,
    rating: 3,
    link: '/shop-single',
  },
  {
    id: 3,
    name: 'Summer Addides Shoes',
    image: '/images/feature_prod_03.jpg',
    price: '$360.00',
    description: 'Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.',
    reviews: 74,
    rating: 5,
    link: '/shop-single',
  },
];

export default function FeaturedProduct() {
  return (
    <section className="bg-light">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex justify-center text-center py-8">
          <div className="w-full max-w-xl mx-auto">
            <h1 className="h1" >Featured Product</h1>
            <p className="text-gray-700 text-base leading-relaxed">
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>

        {/* Product grid - matching Bootstrap col-12 col-md-4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-full mb-4 px-4 md:px-0">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
                <Link href={product.link} className="block">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-t-lg"
                    style={{ aspectRatio: '4/3' }}
                  />
                </Link>
                
                <div className="p-4 flex-1 flex flex-col">
                  {/* Ratings and Price - matching Bootstrap list-unstyled d-flex justify-content-between */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < product.rating ? 'text-yellow-500' : 'text-gray-400'}
                          size={14}
                        />
                      ))}
                    </div>
                    <div className="text-gray-500 text-right font-normal" style={{ fontSize: '14px' }}>
                      {product.price}
                    </div>
                  </div>

                  {/* Product Name - matching Bootstrap h2 text-decoration-none text-dark */}
                  <Link 
                    href={product.link} 
                    className="block no-underline text-gray-900 hover:text-gray-700 mb-3 font-bold"
                    style={{ fontSize: '24px', lineHeight: '1.2' }}
                  >
                    {product.name}
                  </Link>

                  {/* Description - matching Bootstrap card-text */}
                  <p className="text-gray-700 mb-3 flex-1" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    {product.description}
                  </p>

                  {/* Reviews - matching Bootstrap text-muted */}
                  <p className="text-gray-500 mb-0 font-normal" style={{ fontSize: '14px' }}>
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