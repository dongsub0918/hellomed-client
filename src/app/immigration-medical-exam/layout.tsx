"use client";

import "@/ui/globals.css";
import Footer from "@/ui/footer";

export default function AppointmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Main Content */}
      <div className="pb-10">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
