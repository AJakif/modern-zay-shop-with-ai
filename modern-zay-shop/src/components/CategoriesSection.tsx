'use client';

import Image from 'next/image';

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Watches',
    image: '/images/category_img_01.jpg'
  },
  {
    id: 2,
    name: 'Shoes',
    image: '/images/category_img_02.jpg'
  },
  {
    id: 3,
    name: 'Accessories',
    image: '/images/category_img_03.jpg'
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Categories of The Month
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gray-200 group-hover:border-green-500 transition-colors">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.name}
              </h3>
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                Go Shop
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
