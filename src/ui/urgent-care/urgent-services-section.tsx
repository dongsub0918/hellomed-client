import PlusSign from "@/ui/urgent-care/plus-sign";
import UrgentServicesGrid from "./urgent-services-grid";

export default function UrgentServicesSection() {
  return (
    <div className="grid justify-center justify-items-center pt-16 md:pt-32 gap-y-5 md:gap-y-10">
      <PlusSign />
      <strong className="uppercase text-center text-5xl md:text-7xl">
        Services
      </strong>
      <p className="text-center text-3xl text-gray-500">
        Providing Quality Healthcare
      </p>

      {/* Grid for services */}
      <UrgentServicesGrid />
    </div>
  );
}
