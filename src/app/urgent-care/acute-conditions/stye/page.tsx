import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { styeInfo } from "@/lib/content/acute-conditions-items";

export default function StyePage() {
  return (
    <AcuteConditionsText
      diseaseName={styeInfo.diseaseName}
      description={styeInfo.description}
      questionsAndAnswers={styeInfo.questionsAndAnswers}
    />
  );
}
