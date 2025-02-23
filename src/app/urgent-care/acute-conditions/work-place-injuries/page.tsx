import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { workplaceInjuriesInfo } from "@/lib/content/acute-conditions-items";

export default function WorkPlaceInjuriesPage() {
  return (
    <AcuteConditionsText
      diseaseName={workplaceInjuriesInfo.diseaseName}
      description={workplaceInjuriesInfo.description}
      questionsAndAnswers={workplaceInjuriesInfo.questionsAndAnswers}
    />
  );
}
