import Image from "next/image";
import Link from "next/link";

export default function UrgentServicesGrid() {
  const fakeUrgentServices = [
    "/urgent-service-0.jpg",
    "/urgent-service-1.jpg",
    "/urgent-service-2.jpg",
    "/urgent-service-3.jpg",
    "/urgent-service-4.jpg",
    "/urgent-service-5.jpg",
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-3 md:gap-6 md:px-6 justify-items-center w-screen ">
      {fakeUrgentServices.map((service: string) => (
        <Link href="/">
          <div className="relative md:hover:brightness-150">
            <Image
              className="rounded-lg brightness-50"
              src={`${service}`}
              alt={`${service}`}
              width={1000}
              height={1000}
            />
            <div className="absolute grid place-items-center inset-0">
              <p className="text-white text-xl md:text-3xl font-thin md:font-semibold">
                {`${service.split("/")[1].split(".")[0]}`}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
