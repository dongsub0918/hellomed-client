"use client";

import React, { useMemo } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { CarouselItem } from "@/lib/types/carousel";
import { useCarousel } from "@/lib/hooks/useCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-12 top-1/2 -translate-y-1/2 z-10"
      aria-label="Previous slide"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-12 top-1/2 -translate-y-1/2 z-10"
      aria-label="Next slide"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  );
}

const carouselStyles = `
  .slick-dots li button:before {
    color: white !important;
    opacity: 0.5;
  }
  .slick-dots li.slick-active button:before {
    color: white !important;
    opacity: 1;
  }
`;

interface CarouselContentProps {
  items: CarouselItem[];
  isLoading?: boolean;
  error?: Error | null;
  preview?: boolean;
}

function CarouselContent({
  items,
  isLoading = false,
  error = null,
  preview = false,
}: CarouselContentProps) {
  const settings = useMemo(
    () => ({
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      arrows: true,
      dots: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    }),
    []
  );

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl h-[30vh] bg-gray-200 animate-pulse" />
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl text-center text-red-500">
        Error loading carousel items. Try again later.
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="w-full max-w-4xl h-[30vh] flex items-center justify-center bg-gray-100">
        No items to display
      </div>
    );
  }

  const renderCarouselItem = (item: CarouselItem) =>
    item.href ? (
      <Link href={item.href} target="_blank" rel="noopener noreferrer">
        <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer min-w-[600px]">
          <div className="relative h-[30vh]">
            <Image
              src={item.imageSrc || ""}
              alt={item.title || ""}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="p-6 min-h-[100px]">
            <h3 className="text-xl font-semibold text-black mb-2">
              {item.title || "<Empty title>"}
            </h3>
            <p className="text-black">
              {item.description || "No description available"}
            </p>
          </div>
        </div>
      </Link>
    ) : (
      <div className="bg-white rounded-lg overflow-hidden min-w-[600px]">
        <div className="relative h-[30vh]">
          <Image
            src={item.imageSrc || ""}
            alt={item.title || ""}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="p-6 min-h-[100px]">
          <h3 className="text-xl font-semibold text-black mb-2">
            {item.title || "<Empty title>"}
          </h3>
          <p className="text-black">
            {item.description || "No description available"}
          </p>
        </div>
      </div>
    );

  const shouldUseSlider = !preview && items.length > 1;

  return (
    <div className="w-full max-w-4xl">
      {shouldUseSlider && (
        <style jsx global>
          {carouselStyles}
        </style>
      )}
      {shouldUseSlider ? (
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-4 focus:outline-none">
              {renderCarouselItem(item)}
            </div>
          ))}
        </Slider>
      ) : (
        renderCarouselItem(items[0])
      )}
    </div>
  );
}

function CarouselWithData() {
  const { carouselItems, isLoading, error } = useCarousel();
  return (
    <CarouselContent
      items={carouselItems}
      isLoading={isLoading}
      error={error}
      preview={false}
    />
  );
}

export default function Carousel({
  items,
  preview = false,
}: {
  items?: CarouselItem[];
  preview?: boolean;
}) {
  if (items === undefined) {
    return <CarouselWithData />;
  }
  return <CarouselContent items={items} preview={preview} />;
}
