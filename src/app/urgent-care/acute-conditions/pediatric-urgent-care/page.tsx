import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { pediatricUrgentCareInfo } from "@/lib/content/acute-conditions-items";

export default function PediatricUrgentCarePage() {
  return (
    <AcuteConditionsText
      diseaseName={pediatricUrgentCareInfo.diseaseName}
      description={pediatricUrgentCareInfo.description}
      questionsAndAnswers={pediatricUrgentCareInfo.questionsAndAnswers}
    />
  );
}
