import { useState } from "react";
import { Button } from "@/components/ui/button";

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizQuestion = ({ question, options, correctAnswer, onAnswer }: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === correctAnswer;
    setIsAnswered(true);
    onAnswer(isCorrect);
  };

  return (
    <div className="mb-8 p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-4">{question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {options.map((option, index) => (
          <Button
            key={index}
            variant={selectedOption === option ? "default" : "outline"}
            onClick={() => handleOptionClick(option)}
            className={`w-full text-left justify-start h-auto py-3 ${
              isAnswered && option === correctAnswer ? "bg-green-500 hover:bg-green-600" : ""
            } ${
              isAnswered && selectedOption === option && option !== correctAnswer ? "bg-red-500 hover:bg-red-600" : ""
            }`}
            disabled={isAnswered}
          >
            {option}
          </Button>
        ))}
      </div>
      <Button onClick={handleSubmit} disabled={selectedOption === null || isAnswered}>
        Submit
      </Button>
    </div>
  );
};

export default QuizQuestion;
