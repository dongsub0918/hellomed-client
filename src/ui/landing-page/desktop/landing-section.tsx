import Image from "next/image";
import FloatingElement from "@/ui/floating-element";
import { ChevronDown } from "lucide-react";

export default function DesktopLandingSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center snap-start snap-always">
      <div className="relative w-full">
        <FloatingElement>
          <div className="w-full relative h-[40vh] lg:h-[50vh]">
            <Image
              src="/landing-img.webp"
              alt="landing image from original site"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </FloatingElement>
      </div>
      <div className="h-full flex flex-col items-center pt-8 gap-y-8 xl:gap-y-10">
        <FloatingElement delay={0.2}>
          <div className="w-full">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={300}
              height={150}
            />
          </div>
        </FloatingElement>

        <div className="flex flex-col h-full items-center justify-between my-10">
          <FloatingElement delay={0.4}>
            <p className="text-center font-semibold text-2xl lg:text-3xl xl:text-4xl">
              Medical Attention You Can Rely On
            </p>
          </FloatingElement>
          <FloatingElement delay={0.6}>
            <p className="text-center px-4 text-lg lg:text-xl">
              HELLOMED Walk-in Clinic is a neighborhood-focused clinic dedicated
              to providing medical care in an accessible and convenient way. We
              are here to serve the urgent healthcare needs of the Ann Arbor
              community and have been doing so since 2014. Our team of
              experienced medical professionals is committed to providing
              comprehensive care to individuals and families. We understand how
              important it is to have access to quality medical care, which is
              why we make it our priority to provide the best possible services
              for our patients. Visit us today and let us be a part of your
              healthcare experience.
            </p>
          </FloatingElement>
          <FloatingElement delay={0.8}>
            <div className="flex justify-center">
              <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
            </div>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
}
