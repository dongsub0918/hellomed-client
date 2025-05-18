import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { styeInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function StyePage() {
  return (
    <AcuteConditionsText
      diseaseName={styeInfo.diseaseName}
      description={styeInfo.description}
      questionsAndAnswers={styeInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Stye",
  description: "Stye treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com/urgent-care/acute-conditions/stye",
  },
};
