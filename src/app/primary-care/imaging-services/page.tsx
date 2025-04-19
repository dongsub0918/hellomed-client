import { Button } from "@/ui/external/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  Scan,
  Bone,
  Activity,
  Stethoscope,
  Clock,
  Calendar,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "X-Ray & Imaging Services",
  description:
    "Comprehensive diagnostic imaging services at HELLOMED for primary care patients. Our North location offers X-rays, imaging, and diagnostic services to support your ongoing healthcare needs in Ann Arbor.",
  metadataBase: new URL("https://hello-med.com"),
};

export default function XRayServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        X-RAY SERVICES
      </h1>

      <section className="mb-12">
        <p className="text-lg xl:text-xl mb-4">
          Our X-ray services are available at the North location, and is for
          patients who need diagnostic imaging for a wide range of conditions.
        </p>
        <br />
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Services Include
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Bone className="mr-2" />
                Injuries and fractures
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Evaluate broken bones, sprains, and other injuries.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Activity className="mr-2" />
                Chest X-rays
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              For respiratory issues such as cough, shortness of breath, or
              chest pain.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Stethoscope className="mr-2" />
                Abdominal X-rays
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Identify the cause of abdominal pain, such as kidney stones or
              digestive issues.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Scan className="mr-2" />
                Follow-up imaging
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Check the healing progress of previously diagnosed conditions or
              treatments.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Service Information
        </h2>
        <Card>
          <CardContent className="flex items-center pt-6 xl:text-xl">
            <Clock className="mr-2" />
            <p>
              <strong>Service Duration:</strong> 10 – 20 minutes
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Ultrasound Referral
        </h2>
        <p className="text-lg xl:text-xl">
          We provide referrals for ultrasound services to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2 xl:text-lg">
          <li>St. Joseph Mercy Health System</li>
          <li>University of Michigan Health System</li>
        </ul>
      </section>

      <div className="text-center">
        <Link href="/make-appointment">
          <Button size="lg" className="mt-4 h-12 text-lg xl:text-2xl">
            <Calendar className="mr-1 mb-1" />
            Book an Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
}
