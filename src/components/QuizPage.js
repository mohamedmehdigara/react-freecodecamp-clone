import React from 'react';
import Quiz from './Quiz';

const QuizPage = () => {
  // Sample quiz data
  const quizData = [
    {
      id: 1,
      text: 'What is the capital of France?',
      options: [
        { id: 1, text: 'Paris' },
        { id: 2, text: 'London' },
        { id: 3, text: 'Berlin' },
        { id: 4, text: 'Madrid' },
      ],
      correctOptionId: 1, // ID of the correct option
    },
    {
      id: 2,
      text: 'Which planet is known as the Red Planet?',
      options: [
        { id: 1, text: 'Earth' },
        { id: 2, text: 'Mars' },
        { id: 3, text: 'Venus' },
        { id: 4, text: 'Jupiter' },
      ],
      correctOptionId: 2, // ID of the correct option
    },
    // Add more quiz questions as needed
  ];

  return (
    <div>
      <h2>Quiz</h2>
      {/* Render the QuizComponent with quizData */}
      <Quiz quizData={quizData} />
    </div>
  );
};

export default QuizPage;
