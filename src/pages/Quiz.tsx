import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";

const quizQuestions = [
  {
    question: "What is the best way to grow your money over the long term?",
    options: ["Keeping it in a savings account", "Investing in the stock market", "Buying lottery tickets", "Hiding it under your mattress"],
    correctAnswer: "Investing in the stock market",
  },
  {
    question: "What does 'diversification' mean in investing?",
    options: ["Putting all your money in one stock", "Spreading your investments across different assets", "Only investing in your home country", "Investing only in cryptocurrency"],
    correctAnswer: "Spreading your investments across different assets",
  },
  {
    question: "What is a good credit score?",
    options: ["Below 500", "500-600", "600-700", "Above 700"],
    correctAnswer: "Above 700",
  },
  {
    question: "What is the purpose of a budget?",
    options: ["To restrict all your spending", "To track your income and expenses and plan your spending", "To impress your friends", "To get into debt"],
    correctAnswer: "To track your income and expenses and plan your spending",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Spendora | Financial Literacy Quiz";
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizFinished(true);
      }
    }, 1500); // Wait 1.5 seconds before moving to the next question
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <PageTransition>
      <div className="min-h-screen container mx-auto px-4 sm:px-6 py-24">
        <h1 className="text-4xl font-bold text-center mb-8">Financial Literacy Quiz</h1>
        {quizFinished ? (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Quiz Complete!</h2>
            <p className="text-xl mb-6">Your score: {score} out of {quizQuestions.length}</p>
            <Button onClick={restartQuiz}>Try Again</Button>
          </div>
        ) : (
          <QuizQuestion
            question={quizQuestions[currentQuestionIndex].question}
            options={quizQuestions[currentQuestionIndex].options}
            correctAnswer={quizQuestions[currentQuestionIndex].correctAnswer}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </PageTransition>
  );
};

export default Quiz;
