"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const slides = [
  {
    img: "/images/banner_img_01.jpg",
    title: (
      <h1 className="h1 text-success text-3xl md:text-4xl font-bold mb-2">
        <b>Zay</b> eCommerce
      </h1>
    ),
    subtitle: <h3 className="h2 text-2xl font-semibold mb-4">Tiny and Perfect eCommerce Template</h3>,
    content: (
      <p className="text-gray-700">
        Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1).
        This template is 100% free provided by{" "}
        <a
          rel="sponsored"
          className="text-success underline"
          href="https://templatemo.com"
          target="_blank"
        >
          TemplateMo
        </a>{" "}
        website. Image credits go to{" "}
        <a
          rel="sponsored"
          className="text-success underline"
          href="https://stories.freepik.com/"
          target="_blank"
        >
          Freepik Stories
        </a>
        ,{" "}
        <a
          rel="sponsored"
          className="text-success underline"
          href="https://unsplash.com/"
          target="_blank"
        >
          Unsplash
        </a>{" "}
        and{" "}
        <a
          rel="sponsored"
          className="text-success underline"
          href="https://icons8.com/"
          target="_blank"
        >
          Icons 8
        </a>
        .
      </p>
    ),
  },
  {
    img: "/images/banner_img_02.jpg",
    title: <h1 className="h1 text-3xl md:text-4xl font-bold mb-2">Proident occaecat</h1>,
    subtitle: <h3 className="h2 text-2xl font-semibold mb-4">Aliquip ex ea commodo consequat</h3>,
    content: (
      <p className="text-gray-700">
        You are permitted to use this Zay CSS template for your commercial websites.
        You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
      </p>
    ),
  },
  {
    img: "/images/banner_img_03.jpg",
    title: <h1 className="h1 text-3xl md:text-4xl font-bold mb-2">Repr in voluptate</h1>,
    subtitle: <h3 className="h2 text-2xl font-semibold mb-4">Ullamco laboris nisi ut </h3>,
    content: (
      <p className="text-gray-700">
        We bring you 100% free CSS templates for your websites.
        If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
      </p>
    ),
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div
      className="relative w-full bg-white shadow"
      aria-label="Hero Carousel"
      style={{ minHeight: 0 }}
    >
      {/* Slides */}
      <div className="relative min-h-[440px]">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 flex items-center justify-center w-full transition-opacity duration-700
              ${idx === current ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none z-0"}
            `}
            aria-hidden={idx !== current}
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row p-5 items-center">
                <div className="mx-auto md:mx-0 md:order-2 w-full md:w-1/2 flex justify-center">
                  {/* Strict container: matches Bootstrap's .img-fluid in a column */}
                  <div className="flex items-center justify-center w-full max-w-[450px] max-h-[350px] aspect-[9/7]">
                    <Image
                      src={slide.img}
                      alt=""
                      width={450}
                      height={350}
                      className="object-contain w-full h-full rounded-lg shadow"
                      priority={idx === 0}
                      sizes="(max-width: 768px) 90vw, 450px"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:mb-0 flex items-center">
                  <div className={`text-left align-middle ${idx === 0 ? "align-self-center" : ""}`}>
                    {slide.title}
                    {slide.subtitle}
                    {slide.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Controls */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow z-20 w-auto ps-3"
        onClick={prev}
        aria-label="Previous Slide"
        style={{ marginLeft: "12px" }}
      >
        <ChevronLeftIcon className="h-7 w-7 text-green-600" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow z-20 w-auto pe-3"
        onClick={next}
        aria-label="Next Slide"
        style={{ marginRight: "12px" }}
      >
        <ChevronRightIcon className="h-7 w-7 text-green-600" />
      </button>
      {/* Indicators (Bootstrap style: <ol> with <li> as small pills, at bottom center) */}
      <ol className="absolute left-1/2 -translate-x-1/2 bottom-4 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <li
            key={idx}
            className={`w-3 h-3 rounded-full border border-green-600 cursor-pointer transition-all duration-200
              ${current === idx ? "bg-green-600" : "bg-white"}
            `}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{ boxShadow: "0 0 4px rgba(34,197,94,0.5)" }} // subtle green glow
          />
        ))}
      </ol>
    </div>
  );
}