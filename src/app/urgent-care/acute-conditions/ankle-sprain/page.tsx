import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { ankleSprainInfo } from "@/lib/content/acute-conditions-items";

export default function AnkleSprainPage() {
  return (
    <AcuteConditionsText
      diseaseName={ankleSprainInfo.diseaseName}
      description={ankleSprainInfo.description}
      questionsAndAnswers={ankleSprainInfo.questionsAndAnswers}
    />
  );
}
