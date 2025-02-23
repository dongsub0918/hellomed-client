import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { burnInfo } from "@/lib/content/acute-conditions-items";

export default function BurnPage() {
  return (
    <AcuteConditionsText
      diseaseName={burnInfo.diseaseName}
      description={burnInfo.description}
      questionsAndAnswers={burnInfo.questionsAndAnswers}
    />
  );
}
