import { Button } from "@/ui/external/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/external/card";
import { Check } from "lucide-react";
import { Metadata } from "next";

export default function NoInsurancePlanPage() {
  const plans = [
    { title: "Single", price: "$49/month" },
    { title: "Couple", price: "$89/month" },
    { title: "Family(3-4 members)", price: "$159/month" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl xl:text-5xl font-bold text-center mb-8 xl:my-10">
        Budget Saving Program
      </h1>
      <p className="text-xl xl:text-2xl text-center mb-8 xl:mb-12">
        Annual Membership Program for No Insured or High Deductible Insured
        Patients
      </p>

      <Card className="mb-8 xl:mb-12">
        <CardHeader>
          <CardTitle className="text-2xl xl:text-3xl">
            What's Included?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 xl:space-y-4">
            {[
              "Unlimited access to office visits service for minor illnesses and minor injuries",
              "Rapid lab tests inside the clinic for sick visits (strep, mono, flu, etc) limited 2 times/year",
              "X-ray ($200 value)",
              "Free Annual wellness check up with blood test (Comprehensive metabolic panel, Lipid panel, $200 value)",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="mr-2 h-5 w-5 xl:h-6 xl:w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-base xl:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <h2 className="text-2xl xl:text-4xl font-bold text-center mb-6 xl:mb-8">
        Fee Schedule
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 mb-8 xl:mb-12">
        {plans.map((plan) => (
          <Card key={plan.title}>
            <CardHeader>
              <CardTitle className="text-xl xl:text-2xl">
                {plan.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl xl:text-3xl font-bold">{plan.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gray-100 p-6 xl:p-8 rounded-lg mb-8 xl:mb-12">
        <h3 className="text-xl xl:text-2xl font-semibold mb-4 xl:mb-6">
          Important Information
        </h3>
        <ul className="space-y-2 xl:space-y-4">
          <li className="text-base xl:text-lg">
            - Once you enroll and set up the plan, payment will be withdrawn
            automatically every month for a year.
          </li>
          <li className="text-base xl:text-lg">
            - If you prefer not to enroll in the annual membership, you can
            still use our services with a one-time payment at a reasonable
            price.
          </li>
          <li className="text-base xl:text-lg">
            - You can enroll in the service on the booking page.
          </li>
          <li className="text-base xl:text-lg">
            - Call if you have more questions.
          </li>
        </ul>
      </div>

      <form
        className="text-center"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="BXEFPJV6ANCZU" />
        <table className="w-full">
          <tr>
            <td>
              <input type="hidden" name="on0" value="Budget Saving Program" />
              Budget Saving Program
            </td>
          </tr>
          <tr>
            <td>
              <select name="os0">
                <option value="Singel">Single $49.00 USD - month(s)</option>
                <option value="Couple">Couple $89.00 USD - month(s)</option>
                <option value="Family(3-4 members)">
                  Family(3-4 members) $159.00 USD - month(s)
                </option>
              </select>
            </td>
          </tr>
        </table>
        <input type="hidden" name="currency_code" value="USD" />
        <input
          className="mt-4"
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribe_LG.gif"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Subscribe"
        />
      </form>
    </div>
  );
}

export const metadata: Metadata = {
  title: "No Insurance Plan (Urgent Care)",
  description:
    "No insurance plan information for urgent care at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/insurance-info/no-insurance-plan",
  },
};
