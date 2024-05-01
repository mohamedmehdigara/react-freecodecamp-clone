import React from 'react';
import styled from 'styled-components';

const LessonContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
`;

const LessonTitle = styled.h3`
  font-size: 18px;
`;

const LessonDuration = styled.span`
  font-weight: bold;
`;

const LessonDescription = styled.p`
  margin-top: 5px;
`;

const LessonCompletionStatus = styled.div`
  font-weight: bold;
  color: ${props => (props.completed ? 'green' : 'red')};
`;

const Lesson = ({ title, duration, description, completed }) => {
    const lessons = [
        {
          id: 1,
          title: "Introduction to React",
          duration: "1 hour",
          description: "Learn the basics of React",
          completed: false
        },
        {
          id: 2,
          title: "State Management in React",
          duration: "2 hours",
          description: "Understand how to manage state in React applications",
          completed: true
        },
        // Add more lessons as needed
      ];
  return (
    <LessonContainer>
      <LessonTitle>{title}</LessonTitle>
      <LessonDuration>Duration: {duration}</LessonDuration>
      <LessonDescription>{description}</LessonDescription>
      <LessonCompletionStatus completed={completed}>
        {completed ? 'Completed' : 'Incomplete'}
      </LessonCompletionStatus>
    </LessonContainer>
  );
};

export default Lesson;
