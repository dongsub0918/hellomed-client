"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselItem {
  imageSrc: string;
  title: string;
  description: string;
}

const carouselItems: CarouselItem[] = [
  {
    imageSrc: "/carousel/carousel-temp-0.jpg",
    title: "Free Health Screening",
    description:
      "Join us for our annual free health screening event this Saturday.",
  },
  {
    imageSrc: "/carousel/carousel-temp-1.jpg",
    title: "Flu Shot Clinic",
    description:
      "Get your flu shot at our upcoming clinic. Protect yourself and your community.",
  },
  {
    imageSrc: "/carousel/carousel-temp-2.jpg",
    title: "Diabetes Awareness Workshop",
    description:
      "Learn about diabetes prevention and management at our informative workshop.",
  },
  // Add more items as needed
];

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <div className="w-full max-w-4xl ">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-[30vh]">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-black">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
