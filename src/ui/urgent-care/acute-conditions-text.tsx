import React from "react";

interface ConditionInfoProps {
  diseaseName: string;
  description: string;
  questionsAndAnswers: {
    question: string;
    answer: string;
  }[];
}

export default function AcuteConditionsText({
  diseaseName,
  description,
  questionsAndAnswers,
}: ConditionInfoProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl lg:max-w-screen-lg mx-auto">
      <h2 className="text-2xl lg:text-5xl font-bold text-teal-600 mb-4">
        {diseaseName}
      </h2>
      <p className="text-gray-700 mb-6 lg:text-2xl">{description}</p>

      <div className="space-y-6">
        {questionsAndAnswers.map((qa, index) => (
          <div key={index}>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
              {qa.question}
            </h3>
            <p className="text-gray-600 whitespace-pre-line lg:text-xl">
              {qa.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
