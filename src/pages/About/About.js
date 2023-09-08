import { Container, Row, Col, Card } from "react-bootstrap";
import "../../style.css";
import myphoto from "../../Assest/myphoto.jpg";
import Github from "./Github";
import Contact from "./Contact";


function About() {
  return (
    <section>
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'm</strong>
              </h1>
              <Card className="quote-card-view">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                      Hi Everyone, I am{" "}
                      <span className="purple">Ahmad Afghan </span>
                      <span className="purple"></span>I live in California. I
                      recently graduagted as a{" "}
                      <span className="purple">Computer Sciece</span> Major form{" "}
                      <span className="purple">
                        San Francisco State University{" "}
                      </span>
                      and currently working to get my master degree.
                      <br />
                      <br />I also love to:
                    </p>
                    <ul>
                      <li className="about-activity">
                        <i className="far fa-hand-point-right"></i> Playing FIFA
                      </li>
                      <li className="about-activity">
                        <i className="far fa-hand-point-right"></i> Watch Soccer
                        #HalaMadrid
                      </li>
                      <li className="about-activity">
                        <i className="far fa-hand-point-right"></i> Travelling
                      </li>
                    </ul>

                    <br />
                    <br />
                    <br />

                    <p style={{ marginBlockEnd: 0, color: "#202020" }}>
                      "Don’t compare yourself with anyone in this world…if you
                      do so, you are insulting yourself."{" "}
                    </p>
                    <footer className="blockquote-footer">Bill Gates</footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={myphoto} alt="about" className="img-fluid"></img>
            </Col>
          </Row>
          <Github />
          <Contact />
        </Container>
      </Container>
    </section>
  );
}

export default About;
