import { Button } from "@/ui/external/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import { Stethoscope, Calendar, FileText, Activity, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Physical | Urgent Care Ann Arbor",
  description: "Annual physical exams at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/primary-care/physical-exam/annual-physical",
  },
};

export default function PhysicalExamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        ANNUAL PHYSICAL
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Annual Wellness Physical, Work Physical, School & Sports Physical
        </h2>
        <p className="text-lg xl:text-xl mb-4">
          A physical is an integral part of routine healthcare. If you only see
          your doctor when you're sick, you may want to reconsider the benefits
          of an annual physical. At HELLOMED in Ann Arbor, Michigan, the
          dedicated team of medical professionals offers full physical exams to
          ensure your good health. The team also provides specialized physicals
          you may need for employment, school, or sports participation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          What is a physical?
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="xl:text-lg">
              A routine physical exam is an opportunity to ensure you're in good
              physical health. Annual physicals are also a part of preventive
              healthcare and allow your doctor at HELLOMED to identify potential
              health problems early.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          What is involved in an annual physical?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Stethoscope className="mr-2" />
                Full Body Exam
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Your HELLOMED doctor conducts a physical exam of your whole body.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <FileText className="mr-2" />
                Medical History Review
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              They review your previous medical history and update your medical
              file with new information.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Activity className="mr-2" />
                Health Checks
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Your doctor may check your blood pressure, heart rate, lungs, and
              cholesterol level.
            </CardContent>
          </Card>
        </div>
        <p className="xl:text-lg mt-6">
          If you have a family history of diabetes or other health problems,
          your doctor may screen for these conditions during your physical. An
          annual physical is also an excellent time to discuss any symptoms or
          concerns you have about your health. Your doctor offers counseling to
          improve your health and prevent disease in the future.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          How often do I need a physical?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Users className="mr-2" />
                Ages 19-21
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Every 2-3 years for healthy, non-smokers.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Users className="mr-2" />
                Ages 22-64
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">Every 1-3 years.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Users className="mr-2" />
                Ages 65+
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">Annually.</CardContent>
          </Card>
        </div>
        <p className="xl:text-lg mt-6">
          People with existing medical conditions such as diabetes, high blood
          pressure, high cholesterol, heart disease, or depression should
          schedule a visit once a year. Other factors may require more frequent
          physical examinations to protect your health. Your doctor at HELLOMED
          discusses the right timeline for physical exams based on your medical
          history.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          What are specialized physicals?
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="xl:text-lg mb-4">
              Some jobs and activities require a signed physical form by a
              licensed medical doctor to ensure you are in good physical
              condition. At HELLOMED, specialized physicals are available for
              this purpose.
            </p>
            <p className="xl:text-lg mb-4">
              Reasons you may need a physical include:
            </p>
            <ul className="list-disc pl-6 space-y-2 xl:text-lg">
              <li>Securing employment</li>
              <li>Registering for school</li>
              <li>Joining a sports program</li>
              <li>Buying insurance</li>
              <li>Obtaining a driver's license</li>
            </ul>
            <p className="xl:text-lg mt-4">
              Your HELLOMED doctor conducts a physical exam and may answer
              questions on the physical form you provide. If you pass the
              physical exam, they sign off on the form to certify you are in
              good physical health and meet other requirements.
            </p>
            <p className="xl:text-lg mt-4">
              If you don't pass your physical, your doctor discusses areas of
              concern and may recommend additional treatment or follow-up care.
            </p>
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
