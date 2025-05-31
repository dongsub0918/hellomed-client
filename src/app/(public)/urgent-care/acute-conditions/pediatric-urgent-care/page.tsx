import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { pediatricUrgentCareInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function PediatricUrgentCarePage() {
  return (
    <AcuteConditionsText
      diseaseName={pediatricUrgentCareInfo.diseaseName}
      description={pediatricUrgentCareInfo.description}
      questionsAndAnswers={pediatricUrgentCareInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Pediatric Urgent Care",
  description:
    "Pediatric urgent care services at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/pediatric-urgent-care",
  },
};
