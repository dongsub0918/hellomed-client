"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { landingItems } from "@/lib/landing-items";
import MiniNav from "@/ui/landing-page/mininav";
import QuickLinks from "@/ui/landing-page/quick-links";

export default function DesktopLandingPage() {
  const [active, setActive] = useState("about");

  return (
    <div className="flex w-screen h-screen p-5">
      {/* Left Container for contents */}
      <div className="w-8/12 pr-4">
        {/* Mini navbar */}
        <div className="h-1/12">
          <MiniNav landingItems={landingItems} setActive={setActive} />
        </div>

        {/* Contents + Buttons Container */}
        <div className="h-10/12 grid content-between 2xl:flex 2xl:">
          {/* Contents */}
          <div className="2xl:w-7/12 2xl:place-self-center">
            <div className="p-5 whitespace-pre-line text-center">
              {landingItems[active as keyof typeof landingItems].text}
            </div>
          </div>

          {/* Quick Links */}
          <div className="2xl:w-5/12 2xl:place-self-center">
            <QuickLinks />
          </div>
        </div>

        {/* Footer Container */}
        <div className="h-1/12 text-center uppercase font-semibold">
          Footer placeholder
        </div>
      </div>

      {/* Right Container for image */}
      <div className="w-4/12 rounded-lg shadow-xl overflow-hidden">
        <Image
          className="object-fill w-full h-full"
          src="/landing-desktop.jpg"
          alt="landing page image"
          width={4000}
          height={4000}
        />
      </div>
    </div>
  );
}
