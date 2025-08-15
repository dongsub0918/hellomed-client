"use client";

import LocationsSection from "@/ui/locations-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make an Appointment at HELLOMED",
  description:
    "HELLOMED is your trusted walk-in urgent care clinic in Ann Arbor. Make an appointment or walk-in for fast, reliable medical care.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com/make-appointment",
  },
};

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
