import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css"; // Add styles here

// Import skill logos (Make sure they exist in /assets/)
import figmaLogo from "../assets/figma.png";
import photoshopLogo from "../assets/photoshop.png";
import illustratorLogo from "../assets/illustrator.png";
import newSkillLogo from "../assets/mernstack.jpg"; // Add your new skill image



const skills = [
  { name: "Figma", image: figmaLogo, description: "Proficient in Figma",  },
  { name: "Photoshop", image: photoshopLogo, description: "Proficient in Adobe Photoshop", },
  { name: "Illustrator", image: illustratorLogo, description: "Proficient in Adobe Illustrator",  },
  { name: "MERN STACK", image: newSkillLogo, description: "Proficient in MERN Stack",   } // 
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container fluid>
  <h2 className="text-center text-uppercase fw-bold">Skills</h2>
  <Row className="g-4 justify-content-center">
    {skills.map((skill, index) => (
      <Col md={3} sm={6} xs={12} key={index}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundColor: skill.bgColor }}>
              <img src={skill.image} alt={skill.name} className="skill-logo" />
            </div>
            <div className="flip-card-back">
              <h5>{skill.name}</h5>
              <p>{skill.description}</p>
            </div>
          </div>
        </div>
      </Col>
    ))}
  </Row>
</Container>

    </section>
  );
};


export default Skills;
