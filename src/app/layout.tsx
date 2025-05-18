import type { Metadata } from "next";
import "@/ui/globals.css";

export const metadata: Metadata = {
  title: "HELLOMED Walk-In Urgent Clinic Ann Arbor",
  description:
    "HELLOMED is your trusted walk-in urgent care clinic in Ann Arbor. Visit us for fast, reliable medical care without an appointment.",
  metadataBase: new URL("https://hello-med.com"),
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "urgent care ann arbor",
    "ann arbor walk in clinic",
    "clinic ann arbor",
    "urgent care plymouth rd",
    "clinics in ann arbor mi",
    "after hours clinic ann arbor",
    "healthcare solutions ann arbor mi",
    "health clinic ann arbor",
    "healthcare solutions ann arbor",
    "walk in clinic ann arbor",
    "best urgent care ann arbor",
    "urgent care clinic ann arbor",
    "urgent care ann arbor-saline rd",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="relative antialiased text-gray-900 font-avenirNext">
        {children}
      </body>
    </html>
  );
}
