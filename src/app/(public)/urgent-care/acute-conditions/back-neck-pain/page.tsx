import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { backAndNeckPainInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function BackAndNeckPainPage() {
  return (
    <AcuteConditionsText
      diseaseName={backAndNeckPainInfo.diseaseName}
      description={backAndNeckPainInfo.description}
      questionsAndAnswers={backAndNeckPainInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Back & Neck Pain",
  description:
    "Back and neck pain treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/back-neck-pain",
  },
};
