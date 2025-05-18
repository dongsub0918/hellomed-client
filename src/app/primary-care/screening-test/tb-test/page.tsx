import { Button } from "@/ui/external/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  Clipboard,
  Shield,
  Users,
  Activity,
  Clock,
  Calendar,
  FileText,
  Droplet,
  Hourglass,
  UserCheck,
} from "lucide-react";
import { Metadata } from "next";

export default function TBTestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        TB TEST
      </h1>

      <section className="mb-12">
        <p className="text-lg xl:text-xl mb-4">
          TB (Tuberculosis) testing is an essential screening tool for detecting
          both active TB disease and latent TB infection. Our advanced TB
          testing service provides accurate results to help protect your health
          and prevent the spread of this serious bacterial infection.
        </p>
        <br />
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Why Get a TB Test
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Clipboard className="mr-2" />
                Required Screening
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Often required for certain jobs, schools, or immigration
              processes.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Shield className="mr-2" />
                Early Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Identify latent TB infection before it becomes active.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Users className="mr-2" />
                Exposure Check
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Essential for those who may have been exposed to TB.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Activity className="mr-2" />
                Health Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Crucial for individuals with weakened immune systems.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Our Testing Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Clipboard className="mr-2" />
                Pre-Test Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Discuss your medical history and risk factors with a healthcare
              professional.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Droplet className="mr-2" />
                Test Administration
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Receive either a skin test or blood test, depending on your
              specific needs.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Hourglass className="mr-2" />
                Wait Period
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Allow time for your body to react (for skin test) or for lab
              analysis (for blood test).
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <UserCheck className="mr-2" />
                Results Interpretation
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              A healthcare professional reads and explains your results.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Types of TB Tests We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Droplet className="mr-2" />
                Skin Test (PPD)
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Results available in 48-72 hours. Requires a follow-up visit for
              result reading.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Activity className="mr-2" />
                Blood Test (IGRA)
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Results typically available within 24-48 hours. Requires only one
              visit for the blood draw.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          What to Expect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="flex items-center pt-6 xl:text-xl">
              <Clock className="mr-2" />
              <p>
                <strong>Duration:</strong> Quick and relatively painless process
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center pt-6 xl:text-xl">
              <UserCheck className="mr-2" />
              <p>
                <strong>Support:</strong> Our team ensures your comfort
                throughout
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          After the Test
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg xl:text-xl">
          <li>Receive a detailed explanation of your results</li>
          <li>Get recommendations for any necessary follow-up</li>
          <li>
            Obtain documentation for work, school, or immigration purposes if
            needed
          </li>
        </ul>
      </section>

      <div className="text-center">
        <Link href="/make-appointment">
          <Button size="lg" className="mt-4 h-12 text-lg xl:text-2xl">
            <Calendar className="mr-1 mb-1" />
            Make an Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "TB Test",
  description: "TB testing at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com/primary-care/screening-test/tb-test",
  },
};
