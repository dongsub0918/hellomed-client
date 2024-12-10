import LocationsSection from "@/ui/locations-section";
import Footer from "@/ui/footer";
import FloatingElement from "@/ui/floating-element";

export default function MobileLocationsSection() {
  return (
    <section className="w-full flex flex-col items-center snap-start snap-always">
      <FloatingElement>
        <p className="font-bold text-3xl pt-16 pb-8">Locations</p>
      </FloatingElement>
      <FloatingElement delay={0.2}>
        <LocationsSection appointmentLinks />
      </FloatingElement>
      <Footer />
    </section>
  );
}
