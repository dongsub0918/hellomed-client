import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { earInfectionInfo } from "@/lib/content/acute-conditions-items";

export default function ColdFluPage() {
  return (
    <AcuteConditionsText
      diseaseName={earInfectionInfo.diseaseName}
      description={earInfectionInfo.description}
      questionsAndAnswers={earInfectionInfo.questionsAndAnswers}
    />
  );
}
