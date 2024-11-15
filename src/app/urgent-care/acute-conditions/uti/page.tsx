import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { utiInfo } from "@/lib/acute-conditions-items";

export default function UTIPage() {
  return (
    <AcuteConditionsText
      diseaseName={utiInfo.diseaseName}
      description={utiInfo.description}
      questionsAndAnswers={utiInfo.questionsAndAnswers}
    />
  );
}
