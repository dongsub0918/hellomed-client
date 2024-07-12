import Image from "next/image";

export default function UrgentMainBackground() {
  return (
    <div className="relative max-h-[calc(100vh-152px)] overflow-hidden">
      <div className="-m-4">
        <Image
          className="brightness-75 blur-sm"
          src="/urgent-main-bg.jpg"
          alt="urgent main page top bg"
          height={4912}
          width={7360}
        />
      </div>

      {/* Container for logo and text */}
      <div className="absolute grid place-items-center inset-0">
        <div className="grid justify-items-center w-11/12 text-white">
          <Image
            className="w-2/12"
            src="/logo.png"
            alt="urgent landing page logo"
            height={300}
            width={300}
          />
          <h1 className="text-2xl md:text-5xl font-bold text-center md:mb-8">
            Accessibility, Convenience, and Quality Care.
          </h1>
          <h2 className="hidden md:block text-center text-2xl">
            We are here to serve the urgent healthcare needs of the Ann Arbor
            community and have been doing so since 2014. Our team of experienced
            medical professionals is committed to providing comprehensive care
            to individuals and families. We understand how important it is to
            have access to quality medical care, which is why we make it our
            priority to provide the best possible services for our patients.
            Visit us today and let us be a part of your healthcare experience.
          </h2>

          {/* Button to scroll down to next section */}
          <a className="hidden lg:block mt-8" href="#hours">
            <Image
              src="/down-arrow.svg"
              alt="down-arrow icon"
              height={50}
              width={50}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
