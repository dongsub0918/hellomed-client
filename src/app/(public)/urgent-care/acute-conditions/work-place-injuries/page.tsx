import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { workplaceInjuriesInfo } from "@/lib/content/acute-conditions-items";
import { Metadata } from "next";

export default function WorkPlaceInjuriesPage() {
  return (
    <AcuteConditionsText
      diseaseName={workplaceInjuriesInfo.diseaseName}
      description={workplaceInjuriesInfo.description}
      questionsAndAnswers={workplaceInjuriesInfo.questionsAndAnswers}
    />
  );
}

export const metadata: Metadata = {
  title: "Work Place Injuries",
  description:
    "Work place injury treatment at HELLOMED in Ann Arbor, Michigan.",
  metadataBase: new URL("https://hello-med.com"),
  alternates: {
    canonical:
      "https://www.hello-med.com/urgent-care/acute-conditions/work-place-injuries",
  },
};
