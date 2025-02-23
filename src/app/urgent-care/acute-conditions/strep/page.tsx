import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { strepInfo } from "@/lib/content/acute-conditions-items";

export default function StrepPage() {
  return (
    <AcuteConditionsText
      diseaseName={strepInfo.diseaseName}
      description={strepInfo.description}
      questionsAndAnswers={strepInfo.questionsAndAnswers}
    />
  );
}
