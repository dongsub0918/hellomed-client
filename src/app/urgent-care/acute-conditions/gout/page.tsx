import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { goutInfo } from "@/lib/content/acute-conditions-items";

export default function GOUTPage() {
  return (
    <AcuteConditionsText
      diseaseName={goutInfo.diseaseName}
      description={goutInfo.description}
      questionsAndAnswers={goutInfo.questionsAndAnswers}
    />
  );
}
