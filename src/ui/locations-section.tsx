import React from "react";
import LocationCard from "./locations-card";
import Link from "next/link";

const locations = [
  {
    name: "HELLOMED Central",
    imageUrl: "central-location.png",
    mapUrl:
      "https://www.google.com/maps/place/HELLOMED+CENTRAL/@42.2794416,-83.742861,17.41z/data=!3m1!5s0x883cae40822b66c1:0xa12c8057c45fcd20!4m6!3m5!1s0x883cafdbcba9f80d:0xe73623ae4cab907e!8m2!3d42.2794509!4d-83.7411722!16s%2Fg%2F11qf_v5z15?entry=ttu",
    appointmentUrl:
      "https://calendar.google.com/calendar/u/0/appointments/AcZssZ1ShT3cr2KENkFggsD0CDqXNIooOQLuYa5o7Xc=",
    alt: "walk in clinic in Ann Arbor",
  },
  {
    name: "HELLOMED North",
    imageUrl: "north-location.png",
    mapUrl:
      "https://www.google.com/maps/place/HELLOMED+North/@42.3037993,-83.7089182,16.7z/data=!3m1!5s0x883cac265eb73f1f:0xe91c7cb229ccc520!4m6!3m5!1s0x883cac2654df9761:0x82dccbb38ec4cca!8m2!3d42.3036726!4d-83.7063491!16s%2Fg%2F1pt_kvcq7?entry=ttu",
    appointmentUrl:
      "https://calendar.google.com/calendar/u/0/appointments/AcZssZ3YAF2k-13KqDQerAO87OY9fx46q7g-8XC_OnM=",
    alt: "healthcare solutions Ann Arbor MI",
  },
  {
    name: "HELLOMED South (inside Meijers)",
    imageUrl: "meijer's-location.png",
    mapUrl:
      "https://www.google.com/maps/place/HELLOMED+South(Inside+Meijer)+Urgent+Care+Ann+Arbor/@42.2398356,-83.7690996,17z/data=!3m1!4b1!4m6!3m5!1s0x883cb16d1922f951:0x3491d30ab536b7e9!8m2!3d42.2398356!4d-83.7665247!16s%2Fg%2F11x38v5w5c?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D",
    appointmentUrl:
      "https://calendar.google.com/calendar/u/0/appointments/AcZssZ2R7wwx1LOxXF4t5LsMP16McAcJxCW3AX3pI4Y=",
    alt: "healthcare solutions Ann Arbor MI",
  },
  {
    name: "Telemedicine",
    imageUrl: "telemedicine-location.jpg",
    mapUrl: "",
    appointmentUrl:
      "https://calendar.google.com/calendar/u/0/appointments/AcZssZ1x0Q-g6WSa_xtiFrXkbd5fX9M-JQxk5aoiUGk=",
    alt: "best urgent care Ann Arbor",
  },
];

interface LocationsSectionProps {
  appointmentLinks?: boolean;
}

export default function LocationsSection({
  appointmentLinks = false,
}: LocationsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {locations.map((location, index) => (
        <div key={index} className="flex flex-col p-5">
          <LocationCard
            name={location.name}
            imageUrl={location.imageUrl}
            mapUrl={location.mapUrl}
            alt={location.alt}
          />
          {appointmentLinks &&
            (location.appointmentUrl ? (
              <Link
                href={location.appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-center text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out"
              >
                Book Appointment
              </Link>
            ) : (
              <p className="mt-5 text-center text-blue-600 ">Coming Soon</p>
            ))}
        </div>
      ))}
    </div>
  );
}
