import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the QuizComponent
const QuizContainer = styled.div`
  /* Add styles for the quiz container */
`;

const Question = styled.div`
  /* Add styles for the quiz question */
`;

const Option = styled.div`
  /* Add styles for the quiz options */
`;

const Feedback = styled.div`
  /* Add styles for the feedback message */
`;

const Quiz = ({ quizData }) => {
  // State to track user responses and show feedback
  const [responses, setResponses] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  // Function to handle user's selection of an option
  const handleOptionSelect = (questionId, optionId) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionId]: optionId,
    }));
  };

  // Function to handle quiz submission
  const handleSubmit = () => {
    // Logic to check user responses and calculate score
    // You can customize this logic based on your requirements
    setShowFeedback(true);
  };

  return (
    <QuizContainer>
      {/* Render each quiz question */}
      {quizData.map(question => (
        <Question key={question.id}>
          <p>{question.text}</p>
          {/* Render options for each question */}
          {question.options.map(option => (
            <Option key={option.id}>
              <input
                type="radio"
                id={`option-${option.id}`}
                name={`question-${question.id}`}
                value={option.id}
                checked={responses[question.id] === option.id}
                onChange={() => handleOptionSelect(question.id, option.id)}
              />
              <label htmlFor={`option-${option.id}`}>{option.text}</label>
            </Option>
          ))}
        </Question>
      ))}
      {/* Button to submit the quiz */}
      <button onClick={handleSubmit}>Submit</button>
      {/* Feedback message */}
      {showFeedback && <Feedback>Your quiz has been submitted!</Feedback>}
    </QuizContainer>
  );
};

export default Quiz;
