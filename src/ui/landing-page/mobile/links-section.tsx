import Link from "next/link";
import { Button } from "@/ui/external/button";
import FloatingElement from "@/ui/floating-element";
import { ChevronDown } from "lucide-react";
import { MobileHoursTable } from "@/ui/hours-table";

export default function MobileLinksSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center snap-start bg-hmblack">
      <div className="w-full px-4">
        <FloatingElement>
          <h1 className="text-center text-2xl font-bold pt-6 text-white">
            Clinic Hours
          </h1>
        </FloatingElement>
        <FloatingElement delay={0.2}>
          <div className="pt-4">
            <MobileHoursTable />
          </div>
        </FloatingElement>
      </div>
      <div className="w-full px-4 pt-6">
        <FloatingElement delay={0.4}>
          <h1 className="text-center text-2xl font-bold text-white">
            Quick Links
          </h1>
        </FloatingElement>
        <FloatingElement delay={0.6}>
          <div className="flex flex-col space-y-3 pt-4">
            <Link href="/make-appointment">
              <Button className="w-full bg-hmred text-lg font-semibold">
                Make an appointment now
              </Button>
            </Link>
            <Link href="/urgent-care">
              <Button className="w-full bg-hmred text-lg font-semibold">
                Urgent Care Home
              </Button>
            </Link>
            <Link href="/primary-care">
              <Button className="w-full bg-hmgreen-dark text-white text-lg font-semibold">
                Primary Care Home
              </Button>
            </Link>
            <Link href="/immigration-medical-exam">
              <Button className="w-full bg-hmblue text-lg font-semibold">
                Immigration Medical Exam
              </Button>
            </Link>
            <Link href="/future-employee">
              <Button className="w-full bg-hmblue text-lg font-semibold">
                Future Employee
              </Button>
            </Link>
          </div>
        </FloatingElement>
      </div>
      <FloatingElement delay={0.8}>
        <div className="flex justify-center pt-8">
          <ChevronDown className="w-8 h-8 text-primary text-white animate-bounce" />
        </div>
      </FloatingElement>
    </section>
  );
}
