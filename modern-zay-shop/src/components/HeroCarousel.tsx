'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description: React.ReactNode;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: (
      <h1 className="h1 text-[#59ab6e] font-roboto text-[48px] font-extralight">
        <b>Zay</b> eCommerce
      </h1>
    ),
    subtitle: <h3 className="h2 text-2xl text-gray-900">Tiny and Perfect eCommerce Template</h3>,
    description: (
      <p className="text-gray-600">
        Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1).
        This template is 100% free provided by{' '}
        <Link
          href="https://templatemo.com"
          target="_blank"
          rel="sponsored"
          className="text-[#59ab6e] hover:underline"
        >
          TemplateMo
        </Link>{' '}
        website. Image credits go to{' '}
        <Link
          href="https://stories.freepik.com/"
          target="_blank"
          rel="sponsored"
          className="text-[#59ab6e] hover:underline"
        >
          Freepik Stories
        </Link>
        ,{' '}
        <Link
          href="https://unsplash.com/"
          target="_blank"
          rel="sponsored"
          className="text-[#59ab6e] hover:underline"
        >
          Unsplash
        </Link>{' '}
        and{' '}
        <Link
          href="https://icons8.com/"
          target="_blank"
          rel="sponsored"
          className="text-[#59ab6e] hover:underline"
        >
          Icons 8
        </Link>
        .
      </p>
    ),
    image: '/images/banner_img_01.jpg',
  },
  {
    id: 2,
    title: <h1 className="h1 text-[48px] text-gray-900 font-roboto font-extralight">Proident occaecat</h1>,
    subtitle: <h3 className="h2 text-2xl text-gray-900">Aliquip ex ea commodo consequat</h3>,
    description: (
      <p className="text-gray-600">
        You are permitted to use this Zay CSS template for your commercial websites. You are{' '}
        <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template
        collection websites.
      </p>
    ),
    image: '/images/banner_img_02.jpg',
  },
  {
    id: 3,
    title: <h1 className="h1 text-[48px] text-gray-900 font-roboto font-extralight">Repr in voluptate</h1>,
    subtitle: <h3 className="h2 text-2xl text-gray-900">Ullamco laboris nisi ut</h3>,
    description: (
      <p className="text-gray-600">
        We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo,
        please make a small contribution via PayPal or tell your friends about our website. Thank
        you.
      </p>
    ),
    image: '/images/banner_img_03.jpg',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="template-mo-zay-hero-carousel" className="relative w-full overflow-hidden">
      {/* Slides */}
      <div className="flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 items-center">
                <div className="order-last lg:order-last flex justify-center">
                  <Image
                    src={slide.image}
                    alt="banner"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 text-left">
                  {slide.title}
                  {slide.subtitle}
                  {slide.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-[#59ab6e]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-700 bg-white/70 p-3 rounded-full hover:bg-white shadow"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-700 bg-white/70 p-3 rounded-full hover:bg-white shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
