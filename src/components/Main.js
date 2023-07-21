import React from 'react';


const Main = () => {
  return (
    <main className="main-container">
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
