import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { cutLacerationInfo } from "@/lib/acute-conditions-items";

export default function CutLacerationPage() {
  return (
    <AcuteConditionsText
      diseaseName={cutLacerationInfo.diseaseName}
      description={cutLacerationInfo.description}
      questionsAndAnswers={cutLacerationInfo.questionsAndAnswers}
    />
  );
}
