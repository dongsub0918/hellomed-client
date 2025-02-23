import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { backAndNeckPainInfo } from "@/lib/content/acute-conditions-items";

export default function BackAndNeckPainPage() {
  return (
    <AcuteConditionsText
      diseaseName={backAndNeckPainInfo.diseaseName}
      description={backAndNeckPainInfo.description}
      questionsAndAnswers={backAndNeckPainInfo.questionsAndAnswers}
    />
  );
}
