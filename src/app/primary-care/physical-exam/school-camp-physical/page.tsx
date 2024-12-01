import { Button } from "@/ui/external/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  GraduationCap,
  Tent,
  Stethoscope,
  FileText,
  Activity,
  Clipboard,
  Users,
  Calendar,
  Syringe,
  Eye,
} from "lucide-react";

export default function SchoolCampPhysicalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        SCHOOL & CAMP PHYSICAL
      </h1>

      <section className="mb-12">
        <p className="text-lg xl:text-xl mb-4">
          School and camp physicals are essential health check-ups required for
          children and adolescents before they start a new school year or attend
          a summer camp. At HELLOMED in Ann Arbor, Michigan, our experienced
          medical professionals provide comprehensive school and camp physicals
          to ensure your child's health and readiness for their upcoming
          activities.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Why You Need a School or Camp Physical
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <GraduationCap className="mr-2" />
                School Requirement
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Many schools require a physical exam before enrollment or
              participation in sports.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Tent className="mr-2" />
                Camp Preparation
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Most summer camps require a recent physical exam for attendance.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Activity className="mr-2" />
                Sports Participation
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Physical exams are often required for participation in school or
              camp sports programs.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          What to Expect During a School or Camp Physical
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
              We'll review your child's medical history, including past
              illnesses, surgeries, and family health history.
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
              A thorough physical exam, including height, weight, blood
              pressure, and overall health assessment.
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
              Basic vision and hearing screenings to ensure your child can see
              and hear properly.
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
              We'll check your child's immunization records and administer any
              necessary vaccines.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Benefits of School and Camp Physicals
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-2 xl:text-lg">
              <li>
                Ensure your child is healthy and ready for school or camp
                activities
              </li>
              <li>
                Identify any potential health issues that may require attention
              </li>
              <li>
                Update immunizations to protect against preventable diseases
              </li>
              <li>
                Provide an opportunity to discuss any health concerns with a
                medical professional
              </li>
              <li>
                Meet requirements for school enrollment or camp attendance
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Preparing for Your Child's Physical
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-2 xl:text-lg">
              <li>Bring any required forms from the school or camp</li>
              <li>Have your child's immunization records available</li>
              <li>Prepare a list of any medications your child is taking</li>
              <li>
                Be ready to provide information about your child's medical
                history
              </li>
              <li>
                Have your child wear comfortable clothing for easy examination
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
