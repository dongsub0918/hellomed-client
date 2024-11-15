import Link from "next/link";
import { Button } from "@/ui/external/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
import {
  TestTube,
  Heart,
  Zap,
  Droplet,
  Pill,
  Scan,
  Stethoscope,
  Calendar,
} from "lucide-react";

export default function LabTestsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">LAB TESTS</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Available Tests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="mr-2 mb-1" />
                In-House Rapid Lab Tests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Urine</li>
                <li>Strep</li>
                <li>COVID-19</li>
                <li>Mono</li>
                <li>Influenza</li>
                <li>Glucose</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2 mb-1" />
                EKG
              </CardTitle>
            </CardHeader>
            <CardContent>
              Electrocardiogram to check heart health and function.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Droplet className="mr-2 mb-1" />
                Blood Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Lipid panel</li>
                <li>Thyroid function</li>
                <li>Liver function</li>
                <li>Kidney function</li>
                <li>Diabetes tests</li>
                <li>And more</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="mr-2 mb-1" />
                STD Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              Comprehensive testing for sexually transmitted diseases.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Pill className="mr-2 mb-1" />
                Drug Screening
              </CardTitle>
            </CardHeader>
            <CardContent>
              Urine-based drug screening tests available.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scan className="mr-2 mb-1" />
                On-site Digital X-ray
              </CardTitle>
            </CardHeader>
            <CardContent>Available at our North clinic location.</CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ultrasound Referral</h2>
        <p className="text-lg">
          We provide referrals for ultrasound services to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>St. Joseph Mercy Health System</li>
          <li>University of Michigan Health System</li>
        </ul>
      </section>

      <div className="text-center">
        <Link href={"/make-appointment"}>
          <Button className="mt-4 h-12 text-lg">
            <Calendar className="mr-1 mb-1" />
            Book an appointment
          </Button>
        </Link>
      </div>
    </div>
  );
}
