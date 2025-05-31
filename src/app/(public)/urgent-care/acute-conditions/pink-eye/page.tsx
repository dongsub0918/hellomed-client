import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { pinkEyeInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function PinkEyePage() {
  return (
    <AcuteConditionsText
      diseaseName={pinkEyeInfo.diseaseName}
      description={pinkEyeInfo.description}
      questionsAndAnswers={pinkEyeInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Pink Eye",
  description: "Pink eye treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/pink-eye",
  },
};
