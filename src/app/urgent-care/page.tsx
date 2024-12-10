import UrgentMainBackground from "@/ui/urgent-care/main-background";
import { MobileHoursTable, DesktopHoursTable } from "@/ui/hours-table";
import UrgentServicesSection from "@/ui/urgent-care/services-section";
import ReviewsGrid from "@/ui/reviews-grid";
import PlusSign from "@/ui/urgent-care/plus-sign";
import LocationsSection from "@/ui/locations-section";

export default function UrgentHome({ navbarHeight }: { navbarHeight: number }) {
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
          <div className="md:hidden w-full px-1/12">
            <MobileHoursTable />
          </div>
          <div className="hidden md:block w-full px-1/12">
            <DesktopHoursTable />
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
