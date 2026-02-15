"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/ui/footer";
import LandingNavbar from "@/ui/landing-page/navbar";

const ROUTES_WITH_OWN_LAYOUT = ["/primary-care", "/urgent-care"];

export default function PublicLayoutShell({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const shouldHideShell = ROUTES_WITH_OWN_LAYOUT.some((route) =>
    pathname.startsWith(route)
  );

  if (shouldHideShell) {
    return <>{children}</>;
  }

  return (
    <>
      <LandingNavbar />
      {children}
      <Footer />
    </>
  );
}
