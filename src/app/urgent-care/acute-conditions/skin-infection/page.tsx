import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { skinInfectionInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function SkinInfectionPage() {
  return (
    <AcuteConditionsText
      diseaseName={skinInfectionInfo.diseaseName}
      description={skinInfectionInfo.description}
      questionsAndAnswers={skinInfectionInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Skin Infection",
  description: "Skin infection treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/skin-infection",
  },
};
