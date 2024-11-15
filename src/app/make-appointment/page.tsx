"use client";

import LocationsSection from "@/ui/locations-section";

export default function MakeAppointmentPage() {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold">
        Please Choose a location
      </h1>
      <LocationsSection appointmentLinks={true} />
    </>
  );
}
