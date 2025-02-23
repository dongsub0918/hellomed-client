import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { skinInfectionInfo } from "@/lib/content/acute-conditions-items";

export default function SkinInfectionPage() {
  return (
    <AcuteConditionsText
      diseaseName={skinInfectionInfo.diseaseName}
      description={skinInfectionInfo.description}
      questionsAndAnswers={skinInfectionInfo.questionsAndAnswers}
    />
  );
}
