import { Button } from "@/ui/external/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  ClipboardCheck,
  UserCheck,
  MessageCircle,
  Lightbulb,
  Clock,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depression Screening",
  description: "Depression screening at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/primary-care/screening-test/depression-screening",
  },
};

export default function DepressionScreeningPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        DEPRESSION SCREENING
      </h1>

      <section className="mb-12">
        <p className="text-lg xl:text-xl mb-4">
          Depression screening is a crucial step in identifying and addressing
          mental health concerns. Our screening process is designed to be
          thorough, confidential, and supportive.
        </p>
        <br />
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Why It's Important
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Lightbulb className="mr-2" />
                Early Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Early detection can lead to more effective treatment and better
              outcomes.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <ClipboardCheck className="mr-2" />
                Identify Symptoms
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Helps identify symptoms that might otherwise go unnoticed in daily
              life.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <MessageCircle className="mr-2" />
                Starting Point
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Provides a starting point for discussing mental health with
              professionals.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Our Screening Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <ClipboardCheck className="mr-2" />
                Initial Questionnaire
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Complete a standardized depression screening tool to assess your
              symptoms.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <UserCheck className="mr-2" />
                Professional Evaluation
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Meet with a mental health professional to discuss your
              questionnaire results.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <MessageCircle className="mr-2" />
                Personalized Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Receive insights and recommendations based on your screening
              results.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Lightbulb className="mr-2" />
                Treatment Planning
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              If necessary, work with our team to develop a personalized
              treatment plan.
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
                <strong>Duration:</strong> 30-45 minutes
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center pt-6 xl:text-xl">
              <ShieldCheck className="mr-2" />
              <p>
                <strong>Confidentiality:</strong> Strictly maintained
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center pt-6 xl:text-xl">
              <UserCheck className="mr-2" />
              <p>
                <strong>Support:</strong> Compassionate staff available
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          After the Screening
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg xl:text-xl">
          <li>Discuss your results with a mental health professional</li>
          <li>Receive resources and referrals if needed</li>
          <li>
            Option to schedule follow-up appointments or additional assessments
          </li>
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
