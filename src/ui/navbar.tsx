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
    urgent: "bg-red-400",
    primary: "bg-green-400",
  };

  const darkBgVariants = {
    urgent: "bg-red-700",
    primary: "bg-green-700",
  };

  const hoverBgVariants = {
    urgent: "hover:bg-red-600",
    primary: "hover:bg-green-600",
  };

  return (
    <header
      className={`${bgVariants[theme]} md:justify-between md:items-center md:px-4 md:py-3`}
    >
      {/* leftside of topbar */}
      <div className="flex items-center justify-between px-4 py-3 md:p-0">
        <div className="flex items-center">
          <div>
            <Link href={"/"}>
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="Hellomed logo"
              />
            </Link>
          </div>
          <div className="hidden md:block ml-5 text-white font-black text-4xl capitalize">
            {theme} care
          </div>
        </div>

        {/* right side of topbar */}
        <div>
          {/* mobile topbar rightside */}
          <div className="flex items-center md:hidden">
            <div
              className={`p-2 mr-4 text-white text-center rounded-lg ${darkBgVariants[theme]} shadow-lg`}
            >
              <Link href="/make-appointment"> BOOK NOW</Link>
            </div>
            <HamburgerX setNavOpen={setNavOpen} navOpen={navOpen} />
          </div>

          {/* desktop topbar rightside */}
          <div className="hidden md:block">
            <div
              className={`p-2 text-xl text-white text-center rounded-lg ${darkBgVariants[theme]} ${hoverBgVariants[theme]} shadow-lg`}
            >
              <Link href="/make-appointment"> WALK-IN OR BOOK ONLINE</Link>
            </div>
            <div className="p-2 mt-2 text-center rounded-lg bg-white shadow-lg">
              <Link href="/contact">CONTACT US</Link>
            </div>
          </div>
        </div>
      </div>

      {/* nav items for desktop view */}
      <div className="hidden md:block">
        <DesktopMenu setActive={setActive}>
          {navItems[theme].map((item) => (
            <DesktopMenuItem
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
          {navItems[theme].map((item) => (
            <MobileMenuItem setActive={setActive} active={active} item={item} />
          ))}
        </MobileMenu>
      </div>
    </header>
  );
}
