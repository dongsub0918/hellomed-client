import Image from "next/image";

export default function PrimaryMainBackground() {
  return (
    <div className="relative max-h-[calc(100vh-162px)] overflow-hidden">
      <div className="-m-4">
        <Image
          className="brightness-75 blur-sm"
          src="/primary-main-bg.jpg"
          alt="urgent main page top bg"
          height={4912}
          width={7360}
        />
      </div>

      {/* Container for logo and text */}
      <div className="absolute grid place-items-center inset-0">
        <div className="grid justify-items-center w-11/12 text-white">
          <h1 className="font-black text-center md:mb-8 mt-4 text-2xl md:text-2xl lg:text-5xl">
            Personalized, Preventive, and Continuous Care.
          </h1>
          <h2 className="hidden md:block text-center font-black md:text-xl lg:text-2xl">
            At our clinic, we believe in building long-term relationships with
            our patients to support their overall health and wellness. Since
            2014, we have proudly served the Ann Arbor community with a focus on
            preventive care, chronic disease management, and comprehensive
            health services for all stages of life. Our dedicated team of
            medical professionals is here to help you achieve your health goals
            and provide the guidance you need to stay well. Schedule your visit
            today and experience healthcare designed for you and your family.
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
