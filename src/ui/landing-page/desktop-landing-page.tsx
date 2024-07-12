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
    <div className="flex w-screen h-screen p-5 2xl:p-10">
      {/* Left Container for contents */}
      <div className="w-8/12 pr-4 2xl:p-10">
        {/* Mini navbar */}
        <div className="h-1/12">
          <MiniNav landingItems={landingItems} setActive={setActive} />
        </div>

        {/* Contents + Buttons Container */}
        <div className="h-10/12 grid content-between 2xl:flex">
          {/* Contents */}
          <div className="2xl:w-7/12 2xl:place-self-center">
            <div className="p-5 whitespace-pre-line text-center">
              {landingItems[active as keyof typeof landingItems].content}
            </div>

            {/* Open link on new tab - for future use in location component */}
            {/* <div className="text-center">
              <Link
                href="https://www.google.com/maps/place/HELLOMED+CENTRAL/@42.2793874,-83.7428781,17z/data=!3m1!5s0x883cae40822b66c1:0xa12c8057c45fcd20!4m6!3m5!1s0x883cafdbcba9f80d:0xe73623ae4cab907e!8m2!3d42.2794509!4d-83.7411722!16s%2Fg%2F11qf_v5z15?entry=ttu"
                passHref
                legacyBehavior
              >
                <a target="_blank">Central Location</a>
              </Link>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="2xl:w-5/12 2xl:place-self-center">
            <QuickLinks />
          </div>
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
