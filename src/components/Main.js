import React from 'react';
import Carousel from './Carousel'; // Import the Carousel component

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
    <main className="main-container">
      <Carousel items={featuredCourses} /> {/* Replace this with the Carousel component */}

      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vehicula massa quis velit vestibulum, eget consectetur
            velit blandit.
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <i className="icon">Icon 1</i>
          <h2>Feature 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vehicula massa quis velit vestibulum, eget consectetur
            velit blandit.
          </p>
        </div>
        <div className="feature">
          <i className="icon">Icon 2</i>
          <h2>Feature 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vehicula massa quis velit vestibulum, eget consectetur
            velit blandit.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Join Us Today!</h2>
        <p>
          Sign up now to get access to exclusive content and exciting offers.
        </p>
      </section>
    </main>
  );
};

export default Main;
