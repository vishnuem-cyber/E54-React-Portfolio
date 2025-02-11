// src/Portfolio.js

import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button, Card, ProgressBar, Form } from 'react-bootstrap';
import About from "./About";
import Skills from './Skills';
import Projects from './Projects'


import './Portfolio.css';





const Portfolio = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-lg">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      {/* Hero Section */}
      <section
  id="home"
  className="hero-section d-flex flex-column align-items-center text-center vh-100 text-red"
>
  <Container>
    <h1 className="display-3 fw-bold title-text">Hi, I'm Vishnu Mohandas</h1>
    <p className="lead subtitle-text">
      Full Stack Developer | AI Enthusiast | Designer
    </p>
    <Button
      variant="outline-light"
      size="lg"
      href="#projects"
      className="hero-btn"
    >
      View My Work
    </Button>
  </Container>
</section>


   {/* About Section */}
   <section id="about">
        <About />
      </section>
      

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
  <Container>
     <Skills />
  </Container>
</section>

{/* Certifications Box */}
<div className="certifications-section py-5" style={{
  backgroundImage: "linear-gradient(135deg, rgba(222, 134, 240, 0.8), rgba(211, 188, 240, 0.8))",
  backgroundSize: "cover",
  backgroundPosition: "center",
  
  color: "white",
  textAlign: "center",
  padding: "50px 0"
}}>
  <h2 className="text-uppercase fw-bold" style={{ marginBottom: "30px" }}>
    <i className="bi bi-award-fill text-warning"></i> Certifications
  </h2>

  <div className="certifications-container" style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
  }}>
    {[
      { title: "Figma", desc: "Certified in Figma", bg: "#4a90e2" },
      { title: "Photoshop", desc: "Certified in Adobe Photoshop", bg: "#ff6b6b" },
      { title: "Illustrator", desc: "Certified in Adobe Illustrator", bg: "#f4a261" }
    ].map((cert, index) => (
      <div key={index} style={{
        background: cert.bg,
        borderRadius: "15px",
        padding: "20px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
        transition: "0.3s",
        transform: "scale(1)",
        cursor: "pointer"
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <h4 style={{ marginBottom: "10px", fontSize: "20px", color: "white" }}>{cert.title}</h4>
        <p style={{ fontSize: "16px", color: "white" }}>{cert.desc}</p>
      </div>
    ))}
  </div>
</div>

      
      
{/* Projects Section */}
<section id="projects">
  <Projects />
</section>



      {/* Contact Section */}
      <section id="contact" className="py-5 bg-gradient">
        <Container>
          <h2 className="text-center text-uppercase fw-bold">Contact Me</h2>
          <Form className="contact-form p-4 rounded shadow-lg bg-white">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>
            <Button variant="primary" type="submit">Send</Button>
          </Form>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-dark text-white">
        <Container>
          <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
        </Container>
      </footer>
    </>
  );
};

export default Portfolio;
