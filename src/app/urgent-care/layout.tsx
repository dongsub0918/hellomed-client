"use client";

import type { Metadata } from "next";
import "@/ui/globals.css";
import Navbar from "@/ui/navbar";

export default function UrgentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Navbar */}
      <Navbar theme="urgent" />

      {/* Main Content */}
      {children}

      {/* Footer: To be updated */}
    </div>
  );
}
