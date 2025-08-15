import MobileLandingSection from "@/ui/landing-page/mobile/landing-section";
import MobileLinksSection from "@/ui/landing-page/mobile/links-section";
import MobileLocationsSection from "@/ui/landing-page/mobile/locations-section";
import DesktopLandingSection from "@/ui/landing-page/desktop/landing-section";
import DesktopLinksSection from "@/ui/landing-page/desktop/links-section";
import DesktopLocationsSection from "@/ui/landing-page/desktop/locations-section";

import { Metadata } from "next";
import homeStructuredData from "@/lib/content/structured-data/home";

export const metadata: Metadata = {
  title: "Top Rated Urgent Care Ann Arbor Michigan | Walk in Clinic | HELLOMED",
  description:
    "Looking for the best urgent care in Ann Arbor? HelloMed offers fast, affordable healthcare solutions at our walk-in clinics on Plymouth Rd & Ann Arbor-Saline Rd. Open after hours.",
  metadataBase: new URL("https://www.hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com",
  },
  openGraph: {
    title: "Best Urgent Care Ann Arbor-Saline Rd | HELLOMED",
    description:
      "Looking for the best urgent care in Ann Arbor? HelloMed offers fast, affordable healthcare solutions at our walk-in clinics on Plymouth Rd & Ann Arbor-Saline Rd. Open after hours.",
    url: "https://www.hello-med.com",
    siteName: "HELLOMED Urgent Care",
    images: [
      {
        url: "https://www.hello-med.com/landing-img.webp",
        width: 1200,
        height: 630,
        alt: "HELLOMED Urgent Care Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Urgent Care Ann Arbor-Saline Rd | HELLOMED",
    description:
      "Looking for the best urgent care in Ann Arbor? HelloMed offers fast, affordable healthcare solutions.",
    images: ["https://www.hello-med.com/landing-img.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LandingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
      <div className="sm:hidden h-screen overflow-y-auto snap-y snap-mandatory">
        <MobileLandingSection />
        <section className="h-screen w-full flex flex-col items-center">
          <div className="h-full w-full bg-white"></div>
        </section>
        <section className="h-screen w-full flex flex-col items-center">
          <div className="h-full w-full bg-gradient-to-b from-white to-hmblack"></div>
        </section>
        <MobileLinksSection />
        <section className="h-screen w-full flex flex-col items-center">
          <div className="h-full w-full bg-hmblack"></div>
        </section>
        <section className="h-screen w-full flex flex-col items-center">
          <div className="h-full w-full bg-gradient-to-b from-hmblack to-white"></div>
        </section>
        <MobileLocationsSection />
      </div>

      <div className="hidden sm:block h-screen overflow-y-auto snap-y snap-mandatory">
        <DesktopLandingSection />
        <section className="h-screen w-full flex flex-col items-center">
          <div className="h-full w-full bg-white"></div>
        </section>
        <section className="h-screen w-full flex flex-col items-center">
          <div className="h-full w-full bg-gradient-to-b from-white to-hmblack"></div>
        </section>
        <DesktopLinksSection />
        <section className="h-screen w-full flex flex-col items-center">
          <div className="h-full w-full bg-hmblack"></div>
        </section>
        <section className="h-screen w-full flex flex-col items-center">
          <div className="h-full w-full bg-gradient-to-b from-hmblack to-white"></div>
        </section>
        <DesktopLocationsSection />
      </div>
    </main>
  );
}
