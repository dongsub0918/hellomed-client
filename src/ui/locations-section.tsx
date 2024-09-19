import React from "react";
import LocationCard from "./locations-card";
import Link from "next/link";

const locations = [
  {
    name: "Central Campus",
    imageUrl: "central-location.png",
    mapUrl:
      "https://www.google.com/maps/place/HELLOMED+CENTRAL/@42.2794416,-83.742861,17.41z/data=!3m1!5s0x883cae40822b66c1:0xa12c8057c45fcd20!4m6!3m5!1s0x883cafdbcba9f80d:0xe73623ae4cab907e!8m2!3d42.2794509!4d-83.7411722!16s%2Fg%2F11qf_v5z15?entry=ttu",
    appointmentUrl:
      "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3SM4T4VUSf9RCco2MOkbKpz4_35vef15Qhw0PQo-SyP90QFheEs0KpHzfAAQD5cDXGRtFY03aQ",
  },
  {
    name: "North Campus",
    imageUrl: "north-location.png",
    mapUrl:
      "https://www.google.com/maps/place/HELLOMED+North/@42.3037993,-83.7089182,16.7z/data=!3m1!5s0x883cac265eb73f1f:0xe91c7cb229ccc520!4m6!3m5!1s0x883cac2654df9761:0x82dccbb38ec4cca!8m2!3d42.3036726!4d-83.7063491!16s%2Fg%2F1pt_kvcq7?entry=ttu",
    appointmentUrl:
      "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2z_oHKUDu60Ukyi0iV_g1Uh1DAAXLsYxsTUSBEbGQfFdwv7Fm-voKsgUkaivINza6VjKjqDclU",
  },
  {
    name: "Meijer's",
    imageUrl: "urgent-service-0.jpg",
    mapUrl: "https://www.google.com/maps/place/Location3",
    appointmentUrl:
      "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3udfzyTlb1R9K390lypdgyEZ1J61ogCpzVgxnXAsDBbN7ztxTRk1zh2hzN2f2Lj6WWlftx2tbw",
  },
];

interface LocationsSectionProps {
  appointmentLinks?: boolean;
}

export default function LocationsSection({
  appointmentLinks = false,
}: LocationsSectionProps) {
  return (
    <section className="px-6 w-full mt-10 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location, index) => (
          <div key={index} className="flex flex-col">
            <LocationCard
              name={location.name}
              imageUrl={location.imageUrl}
              mapUrl={location.mapUrl}
            />
            {appointmentLinks && location.appointmentUrl && (
              <Link
                href={location.appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-center text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out"
              >
                Book Appointment
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
