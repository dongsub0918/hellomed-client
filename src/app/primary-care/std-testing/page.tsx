import { Button } from "@/ui/external/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  Users,
  Calendar,
  Thermometer,
  Droplet,
  AlertCircle,
  Microscope,
  Clock,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidential STD Testing in Ann Arbor | Fast & Affordable | HelloMed",
  description:
    "Get reliable and confidential STD testing in Ann Arbor at HelloMed. Same-day appointments, fast results, and compassionate care from experienced providers. Book now.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com/primary-care/std-testing",
  },
  keywords: ["STD testing Ann Arbor"],
};

export default function STDScreeningPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl xl:text-6xl font-bold text-center mb-8 xl:my-12">
        STD TESTING, SCREENING & TREATMENT
      </h1>

      <section className="mb-12">
        <p className="text-lg xl:text-xl mb-4">
          One in two sexually active people in the United States contracts a
          sexually transmitted infection or disease (STI, STD) by the time they
          reach age 25. You may have an STD without even knowing it, so routine
          screenings are an essential part of your good health. At HELLOMED in
          Ann Arbor, Michigan, STD testing is available on-site to provide you
          with confidential, accurate results.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Who Needs STD Testing in Ann Arbor?
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="xl:text-lg mb-4">
              If you are sexually active, it is important to get regularly
              tested for sexually transmitted diseases and infections (STDs,
              STIs). The Center for Disease Control recommends annual testing
              for sexually active individuals to screen for:
            </p>
            <ul className="list-disc pl-6 space-y-2 xl:text-lg">
              <li>Chlamydia</li>
              <li>Gonorrhea</li>
              <li>Syphilis</li>
              <li>Hepatitis B</li>
              <li>HIV</li>
            </ul>
            <p className="xl:text-lg mt-4">
              STD testing is especially important if you have new or multiple
              sexual partners, or if you're with a partner who has previously
              tested positive for a sexually transmitted disease. If you've had
              unprotected sex, you should receive STD screening.
            </p>
            <p className="xl:text-lg mt-4">
              If you use injectable drugs and share equipment with other people,
              you should also receive regular testing.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Symptoms of STDs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <AlertCircle className="mr-2" />
                Genital Issues
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Sores, blisters, warts, or discharge from the penis or vagina.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Thermometer className="mr-2" />
                Physical Discomfort
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Painful sex, vaginal bleeding, or lower abdominal pain.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Droplet className="mr-2" />
                Skin Changes
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Skin rash or swelling in the groin glands.
            </CardContent>
          </Card>
        </div>
        <p className="xl:text-lg mt-6">
          Symptoms may range from mild to severe. In many cases, if you have an
          STD, you may not show any symptoms for months or years after becoming
          infected.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          Why Should I Get Tested?
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="xl:text-lg mb-4">
              STDs can be present in your body without any symptoms. An STD is a
              disease that needs professional medical attention. If left
              untreated, STDs can cause additional medical complications,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 xl:text-lg">
              <li>Genital pain</li>
              <li>Infertility</li>
              <li>Pregnancy complications</li>
              <li>Pelvic inflammatory disease</li>
              <li>Reproductive cancer</li>
            </ul>
            <p className="xl:text-lg mt-4">
              Untreated STDs can also lead to the continued spread of the
              disease to other individuals.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">
          What to Expect During STD Testing in Ann Arbor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <FileText className="mr-2" />
                Medical History Review
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Your doctor reviews your sexual and health history. It's important
              to be honest about your sexual activity and drug use.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Microscope className="mr-2" />
                Sample Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              Urine sample or genital swab for chlamydia and gonorrhea. Blood
              sample for HIV, hepatitis B, and syphilis.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <Clock className="mr-2" />
                Fast Results
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              On-site laboratory testing with results available in one to two
              days.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center xl:text-2xl">
                <ShieldCheck className="mr-2" />
                Confidentiality
              </CardTitle>
            </CardHeader>
            <CardContent className="xl:text-lg">
              All information is kept confidential, and testing is conducted in
              a comfortable, discreet environment.
            </CardContent>
          </Card>
        </div>
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
