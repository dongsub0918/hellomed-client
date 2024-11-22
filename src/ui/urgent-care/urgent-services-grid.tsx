import Image from "next/image";
import Link from "next/link";

const urgentServices = [
  { name: "Minor Illness", src: "/urgent-service-0.jpg" },
  { name: "Minor Injuries", src: "/urgent-service-1.jpg" },
  { name: "Telemedicine", src: "/urgent-service-2.jpg" },
  { name: "Lab Services", src: "/urgent-service-3.jpg" },
  { name: "Imaging Services", src: "/urgent-service-4.jpg" },
  { name: "STD Testing", src: "/urgent-service-5.jpg" },
];

export default function UrgentServicesGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:gap-6 md:p-6 max-w-7xl mx-auto">
      {urgentServices.map(({ name, src }) => (
        <Link
          key={name}
          href="/"
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
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-30 flex items-center justify-center">
              <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-semibold px-2">
                {name}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
