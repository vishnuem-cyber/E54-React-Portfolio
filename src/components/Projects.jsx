// Projects.jsx
import React from "react";
import "../components/projects.css"; 
const projects = [
  {
    name: "Fashion Shoppy",
    image: "src/assets/fshoppy.jpg",
    link: "https://vishnuem-cyber.github.io/E54-Module-2-End-Assignment-Create-a-webpage-using-HTML-CSS-JavaScript/",
  },
  {
    name: "Kerala Tourism",
    image: "/src/assets/keral.jpg",
    link: "https://vishnuem-cyber.github.io/Module-End---Assignment--1-HTML-CSS-Bootstrap/",
  },
  {
    name: "Entri Website",
    image: "/src/assets/entry.jpg",
    link: "https://vishnuem-cyber.github.io/6-Bootstrap-Assignment/#",
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-title">{project.name}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">View Project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
