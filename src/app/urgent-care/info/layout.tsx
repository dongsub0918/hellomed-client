"use client";

import type { Metadata } from "next";
import "@/ui/globals.css";

export default function UrgentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-152px)]">
      {children}
    </div>
  );
}
