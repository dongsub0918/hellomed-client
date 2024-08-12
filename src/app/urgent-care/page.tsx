import UrgentMainBackground from "@/ui/urgent-care/main-background";
import HoursTable from "@/ui/hours-table";
import UrgentServicesSection from "@/ui/urgent-care/urgent-services-section";
import PlusSign from "@/ui/urgent-care/plus-sign";
import UrgentReviewsGrid from "@/ui/urgent-care/urgent-reviews-grid";
import LocationsSection from "@/ui/locations-section";

export default function UrgentHome() {
  return (
    <>
      {/* Main background image */}
      <UrgentMainBackground />

      <div className="relative">
        <div
          className="absolute invisible top-[-176px] min-[1285px]:top-[-152px]"
          id="hours"
        />

        {/* Hours Section after image */}
        {/* Wrapper div needed to mark location within screen */}
        <div className="md:h-[calc(100vh-176px)] min-[1285px]:h-[calc(100vh-152px)] grid justify-center justify-items-center pt-16 md:pt-5 gap-y-5 md:gap-y-10">
          <PlusSign />
          <strong className="uppercase text-center text-5xl md:text-7xl">
            Clinic Hours
          </strong>
          <p className="text-center text-lg">
            (Last check-in time: 30 minutes before closing)
          </p>
          <HoursTable />
        </div>
      </div>

      {/* Services Section */}
      <UrgentServicesSection />

      {/* Reviews Section */}
      <div className="grid justify-center justify-items-center pt-16 md:pt-32 gap-y-5 md:gap-y-10">
        <PlusSign />
        <strong className="uppercase text-center text-5xl md:text-7xl">
          Patient Reviews
        </strong>
        <p className="text-center text-3xl text-gray-500">
          Based on Real Reviews
        </p>

        {/* Grid for services */}
        <UrgentReviewsGrid />
      </div>

      {/* Location Section */}
      <div className="grid justify-center justify-items-center pt-16 md:pt-32 gap-y-5 md:gap-y-10">
        <PlusSign />
        <strong className="uppercase text-center text-5xl md:text-7xl">
          Locations
        </strong>
        <p className="text-center text-3xl text-gray-500">
          Three Locations Available
        </p>
      </div>
      <LocationsSection />
    </>
  );
}
