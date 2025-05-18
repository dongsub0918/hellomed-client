import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { ankleSprainInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function AnkleSprainPage() {
  return (
    <AcuteConditionsText
      diseaseName={ankleSprainInfo.diseaseName}
      description={ankleSprainInfo.description}
      questionsAndAnswers={ankleSprainInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Ankle Sprain",
  description: "Ankle sprain treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/ankle-sprain",
  },
};
