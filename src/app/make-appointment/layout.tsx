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
      <Navbar theme="urgent" />

      {/* Main Content */}
      <div className="flex flex-col justify-center mt-[68px] md:mt-[152px] min-h-[600px] py-10">
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
