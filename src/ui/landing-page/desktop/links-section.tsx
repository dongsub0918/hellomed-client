import Link from "next/link";
import { Button } from "@/ui/external/button";
import FloatingElement from "@/ui/floating-element";
import { ChevronDown } from "lucide-react";
import HoursTable from "@/ui/hours-table";
import Carousel from "@/ui/landing-page/desktop/carousel";

export default function DesktopLinksSection() {
  return (
    <section className="min-h-screen py-8 flex flex-col items-center snap-start snap-always bg-hmblack">
      <FloatingElement>
        <h2 className="text-center text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-5">
          After Hours Walk-In Clinic Ann Arbor
        </h2>
        <div className="hidden lg:block">
          <Carousel />
        </div>
      </FloatingElement>
      <div className="h-full w-full flex flex-col items-center justify-between">
        <div className="block lg:flex w-full p-10">
          <div className="w-full px-1/12">
            <FloatingElement>
              <h3 className="text-center text-3xl font-bold text-white">
                Clinic Hours
              </h3>
            </FloatingElement>
            <FloatingElement delay={0.2}>
              <div className="pt-4">
                <HoursTable />
              </div>
            </FloatingElement>
          </div>
          <div className="w-full px-1/12">
            <FloatingElement delay={0.4}>
              <h3 className="text-center text-3xl font-bold text-white pt-10 lg:pt-0">
                Quick Links
              </h3>
            </FloatingElement>
            <FloatingElement delay={0.6}>
              <div className="flex flex-col space-y-5 pt-5">
                <Link href="/make-appointment">
                  <Button className="w-full bg-hmred hover:bg-red-500 text-lg font-semibold">
                    Make an appointment now
                  </Button>
                </Link>
                <Link href="/urgent-care">
                  <Button className="w-full bg-hmred hover:bg-red-500 text-lg font-semibold">
                    Urgent Care Home
                  </Button>
                </Link>
                <Link href="/primary-care">
                  <Button className="w-full bg-hmgreen-dark hover:bg-slate-500 text-white text-lg font-semibold">
                    Primary Care Home
                  </Button>
                </Link>
                <Link href="/immigration-medical-exam">
                  <Button className="w-full bg-hmblue hover:bg-blue-900 text-lg font-semibold">
                    Immigration Medical Exam
                  </Button>
                </Link>
                <Link href="/future-employee">
                  <Button className="w-full bg-hmblue hover:bg-blue-900 text-lg font-semibold">
                    Future Employee
                  </Button>
                </Link>
              </div>
            </FloatingElement>
          </div>
        </div>
        <FloatingElement delay={0.8}>
          <ChevronDown className="w-8 h-8 text-primary text-white animate-bounce" />
        </FloatingElement>
      </div>
    </section>
  );
}
