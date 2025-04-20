"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { CarouselItem } from "@/lib/types/carousel";
import { useCarousel } from "@/lib/hooks/useCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselContentProps {
  items: CarouselItem[];
  isLoading?: boolean;
  error?: Error | null;
}

function CarouselContent({
  items = [],
  isLoading = false,
  error = null,
}: CarouselContentProps) {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

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
    return <div className="hidden"></div>;
  }

  return (
    <div className="w-full max-w-4xl ">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-4">
            {item.href ? (
              <Link href={item.href}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="relative h-[30vh]">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-black">{item.description}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative h-[30vh]">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black">{item.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
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
    />
  );
}

export default function Carousel({ items }: { items?: CarouselItem[] } = {}) {
  if (items) {
    return <CarouselContent items={items} />;
  }
  return <CarouselWithData />;
}
