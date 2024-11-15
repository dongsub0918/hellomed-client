"use client";

import type { Metadata } from "next";
import "@/ui/globals.css";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";

export default function AcuteConditionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-[68px] md:mt-[152px]">
      <div className="sm:py-10">{children}</div>
    </div>
  );
}
