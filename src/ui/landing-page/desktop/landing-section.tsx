import Image from "next/image";
import FloatingElement from "@/ui/floating-element";
import { ChevronDown } from "lucide-react";
import styles from "@/ui/landing-page/landing.module.css";

export default function DesktopLandingSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center snap-start snap-always">
      <div className="relative w-full justify-center">
        <FloatingElement>
          <div className="w-full relative h-[40vh] lg:h-[50vh] lg:max-w-10/12 mx-auto">
            <Image
              src="/landing-img.webp"
              alt="landing image from original site"
              layout="fill"
              objectFit="cover"
              priority
              className={styles["object-position-top"]}
            />
          </div>
        </FloatingElement>
      </div>
      <FloatingElement delay={0.2}>
        <div className="w-full">
          <Image src="/logo.png" alt="Company Logo" width={300} height={150} />
        </div>
      </FloatingElement>

      <div className="h-full flex flex-col items-center justify-between py-10">
        <FloatingElement delay={0.4}>
          <h1 className="text-center font-semibold text-2xl lg:text-3xl xl:text-4xl">
            Urgent Care Clinic Ann Arbor - Medical Attention You Can Rely On
          </h1>
        </FloatingElement>

        <FloatingElement delay={0.6}>
          <p className="text-center px-4 text-lg lg:text-xl">
            HELLOMED Walk-in Clinic is a neighborhood-focused clinic dedicated
            to providing medical care in an accessible and convenient way. We
            are here to serve the urgent healthcare needs of the Ann Arbor
            community and have been doing so since 2014. Our team of experienced
            medical professionals is committed to providing comprehensive care
            to individuals and families. We understand how important it is to
            have access to quality medical care, which is why we make it our
            priority to provide the best possible services for our patients.
            Visit us today and let us be a part of your healthcare experience.
          </p>
        </FloatingElement>

        <FloatingElement delay={0.8}>
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </FloatingElement>
      </div>
    </section>
  );
}
