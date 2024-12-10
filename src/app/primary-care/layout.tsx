import type { Metadata } from "next";
import "@/ui/globals.css";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";

export default function PrimaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Navbar */}
      <Navbar theme="primary" />

      {/* Main Content */}
      <div className="mt-[68px] md:mt-[162px]">{children}</div>

      <Footer />
    </div>
  );
}
