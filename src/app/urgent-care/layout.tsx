"use client";

import type { Metadata } from "next";
import "@/ui/globals.css";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";

export default function UrgentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar theme="urgent" />
      </div>

      {/* Main Content */}
      <div className="mt-[68px] md:mt-[152px]">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
