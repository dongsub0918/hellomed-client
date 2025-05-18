import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { covidInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function CovidPage() {
  return (
    <AcuteConditionsText
      diseaseName={covidInfo.diseaseName}
      description={covidInfo.description}
      questionsAndAnswers={covidInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "COVID-19",
  description:
    "COVID-19 testing and treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical: "https://www.hello-med.com/urgent-care/acute-conditions/covid",
  },
};
