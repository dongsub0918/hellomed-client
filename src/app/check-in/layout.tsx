"use client";

import type { Metadata } from "next";
import "@/ui/globals.css";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";

export default function AppointmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar theme="urgent" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center mt-[68px] md:mt-[152px] min-h-[600px] sm:py-10">
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
