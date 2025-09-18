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
    link: '/',
  },
  {
    id: 2,
    name: 'Cloud Nike Shoes',
    image: '/images/feature_prod_02.jpg',
    price: '$480.00',
    description: 'Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.',
    reviews: 48,
    rating: 3,
    link: '/',
  },
  {
    id: 3,
    name: 'Summer Addides Shoes',
    image: '/images/feature_prod_03.jpg',
    price: '$360.00',
    description: 'Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.',
    reviews: 74,
    rating: 5,
    link: '/',
  },
];

export default function FeaturedProduct() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        {/* Section header */}
        <div className="flex justify-center text-center py-3">
          <div className="w-full lg:w-1/2 mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">Featured Product</h1>
            <p className="text-gray-600">
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>

        {/* Product grid - matching HTML structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-8">
          {products.map((product) => (
            <div key={product.id} className="col-span-1 mb-4 px-0 md:px-2">
              <div className="card h-full bg-white shadow-sm rounded-lg overflow-hidden mx-3 md:mx-1">
                <Link href={product.link} className="block">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </Link>
                <div className="p-6">
                  {/* Ratings and Price */}
                  <ul className="flex justify-between items-center list-none mb-3">
                    <li className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}
                          size={16}
                        />
                      ))}
                    </li>
                    <li className="text-gray-500 font-medium text-right">{product.price}</li>
                  </ul>

                  {/* Product Name */}
                  <Link 
                    href={product.link} 
                    className="block text-xl md:text-2xl font-normal text-gray-900 hover:text-gray-700 no-underline hover:no-underline mb-3"
                  >
                    {product.name}
                  </Link>

                  {/* Description */}
                  <p className="text-gray-600 mb-3 text-sm md:text-base leading-relaxed">
                    {product.description}
                  </p>

                  {/* Reviews */}
                  <p className="text-gray-500 text-sm">Reviews ({product.reviews})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}