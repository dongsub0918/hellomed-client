import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { earInfectionInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function ColdFluPage() {
  return (
    <AcuteConditionsText
      diseaseName={earInfectionInfo.diseaseName}
      description={earInfectionInfo.description}
      questionsAndAnswers={earInfectionInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Ear Infection",
  description: "Ear infection treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/ear-infection",
  },
};
