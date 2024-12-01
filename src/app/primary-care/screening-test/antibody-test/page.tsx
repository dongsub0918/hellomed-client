import { Button } from "@/ui/external/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  Droplet,
  Microscope,
  FileText,
  UserCheck,
  Clock,
  Calendar,
  Shield,
  Zap,
  BookOpen,
  Syringe,
} from "lucide-react";

export default function AntibodyTestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        ANTIBODY TEST
      </h1>

      <section className="mb-12">
        <p className="text-lg xl:text-xl mb-4">
          Antibody testing is a crucial tool in understanding your immune
          response to various infections, including COVID-19. Our
          state-of-the-art antibody testing service provides quick and accurate
          results to help you make informed decisions about your health.
        </p>
        <br />
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Why Get an Antibody Test
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Shield className="mr-2" />
                Infection History
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Determine if you've been previously infected with a specific
              pathogen.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Zap className="mr-2" />
                Immunity Level
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Understand your level of immunity after vaccination.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <BookOpen className="mr-2" />
                Public Health Research
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Contribute to ongoing public health research efforts.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Syringe className="mr-2" />
                Vaccination Decisions
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Inform decisions about future vaccinations or boosters.
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
                <Droplet className="mr-2" />
                Sample Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              A small blood sample is taken via a simple finger prick or blood
              draw.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Microscope className="mr-2" />
                Laboratory Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Your sample is analyzed using advanced testing methods.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <FileText className="mr-2" />
                Results Interpretation
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              A healthcare professional reviews your results.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <UserCheck className="mr-2" />
                Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Discuss your results and their implications with our medical team.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          What to Expect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="flex items-center pt-6 xl:text-xl">
              <Clock className="mr-2" />
              <p>
                <strong>Duration:</strong> 15-30 minutes
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center pt-6 xl:text-xl">
              <Calendar className="mr-2" />
              <p>
                <strong>Results:</strong> Available in 24-48 hours
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center pt-6 xl:text-xl">
              <UserCheck className="mr-2" />
              <p>
                <strong>Support:</strong> Throughout the process
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
          <li>Receive a detailed report of your antibody levels</li>
          <li>Get personalized advice based on your results</li>
          <li>
            Option for follow-up testing or additional health screenings if
            recommended
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
