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
    imageSrc: "/carousel/flu-shot-clinic.jpg",
    title: "Flu Shot Clinic",
    description:
      "Get your flu shot at our upcoming clinic. Protect yourself and your community.",
  },
  {
    imageSrc: "/carousel/pediatric-urgent-care.png",
    title: "Pediatric Urgent Care",
    description:
      "Comprehensive urgent care services tailored for your little ones, available when you need them most.",
  },
  {
    imageSrc: "/carousel/USCIS-immigration-medical-exam.jpg",
    title: "USCIS Immigration Medical Exam",
    description:
      "Streamline your immigration process with our certified medical examination services.",
  },
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
          </div>
        ))}
      </Slider>
    </div>
  );
}
