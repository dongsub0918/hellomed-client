import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { jointPainInfo } from "@/lib/acute-conditions-items";

export default function JointPainPage() {
  return (
    <AcuteConditionsText
      diseaseName={jointPainInfo.diseaseName}
      description={jointPainInfo.description}
      questionsAndAnswers={jointPainInfo.questionsAndAnswers}
    />
  );
}
