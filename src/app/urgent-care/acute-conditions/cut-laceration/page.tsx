import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { cutLacerationInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function CutLacerationPage() {
  return (
    <AcuteConditionsText
      diseaseName={cutLacerationInfo.diseaseName}
      description={cutLacerationInfo.description}
      questionsAndAnswers={cutLacerationInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Cut & Laceration",
  description:
    "Cut and laceration treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/cut-laceration",
  },
};
