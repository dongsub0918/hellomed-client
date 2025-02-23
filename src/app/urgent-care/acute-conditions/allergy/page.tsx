import AcuteConditionsText from "@/ui/urgent-care/acute-conditions-text";
import { allergyInfo } from "@/lib/content/acute-conditions-items";

export default function AllergyPage() {
  return (
    <AcuteConditionsText
      diseaseName={allergyInfo.diseaseName}
      description={allergyInfo.description}
      questionsAndAnswers={allergyInfo.questionsAndAnswers}
    />
  );
}
