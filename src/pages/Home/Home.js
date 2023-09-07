import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import Position from "./Position";
import Home2 from "./Home2";
import homepage from "../../Assest/homepage.svg";


function Home() {
  return (
    <section>
    
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Ahmad Afghan</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Position />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 40 }}>
              <img src={homepage} alt="home pic" />
            </Col>
          </Row>
        </Container>
      
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
