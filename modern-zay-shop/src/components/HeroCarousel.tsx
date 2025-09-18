'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
    subtitle: (
      <h3 className="h2 text-2xl text-gray-900 font-roboto font-light">
        Tiny and Perfect eCommerce Template
      </h3>
    ),
    description: (
      <p className="text-gray-600 font-roboto font-light">
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
    title: (
      <h1 className="h1 text-[48px] text-gray-900 font-roboto font-extralight">
        Proident occaecat
      </h1>
    ),
    subtitle: (
      <h3 className="h2 text-2xl text-gray-900 font-roboto font-light">
        Aliquip ex ea commodo consequat
      </h3>
    ),
    description: (
      <p className="text-gray-600 font-roboto font-light">
        You are permitted to use this Zay CSS template for your commercial websites. You are{' '}
        <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template
        collection websites.
      </p>
    ),
    image: '/images/banner_img_02.jpg',
  },
  {
    id: 3,
    title: (
      <h1 className="h1 text-[48px] text-gray-900 font-roboto font-extralight">
        Repr in voluptate
      </h1>
    ),
    subtitle: (
      <h3 className="h2 text-2xl text-gray-900 font-roboto font-light">
        Ullamco laboris nisi ut
      </h3>
    ),
    description: (
      <p className="text-gray-600 font-roboto font-light">
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
    <div
      id="template-mo-zay-hero-carousel"
      className="relative w-full bg-[#efefef] overflow-hidden"
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <div className="container mx-auto px-4">
              {/* Responsive layout: image below text on mobile, side by side on lg+ */}
              <div className="flex flex-col-reverse lg:flex-row items-center gap-8 p-5">
                {/* Left: Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 text-left items-start">
                  {slide.title}
                  {slide.subtitle}
                  {slide.description}
                </div>
                {/* Right: Image */}
                <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
                  <Image
                    src={slide.image}
                    alt="banner"
                    width={600}
                    height={400}
                    className="w-full max-w-[400px] h-auto object-contain rounded"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 border border-[#59ab6e] ${
              current === index ? 'bg-[#59ab6e]' : 'bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-[#59ab6e] transition"
        aria-label="Previous slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-[#59ab6e] transition"
        aria-label="Next slide"
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-8 h-8" />
      </button>
    </div>
  );
}