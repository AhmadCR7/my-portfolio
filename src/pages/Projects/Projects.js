import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "../../style.css";
import database from "../../Assest/database.webp";
import sfsumarket from "../../Assest/sfsumarket.png";
import shopper from "../../Assest/shopper.png";
import Particles from "react-particles-js";
import particles from "../Home/particles";
import Contact from "../About/Contact";
function Projects() {
  return (
    <section>
      {" "}
      <Container fluid className="project-section">
        <Particles params={particles} className="particle" />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects </strong>
          </h1>
          <Row>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={sfsumarket}
                isBlog={false}
                title="SFSU Market"
                description="SFSU Market is a E-Commerce web application where SFSU studnts and faculty members can buy and sell items. I worked as front-end lead with 7 other talanted studets from CSC648 class.  We used React.js with Bootstrap as a front-end and NodeJS + Expressjs server along MySQL database as a backend."
                link="https://github.com/AhmadCR7/SFSU-Market"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={database}
                isBlog={false}
                title="Dealership Database"
                description="Designed and implemented a complete inventory database using MySQL and Python. This is a complete reational database that can be used in any dealership or any other businesses. This database a dealer can see their avilable invetory along with transactions, and stuff information. This project was my term project for CSC675 Database class at SFSU. "
                link="https://github.com/AhmadCR7/Car-Dealership-Database"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={shopper}
                isBlog={false}
                title="Shopper Paradise"
                description="Shopper Paradise is a online e-commerce application where users can buy and sell items. It was successfully implemented using React.js and bootstrap on the client side along with Node.js and express on the backend. In Shopper Paradise seller can login to their account, view listed items, and post more item.  "
                link="https://github.com/AhmadCR7/Shooper-Paradise"
              />
            </Col>
          </Row>
        </Container>
        <Contact />
      </Container>
    </section>
  );
}

export default Projects;
