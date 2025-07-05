import React from 'react';
import '../style/Home.css';

import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import logo from "../component/image.png.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="intro-wrapper">
        {/* Left: Text */}
        <div className="intro-text">
          <h1 className="intro">Hey there...</h1>
          <h2 className="name">
            I'm <span className="highlight">Kiran Kumar</span>
          </h2>
          <h3 className="typing">
            I'm a <span className="role">MERN Developer</span>
          </h3>

          <div className="typing1">
            <p>Technologies I work with:</p>
            <ul>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>Git & GitHub</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>

        {/* Right: Image */}
        <div className="profile-image">
          <img src={logo} alt="Kiran Kumar" />
        </div>
      </div>

      <About />
      <div id="skills-section">
        <Skills />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
