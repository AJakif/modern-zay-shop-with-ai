'use client';

import { useState, useEffect } from 'react';
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
      <h1 className="h1 text-[#59ab6e] font-roboto text-[32px] sm:text-[48px] font-extralight">
        <b>Zay</b> eCommerce
      </h1>
    ),
    subtitle: (
      <h3 className="h2 text-xl sm:text-2xl text-gray-900 font-roboto font-light">
        Tiny and Perfect eCommerce Template
      </h3>
    ),
    description: (
      <p className="text-sm sm:text-base text-gray-600 font-roboto font-light">
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
      <h1 className="h1 text-[32px] sm:text-[48px] text-gray-900 font-roboto font-extralight">
        Proident occaecat
      </h1>
    ),
    subtitle: (
      <h3 className="h2 text-xl sm:text-2xl text-gray-900 font-roboto font-light">
        Aliquip ex ea commodo consequat
      </h3>
    ),
    description: (
      <p className="text-sm sm:text-base text-gray-600 font-roboto font-light">
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
      <h1 className="h1 text-[32px] sm:text-[48px] text-gray-900 font-roboto font-extralight">
        Repr in voluptate
      </h1>
    ),
    subtitle: (
      <h3 className="h2 text-xl sm:text-2xl text-gray-900 font-roboto font-light">
        Ullamco laboris nisi ut
      </h3>
    ),
    description: (
      <p className="text-sm sm:text-base text-gray-600 font-roboto font-light">
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
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id="template-mo-zay-hero-carousel"
      className="relative w-full bg-[#efefef] overflow-hidden pb-16 sm:pb-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex items-center"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8 p-5 h-full">
                {/* Left: Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-3 sm:space-y-4 text-left items-start px-8 sm:px-4 lg:px-0">
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
                    className="w-full max-w-[350px] sm:max-w-[400px] h-auto object-contain rounded"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators - Fixed positioning */}
      <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-6 sm:w-8 md:w-10 h-1 bg-[#59ab6e] rounded-full transition-opacity duration-300 ${
              current === index ? 'opacity-100' : 'opacity-40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controls - Better mobile positioning */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 text-[#59ab6e] opacity-70 hover:opacity-100 transition-opacity p-2"
        aria-label="Previous slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 text-[#59ab6e] opacity-70 hover:opacity-100 transition-opacity p-2"
        aria-label="Next slide"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
      </button>
    </div>
  );
}