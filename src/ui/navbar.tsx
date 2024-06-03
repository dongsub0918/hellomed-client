import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { urgentNavBarItems, primaryNavBarItems } from "@/lib/nav-items";
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

  const hoverBgVariants = {
    urgent: "hover:bg-red-300",
    primary: "hover:bg-green-300",
  };

  return (
    <header
      className={`${bgVariants[theme]} md:flex md:justify-between md:items-center md:px-4 md:py-3`}
    >
      {/* link with logo heading to homepage */}
      <div className="flex items-center justify-between px-4 py-3 md:p-0">
        <div>
          <Link href={"/"}>
            <Image
              src="/logo.png"
              width={80}
              height={80}
              className=""
              alt="Hellomed logo"
            />
          </Link>
        </div>

        {/* div for hamburger / x icon on mobile view */}
        <div className="md:hidden">
          <button
            className="rounded text-white outline-none"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {navOpen ? (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
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
