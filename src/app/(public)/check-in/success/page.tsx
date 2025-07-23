"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/ui/external/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/external/card";
import { CheckCircle } from "lucide-react";
import { CheckInFormInputs } from "@/lib/types/check-in";
import styles from "./page.module.css";

export default function CheckInFormSuccessPage() {
  const timer = 10;
  const [formData, setFormData] = useState<CheckInFormInputs>();
  const [countdown, setCountdown] = useState(timer);
  const router = useRouter();

  useEffect(() => {
    // Retrieve form data from sessionStorage
    const storedData = sessionStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }

    // Start countdown timer
    const timerInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timerInterval);
  }, []);

  // Separate useEffect for handling redirect when countdown reaches 0
  useEffect(() => {
    if (countdown === 0) {
      router.push("/check-in");
    }
  }, [countdown, router]);

  // Calculate progress percentage for the CSS
  const progressPercentage = ((timer - countdown) / timer) * 100;

  const renderField = (label: string, value: string | boolean | undefined) => (
    <div className="border-b border-gray-200 py-2">
      <h3 className="font-semibold text-sm text-gray-600">{label}</h3>
      {label === "ID Image" ||
      label === "Insurance Card Front Image" ||
      label === "Insurance Card Back Image" ? (
        <p className="mt-1">{value ? "Submitted" : "Not submitted"}</p>
      ) : (
        <p className="mt-1">{value || "N/A"}</p>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4">
      <Card className="w-full">
        <CardHeader>
          <p
            className={`${styles.countdown} text-center text-sm text-muted-foreground`}
            style={
              {
                "--progress-width": `${100 - progressPercentage}%`,
              } as React.CSSProperties
            }
          >
            This message will close in {countdown} seconds
          </p>
          <CardTitle className="text-2xl font-bold flex items-center justify-center text-green-600">
            <CheckCircle className="mr-2" />
            Check-In Successfully Submitted
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-center text-lg">
              Thank you for submitting your check-in information. Here's a
              summary of your submission:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Personal Information</h2>
                {renderField("Name", formData?.name)}
                {renderField("Birth Date", formData?.birthDate)}
                {renderField("Phone", formData?.phone)}
                {renderField("Email", formData?.email)}
                {renderField("Address", formData?.address)}
                {renderField("Zipcode", formData?.zipcode)}
                {renderField(
                  "How did you hear about us?",
                  formData?.hearAboutUs
                )}
                {renderField("ID Image", formData?.idImage)}
                {renderField(
                  "Insurance Card Front Image",
                  formData?.insuranceImageFront
                )}
                {renderField(
                  "Insurance Card Back Image",
                  formData?.insuranceImageBack
                )}
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Medical Information</h2>
                {renderField("Medication Allergy", formData?.medicationAllergy)}
                {renderField("Preferred Pharmacy", formData?.preferredPharmacy)}
                {renderField("At Home Medication", formData?.homeMedication)}
                {renderField("Reason for Visit", formData?.reasonForVisit)}
                {renderField("Recent Exposures", formData?.exposures)}
                {renderField("Recent Tests", formData?.recentTests)}
                {renderField("Recent Visits", formData?.recentVisits)}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
          <Button
            onClick={() => router.push("/urgent-care")}
            className="w-full sm:w-auto bg-hmred"
          >
            HELLOMED Urgent Care
          </Button>
          <Button
            onClick={() => router.push("/primary-care")}
            className="w-full sm:w-auto bg-hmgreen-dark"
          >
            HELLOMED Primary Care
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
