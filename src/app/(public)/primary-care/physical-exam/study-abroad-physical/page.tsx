import { Button } from "@/ui/external/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  GlobeIcon,
  Stethoscope,
  FileText,
  Clipboard,
  Syringe,
  Eye,
  Calendar,
  Thermometer,
  ShieldCheck,
} from "lucide-react";
import { Metadata } from "next";

export default function StudyAbroadPhysicalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        STUDY ABROAD PHYSICAL
      </h1>

      <section className="mb-12">
        <p className="text-lg xl:text-xl mb-4">
          A study abroad physical is a comprehensive health examination required
          for students planning to study in a foreign country. At HELLOMED in
          Ann Arbor, Michigan, our experienced medical professionals provide
          thorough study abroad physicals to ensure you meet all health
          requirements for your international academic adventure.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Why You Need a Study Abroad Physical
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <GlobeIcon className="mr-2" />
                Program Requirement
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Most study abroad programs require a recent physical exam before
              departure.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <ShieldCheck className="mr-2" />
                Health Verification
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Ensures you're healthy enough to study and live in a foreign
              country.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Syringe className="mr-2" />
                Vaccination Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Identify and administer any required vaccinations for your
              destination.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          What to Expect During a Study Abroad Physical
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Clipboard className="mr-2" />
                Medical History Review
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              We'll review your medical history, including past illnesses,
              surgeries, and family health history.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Stethoscope className="mr-2" />
                Physical Examination
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              A comprehensive physical exam, including vital signs and overall
              health assessment.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Eye className="mr-2" />
                Vision and Hearing Tests
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Basic vision and hearing screenings to ensure you can see and hear
              properly.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Syringe className="mr-2" />
                Immunization Review
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              We'll check your immunization records and administer any necessary
              vaccines for your destination.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Thermometer className="mr-2" />
                Lab Tests
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Any required blood tests or other laboratory work specific to your
              program or destination.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <FileText className="mr-2" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Completion of all necessary forms required by your study abroad
              program.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Benefits of Study Abroad Physicals
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-2 xl:text-lg">
              <li>
                Ensure you meet all health requirements for your study abroad
                program
              </li>
              <li>Identify any potential health issues before traveling</li>
              <li>
                Update vaccinations to protect against diseases prevalent in
                your destination
              </li>
              <li>
                Receive health advice specific to your destination country
              </li>
              <li>
                Obtain necessary documentation for your program and
                international travel
              </li>
              <li>
                Discuss any health concerns or medications with a medical
                professional
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Preparing for Your Study Abroad Physical
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-2 xl:text-lg">
              <li>Bring all required forms from your study abroad program</li>
              <li>Have your immunization records available</li>
              <li>Prepare a list of any medications you're currently taking</li>
              <li>
                Bring information about your destination country and program
                duration
              </li>
              <li>Be ready to provide details about your medical history</li>
              <li>Wear comfortable clothing for easy examination</li>
              <li>Bring your glasses or contact lenses for vision testing</li>
            </ul>
          </CardContent>
        </Card>
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
  title: "Study Abroad Physical Exam",
  description:
    "Study abroad physical exams at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/primary-care/physical-exam/study-abroad-physical",
  },
};
