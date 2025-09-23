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

export default function CategoriesSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      {/* Section header - matching Bootstrap row/col structure */}
      <div className="flex justify-center pt-3 pb-8">
        <div className="w-full max-w-xl text-center">
          <h1 className="h1">Categories of The Month</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Categories grid - matching Bootstrap col-12 col-md-4 behavior */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {categories.map((category) => (
          <div key={category.id} className="px-12 py-12 mt-4 mb-4 text-center">
            <Link href={category.link} className="inline-block mb-1">
              <Image
                src={category.image}
                alt={category.name}
                width={284}
                height={284}
                className="rounded-full border border-gray-300"
                style={{ 
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                  maxWidth: '284px'
                }}
              />
            </Link>
            <h5 className="text-m font-medium mt-3 mb-3 text-gray-900">
              {category.name}
            </h5>
            <p className="text-center mb-0">
              <Link
                href={category.link}
                className="inline-block bg-[#59ab6e] hover:bg-green-700 text-white font-normal py-2 px-4 rounded transition-colors duration-200 no-underline"
                style={{ 
                  fontSize: '18px',
                  lineHeight: '1.5',
                  borderRadius: '0.375rem',
                  padding: '6px 12px'
                }}
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