import Image from "next/image";
import { Card, CardContent } from "@/ui/external/card";

const insurancePlans = [
  { name: "AARP", logo: "/insurance-aarp.jpg" },
  { name: "Aetna", logo: "/insurance-aetna.webp" },
  { name: "Ambetter Health by Meridian", logo: "/insurance-ambetter.png" },
  { name: "BCBS", logo: "/insurance-bcbs.jpg" },
  { name: "BCN", logo: "/insurance-bcn.jpg" },
  { name: "Cigna", logo: "/insurance-cigna.webp" },
  { name: "Cofinity", logo: "/insurance-cofinity.jpg" },
  { name: "HAP (Health Alliance Plan)", logo: "/insurance-hap.png" },
  { name: "Michigan medicaid", logo: "/insurance-michigan-medicaid.png" },
  { name: "Medicare", logo: "/insurance-medicare.jpg" },
  { name: "Meridian", logo: "/insurance-meridian.jpg" },
  { name: "Molina Healthcare", logo: "/insurance-molina.png" },
  { name: "MultiPlan(PHCS) Network", logo: "/insurance-multiplan.webp" },
  { name: "Priority Health", logo: "/insurance-priority-health.png" },
  { name: "Tricare", logo: "/insurance-tricare.svg" },
  { name: "United Healthcare", logo: "/insurance-united-healthcare.png" },
  {
    name: "University of Michigan M-Premier Care",
    logo: "/insurance-um-premier.png",
  },
  { name: "PHP", logo: "/insurance-php.jpeg" },
  {
    name: "University of Michigan Student Insurance",
    logo: "/insurance-um-student.svg",
  },
  { name: "Traveler Insurance", logo: "/insurance-traveler.png" },
];

export default function InsurancePlansPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl xl:text-5xl font-bold text-center mb-8 xl:my-10">
        Insurance Plans We Accept
      </h1>
      <div className="text-sm sm:text-xl xl:text-2xl">
        <p className="text-center text-red-600">
          * As the patient you are always responsible for any charges not paid
          by your insurance.
        </p>
        <p className="text-center mb-8 text-red-600">
          * This list does not cover all insurances we accept. For any
          insurances not on the list, please call the clinic to verify.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {insurancePlans.map((plan) => (
          <Card key={plan.name} className="overflow-hidden">
            <CardContent className="p-4 flex flex-col h-full">
              <div
                className="relative flex-grow mb-4"
                style={{ minHeight: "150px" }}
              >
                <Image
                  src={plan.logo}
                  alt={`${plan.name} logo`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold text-center xl:text-2xl">
                {plan.name}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
