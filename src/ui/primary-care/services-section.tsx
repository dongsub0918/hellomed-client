import PlusSign from "@/ui/urgent-care/plus-sign";
import Image from "next/image";
import Link from "next/link";

const primaryServices = [
  {
    name: "Physical Exam",
    src: "/primary-service-0.jpg",
    href: "/primary-care/physical-exam/annual-physical",
  },
  {
    name: "STD Testing",
    src: "/primary-service-1.jpg",
    href: "primary-care/std-testing",
  },
  {
    name: "Screening Test",
    src: "/primary-service-2.jpg",
    href: "/primary-care/screening-test/depression-screening",
  },
  {
    name: "Lab Services",
    src: "/primary-service-3.jpg",
    href: "/primary-care/lab-services",
  },
  {
    name: "Imaging Services",
    src: "/primary-service-4.jpg",
    href: "/primary-care/imaging-services",
  },
  {
    name: "IV Infusion",
    src: "/primary-service-5.jpg",
    href: "/primary-care/iv-infusion",
  },
];

export default function PrimaryServicesSection() {
  return (
    <div className="grid justify-center justify-items-center pt-16 md:pt-32 gap-y-5 md:gap-y-10">
      <PlusSign />
      <strong className="uppercase text-center text-5xl md:text-7xl">
        Services
      </strong>
      <p className="text-center text-2xl md:text-5xl text-gray-500">
        Providing Quality Healthcare
      </p>

      {/* Grid for services */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:gap-6 md:p-6 max-w-7xl mx-auto">
        {primaryServices.map(({ name, src, href }) => (
          <Link
            key={name}
            href={href}
            className="block relative rounded-lg overflow-hidden group"
          >
            <div className="aspect-square relative">
              <Image
                src={src}
                alt={name}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-60 flex items-center justify-center">
                <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-semibold px-2">
                  {name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
