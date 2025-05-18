import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { utiInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function UTIPage() {
  return (
    <AcuteConditionsText
      diseaseName={utiInfo.diseaseName}
      description={utiInfo.description}
      questionsAndAnswers={utiInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "UTI",
  description: "UTI treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com/urgent-care/acute-conditions/uti",
  },
};
