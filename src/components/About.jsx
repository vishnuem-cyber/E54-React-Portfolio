import React from "react";
import "../components/About.css"; 
import profileImage from '../assets/profile.jpg';



const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <div className="about-card left-card">
          <img src={profileImage} alt="Profile" className="about-image" />
          <h2>About Me</h2>
          <p>I'm Vishnu Mohandas, a Full Stack Developer passionate about AI and design.</p>
        </div>

        
        <div className="about-card right-card">
          <h2>My Journey</h2>
          <p>
            With experience in Figma, Photoshop, and Illustrator, I bridge the gap between design and development.
            Passionate about problem-solving, I aim to build intuitive and intelligent applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
