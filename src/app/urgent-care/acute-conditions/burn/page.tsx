import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { burnInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function BurnPage() {
  return (
    <AcuteConditionsText
      diseaseName={burnInfo.diseaseName}
      description={burnInfo.description}
      questionsAndAnswers={burnInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Burn",
  description: "Burn treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com/urgent-care/acute-conditions/burn",
  },
};
