import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { geriatricUrgentCareInfo } from "@/lib/acute-conditions-items";

export default function GeriatricUrgentCarePage() {
  return (
    <AcuteConditionsText
      diseaseName={geriatricUrgentCareInfo.diseaseName}
      description={geriatricUrgentCareInfo.description}
      questionsAndAnswers={geriatricUrgentCareInfo.questionsAndAnswers}
    />
  );
}
