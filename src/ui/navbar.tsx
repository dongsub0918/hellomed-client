import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { urgentNavBarItems, primaryNavBarItems } from "@/lib/navbar-items";
import { HamburgerX } from "@/ui/hamburger-x";
import {
  DesktopMenu,
  DesktopMenuItem,
  MobileMenu,
  MobileMenuItem,
} from "@/ui/navbar-components";

const fakeData = ["Nav1", "Nav2", "Nav3", "Nav4", "Nav5"];

export default function Navbar({ theme }: { theme: "urgent" | "primary" }) {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState(null);

  const navItems = {
    urgent: urgentNavBarItems,
    primary: primaryNavBarItems,
  };

  const bgVariants = {
    urgent: "bg-hmred",
    primary: "bg-green-400",
  };

  const darkBgVariants = {
    urgent: "bg-hmblue",
    primary: "bg-green-700",
  };

  const hoverBgVariants = {
    urgent: "hover:bg-slate-600",
    primary: "hover:bg-green-600",
  };

  return (
    <header
      className={`${bgVariants[theme]} text-white md:justify-between md:items-center md:px-4 md:py-3`}
    >
      {/* leftside of topbar */}
      <div className="flex items-center justify-between px-4 py-3 md:p-0">
        <div className="flex items-center">
          <div>
            <Link href={"/"}>
              <Image
                src="/logo.png"
                width={174}
                height={44}
                alt="Hellomed logo"
              />
            </Link>
          </div>
          <div className="hidden md:block ml-5 font-black text-4xl capitalize">
            {theme} care
          </div>
        </div>

        {/* right side of topbar */}
        <div>
          {/* mobile topbar rightside */}
          <div className="flex items-center md:hidden">
            <div
              className={`p-2 mr-4 text-center font-bold text-white rounded-lg ${darkBgVariants[theme]} shadow-lg`}
            >
              <Link href="/make-appointment"> BOOK NOW</Link>
            </div>
            <HamburgerX setNavOpen={setNavOpen} navOpen={navOpen} />
          </div>

          {/* desktop topbar rightside */}
          <div className="hidden md:block">
            <Link href="/make-appointment">
              <div
                className={`p-2 text-xl font-bold text-center rounded-lg ${darkBgVariants[theme]} ${hoverBgVariants[theme]} text-blue`}
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
      <div className="hidden md:block">
        <DesktopMenu setActive={setActive}>
          {navItems[theme].map((item, i) => (
            <DesktopMenuItem
              key={i}
              setActive={setActive}
              active={active}
              item={item}
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
              item={item}
            />
          ))}
        </MobileMenu>
      </div>
    </header>
  );
}
