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
    <section className="container mx-auto py-12">
      {/* Section header */}
      <div className="text-center pt-3">
        <div className="mx-auto lg:w-1/2">
          <h1 className="h1 font-roboto text-[48px] font-extralight">Categories of The Month</h1>
          <p className="text-gray-600 mt-2">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {categories.map((category) => (
          <div key={category.id} className="p-5 mt-3 flex flex-col items-center">
            <Link href={category.link} className="block">
              <Image
                src={category.image}
                alt={category.name}
                width={200}
                height={200}
                className="rounded-full border object-cover"
              />
            </Link>
            <h2 className="text-center text-xl font-medium mt-3 mb-3">{category.name}</h2>
            <p className="text-center">
              <Link
                href={category.link}
                className="inline-block bg-[#59ab6e] hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition-colors"
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