import { Button } from "@/ui/external/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  Scan,
  Bone,
  Activity,
  Stethoscope,
  Clock,
  Calendar,
} from "lucide-react";

export default function XRayServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">X-RAY SERVICES</h1>

      <section className="mb-12">
        <p className="text-lg mb-4">
          Our X-ray services are available at the North location, and is for
          patients who need diagnostic imaging for a wide range of conditions.
        </p>
        <br />
        <h2 className="text-2xl font-semibold mb-4">Services Include</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bone className="mr-2" />
                Injuries and fractures
              </CardTitle>
            </CardHeader>
            <CardContent>
              Evaluate broken bones, sprains, and other injuries.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2" />
                Chest X-rays
              </CardTitle>
            </CardHeader>
            <CardContent>
              For respiratory issues such as cough, shortness of breath, or
              chest pain.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="mr-2" />
                Abdominal X-rays
              </CardTitle>
            </CardHeader>
            <CardContent>
              Identify the cause of abdominal pain, such as kidney stones or
              digestive issues.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scan className="mr-2" />
                Follow-up imaging
              </CardTitle>
            </CardHeader>
            <CardContent>
              Check the healing progress of previously diagnosed conditions or
              treatments.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Service Information</h2>
        <Card>
          <CardContent className="flex items-center pt-6">
            <Clock className="mr-2" />
            <p>
              <strong>Service Duration:</strong> 10 – 20 minutes
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          How to Make an Appointment
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Simply call us or visit our website at{" "}
            <a
              href="http://www.Hello-med.com"
              className="text-primary hover:underline"
            >
              www.Hello-med.com
            </a>{" "}
            to schedule an online appointment.
          </li>
          <li>Select the "X-ray Services" option on the booking calendar.</li>
          <li>
            If further instructions are needed, we will contact you with all
            necessary information before your visit.
          </li>
        </ol>
      </section>

      <div className="text-center">
        <Button size="lg" className="mt-4 h-12 text-lg">
          <Calendar className="mr-1 mb-1" />
          Book an Appointment
        </Button>
      </div>
    </div>
  );
}
