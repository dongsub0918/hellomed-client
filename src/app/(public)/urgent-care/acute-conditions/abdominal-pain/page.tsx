import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { abdominalPainInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function AbdominalPainPage() {
  return (
    <AcuteConditionsText
      diseaseName={abdominalPainInfo.diseaseName}
      description={abdominalPainInfo.description}
      questionsAndAnswers={abdominalPainInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Abdominal Pain",
  description: "Abdominal pain treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/abdominal-pain",
  },
};
