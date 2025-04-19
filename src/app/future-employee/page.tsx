import Link from "next/link";
import { Button } from "@/ui/external/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/external/card";
import styles from "@/app/future-employee/future-employee.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the HELLOMED team. Explore career opportunities at our Ann Arbor healthcare clinic and become part of our mission to provide quality medical care.",
  metadataBase: new URL("https://hello-med.com"),
};

export default function FutureEmployeePage() {
  return (
    <div className="relative mx-auto">
      <div className="w-full h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh] relative">
        <Image
          src="/future-employee.jpg"
          alt="Future Employee"
          layout="fill"
          objectFit="cover"
          className={styles["object-position-top"]}
          priority
        />
      </div>

      <Link
        href="/"
        className="text-blue-600 hover:underline pt-5 pl-5 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-center my-8">
        Be a team member of HELLOMED
      </h1>

      <div className="px-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>We're Hiring!</CardTitle>
            <CardDescription>
              Exciting opportunities for healthcare professionals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We are currently looking for talented individuals to join our
              team. If you are passionate about healthcare and have experience
              as medical assistants, physicians, nurse practitioners, physician
              assistants, or front desk staff, we want to hear from you. We
              value strong work ethic and eagerness to learn and grow.
            </p>
            <p className="mt-4">
              Please submit your resume and cover letter to{" "}
              <Link
                href="mailto:JWHS@hello-med.com"
                className="text-primary hover:underline"
              >
                JWHS@hello-med.com
              </Link>
              . We look forward to hearing from you!
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Current Openings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Medical Assistants</li>
              <li>Physicians</li>
              <li>Nurse Practitioners</li>
              <li>Physician Assistants</li>
              <li>Front Desk Staff</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <Button asChild size="lg">
            <Link href="mailto:JWHS@hello-med.com">Apply Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
