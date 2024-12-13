"use client";
import { InboxIcon as EnvelopeIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/ui/external/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Button variant="ghost" className="mb-4" onClick={() => router.back()}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          Contact Us
        </h1>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="flex items-center">
              <EnvelopeIcon
                className="h-6 w-6 text-gray-400 mr-3"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Email</p>
                <a
                  href="mailto:JWHS@hello-med.com"
                  className="text-sm text-blue-600 hover:underline"
                >
                  JWHS@hello-med.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <PhoneIcon
                className="h-6 w-6 text-gray-400 mr-3"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Phone</p>
                <a
                  href="tel:+17342101122"
                  className="text-sm text-blue-600 hover:underline"
                >
                  (734) 210 - 1122
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
