import MobileLandingSection from "@/ui/landing-page/mobile/landing-section";
import MobileLinksSection from "@/ui/landing-page/mobile/links-section";
import MobileLocationsSection from "@/ui/landing-page/mobile/locations-section";
import DesktopLandingSection from "@/ui/landing-page/desktop/landing-section";
import DesktopLinksSection from "@/ui/landing-page/desktop/links-section";
import DesktopLocationsSection from "@/ui/landing-page/desktop/locations-section";
import structuredData from "@/lib/content/structured-data";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to HELLOMED Walk-In Urgent Clinic in Ann Arbor. We provide accessible, convenient, and quality healthcare services for the community.",
  metadataBase: new URL("https://hello-med.com"),
};

export default function LandingPage() {
  return (
    <main>
      <Head>
        <title>
          HELLOMED | Walk-In Urgent Care & Primary Care in Ann Arbor
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        ></script>
      </Head>
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
