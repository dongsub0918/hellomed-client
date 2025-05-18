import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { jointPainInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function JointPainPage() {
  return (
    <AcuteConditionsText
      diseaseName={jointPainInfo.diseaseName}
      description={jointPainInfo.description}
      questionsAndAnswers={jointPainInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Joint Pain",
  description: "Joint pain treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/joint-pain",
  },
};
