"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { landingItems } from "@/lib/landing-items";
import MiniNav from "@/ui/landing-page/mininav";
import QuickLinks from "./quick-links";

export default function MobileLandingPage() {
  const [active, setActive] = useState("about");

  return (
    // Wrapper div for adjusting size according to the screen size
    <div className="grid h-screen w-screen content-center">
      {/* Wrapper div for adjusting width */}
      <div className="justify-self-center w-11/12">
        {/* Mini nav bar for About, Hours, Locations */}
        <div className="py-3">
          <MiniNav landingItems={landingItems} setActive={setActive} />
        </div>

        {/* Container for image card itself, modify for boundaries */}
        <div className="border rounded-lg shadow-lg shadow-slate-400 overflow-hidden">
          {/* Image container */}
          <div className="relative pb-5/12">
            <Image
              className="absolute w-full h-full object-cover object-top"
              src="/landing-mobile.jpg"
              alt="landing page image"
              width={4000}
              height={4000}
            />
          </div>

          {/* Text container */}
          <div className="relative pb-8/12 sm:pb-6/12 overflow-y-auto">
            <div className="absolute w-full h-full p-5 whitespace-pre-line">
              {landingItems[active as keyof typeof landingItems].text}
            </div>
          </div>

          {/* Quick Links container */}
          <div className="px-5">
            <QuickLinks />
          </div>

          {/* Footer container */}
          <div className="text-center uppercase font-semibold">
            {" "}
            Footer placeholder{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
