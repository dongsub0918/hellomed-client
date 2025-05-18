import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { strepInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function StrepPage() {
  return (
    <AcuteConditionsText
      diseaseName={strepInfo.diseaseName}
      description={strepInfo.description}
      questionsAndAnswers={strepInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Strep",
  description: "Strep throat treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com/urgent-care/acute-conditions/strep",
  },
};
