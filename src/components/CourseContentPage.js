import React from 'react';
import styled from 'styled-components';
import ProgressTracker from './ProgressTracker';
import CourseNavigation from './CourseNavigation';
import Lesson from './Lesson';
import QuizPage from './QuizPage';

const ContentContainer = styled.div`
  padding: 20px;
`;

const ContentTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ContentBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr; /* Adjust column ratio as needed */
  gap: 20px; /* Add gap between columns */
`;

const sections = [
  {
    id: 1,
    title: "Introduction",
    description: "An overview of the course and what students will learn.",
    lessons: [
      { id: 1, title: "Course Introduction", duration: "5 minutes" },
      { id: 2, title: "Why Learn React?", duration: "7 minutes" }
    ]
  },
  {
    id: 2,
    title: "Core Concepts",
    description: "Fundamental concepts of React development.",
    lessons: [
      { id: 3, title: "Components and JSX", duration: "10 minutes" },
      { id: 4, title: "State and Props", duration: "12 minutes" }
    ]
  },
  // Add more sections as needed
];

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


const CourseContentPage = () => {
  

  return (
    <ContentContainer>
      <ContentTitle>Course Content</ContentTitle>
      <ContentBody>
        <CourseNavigation sections={sections} /> {/* Pass course sections as prop */}
        {/* Add your course content here */}
        {lessons.map(lesson => (
        <Lesson
          key={lesson.id}
          title={lesson.title}
          duration={lesson.duration}
          description={lesson.description}
          completed={lesson.completed}
        />
      ))}
      <QuizPage/>
        <ProgressTracker />
      </ContentBody>
    </ContentContainer>
  );
};

export default CourseContentPage;
