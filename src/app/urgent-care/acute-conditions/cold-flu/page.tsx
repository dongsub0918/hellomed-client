import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { coldFluInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function ColdFluPage() {
  return (
    <AcuteConditionsText
      diseaseName={coldFluInfo.diseaseName}
      description={coldFluInfo.description}
      questionsAndAnswers={coldFluInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Cold & Flu",
  description: "Cold and flu treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/cold-flu",
  },
};
