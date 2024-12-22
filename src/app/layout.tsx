import type { Metadata } from "next";
import "@/ui/globals.css";

// Update the metadata with a new title, favicon, and SEO enhancements
export const metadata: Metadata = {
  title: "HELLOMED Walk-In Urgent Clinic Ann Arbor",
  description:
    "HELLOMED is your trusted walk-in urgent care clinic in Ann Arbor. Visit us for fast, reliable medical care without an appointment.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "urgent care Ann Arbor",
    "walk-in clinic",
    "HELLOMED clinic",
    "urgent medical care",
    "Ann Arbor healthcare",
    "no appointment clinic",
    "medical services Ann Arbor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`relative antialiased text-gray-900 font-avenirNext`}>
        {children}
      </body>
    </html>
  );
}
