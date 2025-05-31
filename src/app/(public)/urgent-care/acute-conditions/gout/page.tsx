import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { goutInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function GOUTPage() {
  return (
    <AcuteConditionsText
      diseaseName={goutInfo.diseaseName}
      description={goutInfo.description}
      questionsAndAnswers={goutInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Gout",
  description: "Gout treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com/urgent-care/acute-conditions/gout",
  },
};
