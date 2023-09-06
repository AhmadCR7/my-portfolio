import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";

function Home2() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I'm fun to work with, I always like to learn new things from
                others as much as helping others solve their problems.
                <br />
                <br />
                I’m currently working on some of
                <i>
                  <b className="purple"> my side projects. </b>
                </i>
                <br />
                <br />I am fluent in &nbsp;
                <i>
                  <b className="purple">
                    React.js, Node.js, Javascript, HTML&CSS, C++, SQLDatabase.
                  </b>
                </i>
                <br />
                <br />I love to Contribute more to
                <i>
                  <b className="purple"> open </b>
                </i>
                &nbsp;source
                <i>
                  <b className="purple"> projects.</b>
                </i>
              </p>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home2;
