import Image from "next/image";
import FloatingElement from "../../floating-element";
import { ChevronDown } from "lucide-react";
import styles from "@/ui/landing-page/landing.module.css";

export default function MobileLandingSection() {
  return (
    <section className="min-h-100svh w-full flex flex-col items-center snap-start snap-always">
      <div className="relative w-full">
        <FloatingElement>
          <div className="w-full relative h-[150px]">
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
        <div className="flex w-full pt-5">
          <Image src="/logo.png" alt="Company Logo" width={200} height={100} />
        </div>
      </FloatingElement>

      <div className="h-full">
        <FloatingElement delay={0.4}>
          <h1 className="text-center text-lg font-semibold pt-2">
            Urgent Care Clinic Ann Arbor - Medical Attention You Can Rely On
          </h1>
        </FloatingElement>
        <FloatingElement delay={0.6}>
          <p className="text-center text-sm/5 pt-8 px-4">
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
          <div className="flex justify-center pt-16">
            <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
          </div>
        </FloatingElement>
      </div>
    </section>
  );
}
