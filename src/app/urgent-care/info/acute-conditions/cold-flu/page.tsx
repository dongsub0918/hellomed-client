import React from "react";
import ConditionInfo from "@/ui/urgent-care/info-conditions-text";
import { coldAndFluInfo } from "@/lib/conditions-items";

export default function ColdFluPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <ConditionInfo
        diseaseName={coldAndFluInfo.diseaseName}
        description={coldAndFluInfo.description}
        questionsAndAnswers={coldAndFluInfo.questionsAndAnswers}
      />
    </div>
  );
}
