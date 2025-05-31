import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { geriatricUrgentCareInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function GeriatricUrgentCarePage() {
  return (
    <AcuteConditionsText
      diseaseName={geriatricUrgentCareInfo.diseaseName}
      description={geriatricUrgentCareInfo.description}
      questionsAndAnswers={geriatricUrgentCareInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Geriatric Urgent Care",
  description:
    "Geriatric urgent care services at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/geriatric-urgent-care",
  },
};
