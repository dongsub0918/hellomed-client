import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { sinusitisInfo } from "@/lib/acute-conditions-items";

export default function SinusitisPage() {
  return (
    <AcuteConditionsText
      diseaseName={sinusitisInfo.diseaseName}
      description={sinusitisInfo.description}
      questionsAndAnswers={sinusitisInfo.questionsAndAnswers}
    />
  );
}
