import { Metadata } from "next";
import PrimaryMainBackground from "@/ui/primary-care/main-background";
import { MobileHoursTable, DesktopHoursTable } from "@/ui/hours-table";
import PrimaryServicesSection from "@/ui/primary-care/services-section";
import PlusSign from "@/ui/urgent-care/plus-sign";
import ReviewsGrid from "@/ui/reviews-grid";
import LocationsSection from "@/ui/locations-section";

export const metadata: Metadata = {
  title: "Primary Care",
  description:
    "HELLOMED provides personalized, preventize, and continuous primary care. At our clinic, we believe in building long-term relationships with our patients to support their overall health and wellness. Since 2014, we have proudly served the Ann Arbor community with a focus on preventive care, chronic disease management, and comprehensive health services for all stages of life. Our dedicated team of medical professionals is here to help you achieve your health goals and provide the guidance you need to stay well. Schedule your visit today and experience healthcare designed for you and your family.",
  metadataBase: new URL("https://hello-med.com"),
};

export default function PrimaryHome() {
  return (
    <>
      {/* Main background image */}
      <PrimaryMainBackground />

      <section className="relative">
        {/* This invisible div is used to scroll to the hours section */}
        <div className="absolute mt-[-94px] md:mt-[-150px]" id="hours"></div>
        {/* Hours Section after image */}
        <div className="flex flex-col space-y-10 items-center pt-10">
          <PlusSign />
          <strong className="uppercase text-5xl md:text-7xl">
            Clinic Hours
          </strong>
          <p className="text-center text-lg md:text-2xl lg:text-4xl">
            (Last check-in time: 30 minutes before closing)
          </p>
          <div className="sm:hidden w-full px-1/12">
            <MobileHoursTable />
          </div>
          <div className="hidden sm:block w-full px-1/12">
            <DesktopHoursTable />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <PrimaryServicesSection />

      {/* Reviews Section */}
      <div className="grid justify-center justify-items-center pt-16 md:pt-32 gap-y-5 md:gap-y-10">
        <PlusSign />
        <strong className="uppercase text-center text-5xl md:text-7xl">
          Patient Reviews
        </strong>
        <p className="text-center text-3xl md:text-5xl lg:text-6xl text-gray-500">
          Based on Real Reviews
        </p>

        {/* Grid for services */}
        <ReviewsGrid />
      </div>

      {/* Location Section */}
      <div className="grid justify-center justify-items-center pt-16 md:pt-32 gap-y-5 md:gap-y-10">
        <PlusSign />
        <strong className="uppercase text-center text-5xl md:text-7xl">
          Locations
        </strong>
      </div>
      <div className="py-10"></div>
      <LocationsSection />
    </>
  );
}
