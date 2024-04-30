import React from 'react';
import styled from 'styled-components'; // Import styled-components
import Carousel from './Carousel'; // Import the Carousel component

// Styled components
const MainContainer = styled.main`
  /* Add your styles here */
  padding: 20px;
`;

const HeroSection = styled.section`
  /* Add your styles here */
  background-color: #f0f0f0;
  padding: 40px;
`;

const HeroContent = styled.div`
  /* Add your styles here */
  max-width: 800px;
  margin: 0 auto;
`;

const FeaturesSection = styled.section`
  /* Add your styles here */
  padding: 40px;
`;

const Feature = styled.div`
  /* Add your styles here */
  margin-bottom: 20px;
`;

const CtaSection = styled.section`
  /* Add your styles here */
  background-color: #333;
  color: #fff;
  padding: 40px;
`;
const Main = () => {
  // Sample data for featured courses
  const featuredCourses = [
    {
      title: "React Fundamentals",
      description: "Master the fundamentals of building web applications with React.",
      image: "react-fundamentals.jpg"
    },
    {
      title: "JavaScript Basics",
      description: "Learn the basics of JavaScript programming language.",
      image: "javascript-basics.jpg"
    },
    // Add more featured courses as needed
  ];

  return (
    <MainContainer className="main-container">
      <Carousel items={featuredCourses} /> {/* Replace this with the Carousel component */}

      <HeroSection className="hero-section">
        <HeroContent className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vehicula massa quis velit vestibulum, eget consectetur
            velit blandit.
          </p>
        </HeroContent>
      </HeroSection>

      <FeaturesSection className="features-section">
        <Feature className="feature">
          <i className="icon">Icon 1</i>
          <h2>Feature 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vehicula massa quis velit vestibulum, eget consectetur
            velit blandit.
          </p>
        </Feature>
        <Feature className="feature">
          <i className="icon">Icon 2</i>
          <h2>Feature 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vehicula massa quis velit vestibulum, eget consectetur
            velit blandit.
          </p>
        </Feature>
      </FeaturesSection>

      <CtaSection className="cta-section">
        <h2>Join Us Today!</h2>
        <p>
          Sign up now to get access to exclusive content and exciting offers.
        </p>
      </CtaSection>
    </MainContainer>
  );
};

export default Main;
