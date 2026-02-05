"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  urgentNavBarItems,
  primaryNavBarItems,
} from "@/lib/content/navbar-items";
import { HamburgerX } from "@/ui/hamburger-x";
import {
  DesktopMenu,
  DesktopMenuItem,
  MobileMenu,
  MobileMenuItem,
} from "@/ui/navbar-components";

export default function Navbar({ theme }: { theme: "urgent" | "primary" }) {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState(null);

  const navItems = {
    urgent: urgentNavBarItems,
    primary: primaryNavBarItems,
  };

  const bgVariants = {
    urgent: "bg-hmred",
    primary: "bg-hmgreen-dark",
  };

  const darkBgVariants = {
    urgent: "bg-hmblue",
    primary: "bg-hmblack",
  };

  const hoverBgVariants = {
    urgent: "hover:bg-slate-600",
    primary: "hover:bg-slate-600",
  };

  return (
    <header
      className={`${bgVariants[theme]} text-white md:justify-between md:items-center fixed top-0 left-0 right-0 z-50`}
    >
      {/* leftside of topbar */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <div>
            <Link href={"/"}>
              <Image
                src="/logo-prev.png"
                width={174}
                height={44}
                alt="Hellomed logo"
              />
            </Link>
          </div>
          <Link
            href={`/${theme}-care`}
            className="hidden md:block ml-5 font-black text-4xl capitalize"
          >
            {theme} care
          </Link>
        </div>

        {/* right side of topbar */}
        <div>
          {/* mobile topbar rightside */}
          <div className="flex justify-between items-center md:hidden">
            <Link
              className={`p-2 mr-2 text-center font-bold text-white rounded-lg ${darkBgVariants[theme]} shadow-lg`}
              href="/make-appointment"
            >
              {" "}
              BOOK NOW
            </Link>
            <HamburgerX setNavOpen={setNavOpen} navOpen={navOpen} />
          </div>

          {/* desktop topbar rightside */}
          <div className="hidden md:block">
            <Link href="/make-appointment">
              <div
                className={`p-2 text-lg font-bold text-center rounded-lg ${darkBgVariants[theme]} ${hoverBgVariants[theme]} text-blue`}
              >
                WALK-IN OR BOOK ONLINE
              </div>
            </Link>
            <Link href="/contact">
              <div className="p-2 mt-2 text-center font-bold rounded-lg bg-white text-black">
                CONTACT US
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* nav items for desktop view */}
      <div className="hidden md:block static px-2">
        <DesktopMenu setActive={setActive}>
          {navItems[theme].map((item, i) => (
            <DesktopMenuItem
              key={i}
              setActive={setActive}
              active={active}
              item={item}
              bgColor={bgVariants[theme]}
            />
          ))}
        </DesktopMenu>
      </div>

      {/* nav items for mobile view */}
      <div className="block md:hidden">
        <MobileMenu setActive={setActive} navOpen={navOpen}>
          {navItems[theme].map((item, i) => (
            <MobileMenuItem
              key={i}
              setActive={setActive}
              active={active}
              navOpen={navOpen}
              setNavOpen={setNavOpen}
              item={item}
            />
          ))}
        </MobileMenu>
      </div>
    </header>
  );
}
