import { Button } from "@/ui/external/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/external/card";
import { Check } from "lucide-react";

export default function BudgetSavingProgramPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Budget Saving Program
      </h1>
      <p className="text-xl text-center mb-8">
        Annual Membership Program for No Insured or High Deductible Insured
        Patients
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">What's Included?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[
              "Unlimited access to office visits service for minor illnesses and minor injuries",
              "Rapid lab tests inside the clinic for sick visits (strep, mono, flu, etc) limited 2 times/year",
              "X-ray ($200 value)",
              "Free Annual wellness check up with blood test (Comprehensive metabolic panel, Lipid panel, $200 value)",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold text-center mb-6">Fee Schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Single", price: "$39/month" },
          { title: "Couple", price: "$75/month" },
          { title: "Family of 3-4", price: "$110/month" },
        ].map((plan) => (
          <Card key={plan.title}>
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{plan.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Important Information</h3>
        <ul className="space-y-2">
          <li>
            - Once you enroll and set up the plan, payment will be withdrawn
            automatically every month for a year.
          </li>
          <li>
            - If you prefer not to enroll in the annual membership, you can
            still use our services with a one-time payment at a reasonable
            price.
          </li>
          <li>- You can enroll in the service on the booking page.</li>
          <li>- Call if you have more questions.</li>
        </ul>
      </div>

      <div className="text-center">
        <Button size="lg">Enroll Now</Button>
      </div>
    </div>
  );
}
