import { Button } from "@/ui/external/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  Droplet,
  Zap,
  UserCheck,
  Clock,
  Calendar,
  Syringe,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IV Infusion",
  description: "IV infusion services at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com/primary-care/iv-infusion",
  },
};

export default function IVInfusionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        IV INFUSION
      </h1>

      <section className="mb-12">
        <p className="text-lg xl:text-xl mb-4">
          The vitamins, along with IV fluids, is a very fast way to get critical
          nutrients and hydration into your body. Depending on your health
          needs, we will carefully tailor your IV solution.
        </p>
        <br />
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <UserCheck className="mr-2" />
                Medical Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              See our medical experts who will analyze your fatigue and stress
              levels. About 15-20 minutes of personalized encounter will be
              provided.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Zap className="mr-2" />
                Tailored Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              After evaluation, selection of vitamin injection, frequency and
              duration will be determined.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Syringe className="mr-2" />
                Injection
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Get your injection. IV fluid with or without vitamin injection
              will be administered.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Droplet className="mr-2" />
                Hydration
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Receive critical nutrients and hydration directly into your
              bloodstream for maximum effectiveness.
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
              <strong>Service Duration:</strong> 30 minutes to 1 hour
            </p>
          </CardContent>
        </Card>
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
