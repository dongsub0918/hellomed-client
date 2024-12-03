import PrimaryMainBackground from "@/ui/primary-care/main-background";
import { MobileHoursTable, DesktopHoursTable } from "@/ui/hours-table";
import PrimaryServicesSection from "@/ui/primary-care/services-section";
import PlusSign from "@/ui/urgent-care/plus-sign";
import ReviewsGrid from "@/ui/reviews-grid";
import LocationsSection from "@/ui/locations-section";

export default function PrimaryHome() {
  return (
    <>
      {/* Main background image */}
      <PrimaryMainBackground />

      <div className="relative">
        <div
          className="absolute invisible top-[-176px] min-[1285px]:top-[-152px]"
          id="hours"
        />

        {/* Hours Section after image */}
        {/* Wrapper div needed to mark location within screen */}
        <div className="md:h-[calc(100vh-176px)] min-[1285px]:h-[calc(100vh-152px)] grid justify-center justify-items-center pt-16 md:pt-5 gap-y-5 md:gap-y-10">
          <PlusSign />
          <strong className="uppercase text-center text-5xl md:text-7xl lg:text-9xl">
            Clinic Hours
          </strong>
          <p className="text-center text-xl md:text-2xl lg:text-4xl">
            (Last check-in time: 30 minutes before closing)
          </p>
          <div className="sm:hidden">
            <MobileHoursTable />
          </div>
          <div className="hidden sm:block">
            <DesktopHoursTable />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <PrimaryServicesSection />

      {/* Reviews Section */}
      <div className="grid justify-center justify-items-center pt-16 md:pt-32 gap-y-5 md:gap-y-10">
        <PlusSign />
        <strong className="uppercase text-center text-5xl md:text-7xl lg:text-8xl">
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
        <strong className="uppercase text-center text-5xl md:text-7xl lg:text-9xl">
          Locations
        </strong>
      </div>
      <LocationsSection />
    </>
  );
}
