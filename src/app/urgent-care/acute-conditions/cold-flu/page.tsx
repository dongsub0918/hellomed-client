import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { coldFluInfo } from "@/lib/acute-conditions-items";

export default function ColdFluPage() {
  return (
    <AcuteConditionsText
      diseaseName={coldFluInfo.diseaseName}
      description={coldFluInfo.description}
      questionsAndAnswers={coldFluInfo.questionsAndAnswers}
    />
  );
}
