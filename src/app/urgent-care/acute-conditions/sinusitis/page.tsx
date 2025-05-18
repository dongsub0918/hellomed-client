import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { sinusitisInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function SinusitisPage() {
  return (
    <AcuteConditionsText
      diseaseName={sinusitisInfo.diseaseName}
      description={sinusitisInfo.description}
      questionsAndAnswers={sinusitisInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Sinusitis",
  description: "Sinusitis treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/sinusitis",
  },
};
