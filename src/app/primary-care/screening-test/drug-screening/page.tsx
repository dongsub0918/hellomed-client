import { Button } from "@/ui/external/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  Briefcase,
  Scale,
  Activity,
  Heart,
  Clock,
  Calendar,
  FileText,
  TestTube,
  Lock,
  UserCheck,
  Droplet,
  Thermometer,
  Scissors,
} from "lucide-react";

export default function DrugScreeningPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        DRUG SCREENING
      </h1>

      <section className="mb-12">
        <p className="text-lg xl:text-xl mb-4">
          Our comprehensive drug screening service provides accurate and
          confidential testing for a wide range of substances. Whether for
          employment purposes, legal requirements, or personal health
          monitoring, our state-of-the-art screening process ensures reliable
          results.
        </p>
        <br />
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Why Get a Drug Screening
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Briefcase className="mr-2" />
                Employment
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Pre-employment or workplace requirements.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Scale className="mr-2" />
                Legal Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Legal or court-ordered testing.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Activity className="mr-2" />
                Athletic Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Athletic competition eligibility.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Heart className="mr-2" />
                Health Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Personal health monitoring.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <UserCheck className="mr-2" />
                Treatment Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Substance abuse treatment monitoring.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Our Screening Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <UserCheck className="mr-2" />
                Check-in and Verification
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Confirm identity and testing requirements.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <TestTube className="mr-2" />
                Sample Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Provide a urine, blood, or hair sample as required.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Thermometer className="mr-2" />
                Laboratory Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Samples are tested using advanced techniques.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <FileText className="mr-2" />
                Results Review
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              A medical professional interprets the results.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Lock className="mr-2" />
                Confidential Reporting
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Results are securely delivered to authorized parties.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Types of Drug Tests We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Droplet className="mr-2" />
                Urine Drug Test
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Most common, detects recent drug use.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Thermometer className="mr-2" />
                Blood Drug Test
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Detects current impairment, used for legal cases.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Scissors className="mr-2" />
                Hair Follicle Test
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Can detect drug use over a longer period (up to 90 days).
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Droplet className="mr-2" />
                Saliva Test
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Convenient, non-invasive option for recent drug use detection.
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
                <strong>Duration:</strong> 15-30 minutes for sample collection
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center pt-6 xl:text-xl">
              <Calendar className="mr-2" />
              <p>
                <strong>Results:</strong> Available within 24-72 hours
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center pt-6 xl:text-xl">
              <Lock className="mr-2" />
              <p>
                <strong>Privacy:</strong> Strict chain-of-custody procedures
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center pt-6 xl:text-xl">
              <UserCheck className="mr-2" />
              <p>
                <strong>Support:</strong> Staff prioritizes comfort and privacy
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
          <li>Receive confidential results through secure channels</li>
          <li>Option for result explanation by a medical professional</li>
          <li>Referrals to support services if needed</li>
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
