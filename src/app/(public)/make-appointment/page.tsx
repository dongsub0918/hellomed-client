"use client";

import LocationsSection from "@/ui/locations-section";

export default function MakeAppointmentPage() {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold">
        Please Choose a location
      </h1>
      <div className="p-10">
        <LocationsSection appointmentLinks={true} />
      </div>
    </>
  );
}
