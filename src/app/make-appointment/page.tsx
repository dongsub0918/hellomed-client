"use client";

import LocationsSection from "@/ui/locations-section";

export default function MakeAppointmentPage() {
  return (
    <div className="">
      <h1 className="text-center text-3xl font-semibold pt-10 sm:pt-20">
        Please Choose a location
      </h1>
      <LocationsSection appointmentLinks={true} />
    </div>
  );
}
