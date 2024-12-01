import { Button } from "@/ui/external/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  Briefcase,
  Stethoscope,
  FileText,
  Activity,
  Clipboard,
  Users,
  Clock,
  Calendar,
} from "lucide-react";

export default function WorkPhysicalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        WORK PHYSICAL
      </h1>

      <section className="mb-12">
        <p className="text-lg xl:text-xl mb-4">
          A work physical, also known as an employment physical or occupational
          health exam, is a medical examination required by some employers to
          ensure that an employee is physically capable of performing their job
          duties. At HELLOMED in Ann Arbor, Michigan, our team of medical
          professionals provides comprehensive work physicals to meet your
          employment needs.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Why You Might Need a Work Physical
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Briefcase className="mr-2" />
                New Employment
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Many employers require a physical before starting a new job.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Users className="mr-2" />
                Safety-Sensitive Positions
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Jobs that involve public safety often require regular physicals.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Activity className="mr-2" />
                Physical Demands
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Jobs with significant physical requirements may necessitate a
              physical exam.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          What to Expect During a Work Physical
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
              Your doctor will review your medical history and any pre-existing
              conditions.
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
              A thorough physical exam, including vital signs and general health
              assessment.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Activity className="mr-2" />
                Job-Specific Tests
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Tests related to your job requirements, such as vision, hearing,
              or strength tests.
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
              Completion of necessary forms and documentation for your employer.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Benefits of Work Physicals
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-2 xl:text-lg">
              <li>Ensure you're physically capable of performing job duties</li>
              <li>Identify potential health risks related to the job</li>
              <li>Establish a baseline for future health comparisons</li>
              <li>
                Meet legal and insurance requirements for certain professions
              </li>
              <li>Promote a safe and healthy work environment</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Preparing for Your Work Physical
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-2 xl:text-lg">
              <li>Bring any required forms from your employer</li>
              <li>Have a list of your current medications</li>
              <li>
                Bring your medical history, including past surgeries and
                conditions
              </li>
              <li>
                Wear comfortable clothing that allows for easy examination
              </li>
              <li>
                Be prepared to discuss your job duties and any health concerns
              </li>
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
