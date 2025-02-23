import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { covidInfo } from "@/lib/content/acute-conditions-items";

export default function CovidPage() {
  return (
    <AcuteConditionsText
      diseaseName={covidInfo.diseaseName}
      description={covidInfo.description}
      questionsAndAnswers={covidInfo.questionsAndAnswers}
    />
  );
}
