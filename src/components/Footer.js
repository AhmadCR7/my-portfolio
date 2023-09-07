import "../style.css";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Develop By Ahmad Afghan</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/AhmadCR7" style={{ color: "white" }}>
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/ahmad.mujtabaafghan"
                style={{ color: "white" }}
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in//ahmad-afghan-6a6951176"
                style={{ color: "white" }}
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ahmad_afghan25/"
                style={{ color: "white" }}
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
