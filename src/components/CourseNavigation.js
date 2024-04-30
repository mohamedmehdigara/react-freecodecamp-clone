import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for better styling control
const NavigationContainer = styled.nav`
  /* Add container styles */
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavigationItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const NavigationLink = styled(Link)`
  color: #333;
  text-decoration: none;
  display: block;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CourseNavigation = ({ sections }) => {
  return (
    <NavigationContainer>
      <NavigationList>
        {sections&&sections.map((section, index) => (
          <NavigationItem key={index}>
            <NavigationLink to={`/course/${section.id}`}>{section.title}</NavigationLink>
          </NavigationItem>
        ))}
      </NavigationList>
    </NavigationContainer>
  );
};

export default CourseNavigation;
