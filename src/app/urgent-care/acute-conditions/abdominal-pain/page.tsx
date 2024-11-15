import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { abdominalPainInfo } from "@/lib/acute-conditions-items";

export default function AbdominalPainPage() {
  return (
    <AcuteConditionsText
      diseaseName={abdominalPainInfo.diseaseName}
      description={abdominalPainInfo.description}
      questionsAndAnswers={abdominalPainInfo.questionsAndAnswers}
    />
  );
}
