"use client";

import Image from "next/image";
import Link from "next/link";
import { landingItems } from "@/lib/landing-items";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/ui/external/button";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/external/sheet";
import { MobileHoursTable } from "@/ui/hours-table";

export default function LandingPage() {
  const [active, setActive] = useState("about");

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen p-4 md:p-6 lg:p-8 overflow-hidden">
      {/* Left Container for contents */}
      <div className="w-full h-full md:w-8/12 pr-0 md:pr-4 flex flex-col">
        {/* Mini navbar */}
        <div className="mb-4 md:mb-0">
          <div className="flex justify-between items-center">
            <div className="w-28">
              <Image
                src="/logo.png"
                alt="Hellomed logo"
                width={174}
                height={44}
              />
            </div>
            <div className="hidden md:flex text-lg font-semibold">
              {Object.keys(landingItems).map((item, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  className="ml-2"
                  onClick={() => setActive(item)}
                >
                  {landingItems[item as keyof typeof landingItems].name}
                </Button>
              ))}
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-4">
                  {Object.keys(landingItems).map((item, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      onClick={() => {
                        setActive(item);
                      }}
                    >
                      {landingItems[item as keyof typeof landingItems].name}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Contents + Buttons Container */}
        <div className="flex-grow flex flex-col md:flex-row h-full justify-between">
          {/* Contents */}
          <div className="md:w-7/12 flex items-center justify-center mb-4 md:mb-0">
            <div className="p-2 md:p-5 whitespace-pre-line text-center">
              {landingItems[active as keyof typeof landingItems].content}
            </div>
          </div>

          <div className="sm:hidden">
            <MobileHoursTable />
          </div>

          {/* Quick Links */}
          <div className="md:w-5/12 flex flex-col justify-center space-y-4 font-bold">
            <Link href="/make-appointment" className="w-full">
              <Button className="w-full bg-hmred hover:bg-red-500">
                Make an appointment now
              </Button>
            </Link>
            <Link href="/urgent-care" className="w-full">
              <Button className="w-full bg-hmred hover:bg-red-500">
                Urgent Care Home
              </Button>
            </Link>
            <Link href="/primary-care" className="w-full">
              <Button className="w-full bg-hmgreen-dark hover:bg-green-100 text-white">
                Primary Care Home
              </Button>
            </Link>
            <Link href="/immigration-medical-exam" className="w-full">
              <Button className="w-full bg-hmblue hover:bg-indigo-300">
                Immigration Medical Exam
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Container for image */}
      <div className="w-full md:w-4/12 h-1/3 md:h-full mt-4 md:mt-0 rounded-lg shadow-xl overflow-hidden hidden sm:block">
        <Image
          className="object-cover w-full h-full"
          src="/landing-desktop.jpg"
          alt="landing page image"
          width={4000}
          height={4000}
        />
      </div>
    </div>
  );
}
