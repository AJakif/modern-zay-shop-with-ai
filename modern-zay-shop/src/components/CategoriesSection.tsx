'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Watches',
    image: '/images/category_img_01.jpg',
    link: '#'
  },
  {
    id: 2,
    name: 'Shoes',
    image: '/images/category_img_02.jpg',
    link: '#'
  },
  {
    id: 3,
    name: 'Accessories',
    image: '/images/category_img_03.jpg',
    link: '#'
  }
];

export default function CategoriesOfTheMonth() {
  return (
    <section className="container mx-auto py-12 px-4">
      {/* Section header */}
      <div className="flex justify-center text-center pt-3">
        <div className="w-full lg:w-1/2 mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">Categories of The Month</h1>
          <p className="text-gray-600">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Categories grid - matching HTML structure */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {categories.map((category) => (
          <div key={category.id} className="w-full md:w-auto p-5 mt-3 flex flex-col items-center">
            <Link href={category.link} className="block mb-4">
              <Image
                src={category.image}
                alt={category.name}
                width={200}
                height={200}
                className="rounded-full border border-gray-200 object-cover w-full h-auto max-w-[200px]"
              />
            </Link>
            <h5 className="text-center text-lg md:text-xl font-medium mt-3 mb-3 text-gray-900">
              {category.name}
            </h5>
            <p className="text-center">
              <Link
                href={category.link}
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded transition-colors duration-200 no-underline"
              >
                Go Shop
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}