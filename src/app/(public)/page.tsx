import MobileLandingSection from "@/ui/landing-page/mobile/landing-section";
import MobileLinksSection from "@/ui/landing-page/mobile/links-section";
import MobileLocationsSection from "@/ui/landing-page/mobile/locations-section";
import DesktopLandingSection from "@/ui/landing-page/desktop/landing-section";
import DesktopLinksSection from "@/ui/landing-page/desktop/links-section";
import DesktopLocationsSection from "@/ui/landing-page/desktop/locations-section";
import structuredData from "@/lib/content/structured-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Urgent Care Ann Arbor-Saline Rd | Healthcare Solutions & After Hours Walk in Clinic | HELLOMED",
  description:
    "Looking for the best urgent care in Ann Arbor? HelloMed offers fast, affordable healthcare solutions at our walk-in clinics on Plymouth Rd & Ann Arbor-Saline Rd. Open after hours.",
  metadataBase: new URL("https://hello-med.com"),
};

export default function LandingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      ></script>
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
