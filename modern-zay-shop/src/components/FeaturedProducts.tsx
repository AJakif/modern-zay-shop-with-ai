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
    <section className="bg-[#e9eef5]">
      <div className="container mx-auto py-12">
        {/* Section header */}
        <div className="text-center py-3">
          <div className="mx-auto lg:w-1/2">
            <h1 className="h1 font-roboto text-[48px] font-extralight">Featured Product</h1>
            <p className="text-gray-600 mt-2">
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <div key={product.id} className="mb-4 flex flex-col bg-white shadow rounded overflow-hidden">
              <Link href={product.link} className="block">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </Link>
              <div className="p-4 flex flex-col flex-1">
                {/* Ratings and Price */}
                <ul className="flex justify-between list-none mb-2">
                  <li className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </li>
                  <li className="text-gray-500 font-medium">{product.price}</li>
                </ul>

                {/* Product Name */}
                <Link href={product.link} className="text-2xl font-medium text-gray-900 hover:underline mb-2">
                  {product.name}
                </Link>

                {/* Description */}
                <p className="text-gray-600 mb-2 flex-1">{product.description}</p>

                {/* Reviews */}
                <p className="text-gray-500">Reviews ({product.reviews})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
