import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { pinkEyeInfo } from "@/lib/content/acute-conditions-items";

export default function PinkEyePage() {
  return (
    <AcuteConditionsText
      diseaseName={pinkEyeInfo.diseaseName}
      description={pinkEyeInfo.description}
      questionsAndAnswers={pinkEyeInfo.questionsAndAnswers}
    />
  );
}
