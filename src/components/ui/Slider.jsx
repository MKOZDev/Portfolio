"use client";

import { useEffect, useRef, useState } from "react";

export default function Slider({ items, renderItem, slidesPerView = 2 }) {
  const [current, setCurrent] = useState(0);
  const [spv, setSpv] = useState(slidesPerView);

  const startX = useRef(0);

  useEffect(() => {
    const update = () => {
      setSpv(window.innerWidth < 768 ? 1 : slidesPerView);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, [slidesPerView]);

  const maxIndex = items.length - spv;

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;

    const threshold = 50;

    if (diff > threshold) {
      prevSlide();
    } else if (diff < -threshold) {
      nextSlide();
    }
  };

  return (
    <div className="relative max-xl:overflow-hidden">
      <div>
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="flex transition-transform duration-600 ease-out"
          style={{
            transform: `translateX(-${(current * 100) / spv}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="px-3 py-6 max-xl:py-0 max-xl:px-1"
              style={{ minWidth: `${100 / spv}%` }}
            >
              <div
                className={`bg-gray-100 border group border-gray-100 rounded-xl h-full transition-all duration-600 ease-out hover:shadow-[0_20px_40px_-10px_rgba(0,229,255,0.15)] hover:border-blue `}
              >
                {renderItem(item)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute right-20 -top-20 -translate-y-1/2 w-12 h-12 group rounded-full border-2 cursor-pointer border-gray-200 hover:border-blue hover:bg-gray-100 duration-300 transition-all flex items-center justify-center group max-lg:-top-3 max-sm:hidden"
      >
        <i className="text-gray-600 group-hover:text-brand-cyan transition-colors">
          <svg
            className="svg-inline--fa w-3 fill-current text-main fa-arrow-left duration-300 group-hover:text-blue"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 -top-20 max-lg:-top-3 max-sm:hidden -translate-y-1/2 w-12 h-12 group rounded-full border-2 cursor-pointer border-gray-200 hover:border-blue hover:bg-gray-100 duration-300 transition-all flex items-center justify-center group"
      >
        <i className="text-gray-600 group-hover:text-brand-cyan transition-colors">
          <svg
            className="svg-inline--fa w-3 fill-current text-main fa-arrow-left duration-300 group-hover:text-blue"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </i>
      </button>

      <div className="flex justify-center gap-2 mt-4 h-3">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 flex rounded-full transition-all duration-300 ease cursor-pointer ${
              current === index ? "scale-125 bg-blue w-8 h-1" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
