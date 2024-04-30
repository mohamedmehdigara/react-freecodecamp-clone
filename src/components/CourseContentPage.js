import React from 'react';
import styled from 'styled-components';
import ProgressTracker from './ProgressTracker';
import CourseNavigation from './CourseNavigation';

const ContentContainer = styled.div`
  /* Add your styles here */
  padding: 20px;
`;

const ContentTitle = styled.h2`
  /* Add your styles here */
  font-size: 24px;
  margin-bottom: 20px;
`;

const ContentBody = styled.div`
  /* Add your styles here */
`;

const CourseContentPage = () => {
  return (
    <ContentContainer>
      <ContentTitle>Course Content</ContentTitle>
      <ContentBody>
        {/* Add your course content here */}
        <CourseNavigation/>
        <ProgressTracker/>
      </ContentBody>
    </ContentContainer>
  );
};

export default CourseContentPage;
