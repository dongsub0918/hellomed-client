"use client";

import LocationsSection from "@/ui/locations-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make an Appointment",
  description:
    "Schedule your appointment at HELLOMED. Book online for urgent care, primary care, or immigration medical exams in Ann Arbor.",
  metadataBase: new URL("https://hello-med.com"),
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
