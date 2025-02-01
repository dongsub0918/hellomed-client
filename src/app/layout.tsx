import type { Metadata } from "next";
import "@/ui/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | HELLOMED Walk-In Urgent Clinic",
    default: "HELLOMED Walk-In Urgent Clinic Ann Arbor",
  },
  description:
    "HELLOMED is your trusted walk-in urgent care clinic in Ann Arbor. Visit us for fast, reliable medical care without an appointment.",
  metadataBase: new URL("https://hello-med.com"),
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "urgent care near me",
    "primary care near me",
    "urgent care Ann Arbor",
    "primary care Ann Arbor",
    "walk-in clinic",
    "budget clinic",
    "HELLOMED clinic",
    "urgent medical care",
    "primary medical care",
    "Ann Arbor healthcare",
    "no appointment clinic",
    "medical services Ann Arbor",
    "immigration medical exam",
    "625 E Liberty St, Ann Arbor",
    "2731 Plymouth Rd, Ann Arbor",
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
