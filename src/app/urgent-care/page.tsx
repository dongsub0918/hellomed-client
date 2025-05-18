import { Metadata } from "next";
import UrgentMainBackground from "@/ui/urgent-care/main-background";
import UrgentServicesSection from "@/ui/urgent-care/services-section";
import ReviewsGrid from "@/ui/reviews-grid";
import PlusSign from "@/ui/urgent-care/plus-sign";
import LocationsSection from "@/ui/locations-section";
import HoursTable from "@/ui/hours-table";

export const metadata: Metadata = {
  title: "Urgent Care",
  description:
    "HELLOMED provides accessibility, convenience, and quality urgent care. We are here to serve the urgent healthcare needs of the Ann Arbor community and have been doing so since 2014. Our team of experienced medical professionals is committed to providing comprehensive care to individuals and families. We understand how important it is to have access to quality medical care, which is why we make it our priority to provide the best possible services for our patients. Visit us today and let us be a part of your healthcare experience.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com/urgent-care",
  },
};

export default function UrgentHome() {
  return (
    <>
      {/* Main background image */}
      <UrgentMainBackground />

      <section className="relative">
        {/* This invisible div is used to scroll to the hours section */}
        <div className="absolute mt-[-94px] md:mt-[-150px]" id="hours"></div>
        {/* Hours Section after image */}
        <div className="flex flex-col space-y-10 items-center pt-10">
          <PlusSign />
          <strong className="uppercase text-center text-5xl md:text-7xl">
            Clinic Hours
          </strong>
          <p className="text-center text-lg md:text-2xl lg:text-4xl">
            (Last check-in time: 30 minutes before closing)
          </p>
          <div className="w-full px-1/12">
            <HoursTable />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <UrgentServicesSection />

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
      <div className="py-10">
        <LocationsSection />
      </div>
    </>
  );
}
