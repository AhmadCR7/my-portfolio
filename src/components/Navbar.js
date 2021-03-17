import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";
import new_resume from "../Assest/new resume.pdf";
//const element = <FontAwesomeIcon icon={faCoffee} />;
function NavBar() {
  return (
    <Navbar
      //expanded={expand}
      fixed="top"
      expand="md"
      //className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            //  updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                <i class="fa fa-home" aria-hidden="true"></i> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                // onClick={() => updateExpanded(false)}
              >
                <i class="fa fa-user" aria-hidden="true"></i> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project">
                <i className="fa fab fa-codepen"></i> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={new_resume}>
                <i class="fa fa fa-file-o" aria-hidden="true"></i>Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/AhmadCR7"
                target="_blank"
                className="fork-btn-inner"
              >
                <i class="fa fa-github" aria-hidden="true"></i>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
