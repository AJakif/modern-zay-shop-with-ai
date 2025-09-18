'use client';

import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Gym Weight',
    price: '$240.00',
    image: '/images/feature_prod_01.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.',
    rating: 3,
    reviews: 24
  },
  {
    id: 2,
    name: 'Cloud Nike Shoes',
    price: '$480.00',
    image: '/images/feature_prod_02.jpg',
    description: 'Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.',
    rating: 3,
    reviews: 48
  },
  {
    id: 3,
    name: 'Summer Addides Shoes',
    price: '$360.00',
    image: '/images/feature_prod_03.jpg',
    description: 'Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.',
    rating: 5,
    reviews: 74
  }
];

export default function FeaturedProducts() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Featured Product
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow h-full">
              {/* Product Image */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating and Price */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-600 font-semibold">{product.price}</span>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-green-600 transition-colors">
                  <a href="/shop-single">{product.name}</a>
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Reviews */}
                <p className="text-gray-500 text-sm mb-4">
                  Reviews ({product.reviews})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
