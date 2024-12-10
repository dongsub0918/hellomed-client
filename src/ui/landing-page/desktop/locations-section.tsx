import LocationsSection from "@/ui/locations-section";
import Footer from "@/ui/footer";
import FloatingElement from "@/ui/floating-element";

export default function DesktopLocationsSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center snap-start snap-always">
      <div className="min-h-screen flex flex-col w-full items-center justify-between">
        <FloatingElement>
          <p className="font-bold text-3xl lg:text-4xl xl:text-5xl pt-16 pb-8">
            Locations
          </p>
        </FloatingElement>
        <FloatingElement delay={0.2}>
          <LocationsSection appointmentLinks />
        </FloatingElement>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
}
