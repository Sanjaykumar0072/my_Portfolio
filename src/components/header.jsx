import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from '/src/assets/images/sanjaylogo.png';
import sun from '/src/assets/images/sun.svg';
import moon from '/src/assets/images/moon.svg';
import { AiOutlineHome } from "react-icons/ai";

import { CgFileDocument, CgUser, CgWorkAlt, CgBolt, CgTikcode,CgWebsite  } from "react-icons/cg";

function NavBar() {
  const [ expand, updateExpanded ] = useState(false);
  const [ darkMode, setDarkMode ] = useState(false);
  const [ navbar, updateNavbar ] = useState(false);
  
  useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.theme')
    
    if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode]);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
      document.querySelector('.navbar').classList.remove('noBoxShadow');
    } else {
      updateNavbar(false);
      document.querySelector('.navbar').classList.add('noBoxShadow');
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand} 
      fixed="top"
      expand="lg"
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex"><img className="logo" src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <a class="nav-link" href="#about">
                <CgUser style={{ marginBottom: "2px" }} /> About
              </a>
            </Nav.Item>
            <Nav.Item>
              <a class="nav-link" href="#skills">
                <CgBolt style={{ marginBottom: "2px" }} /> skills
              </a>
            </Nav.Item>
            <Nav.Item>
              <a class="nav-link" href="#expreience">
                <CgWorkAlt style={{ marginBottom: "2px" }} /> Experience
              </a>
            </Nav.Item>
            <Nav.Item>
              <a class="nav-link" href="#projects">
                <CgTikcode style={{ marginBottom: "2px" }} /> Projects
              </a>
            </Nav.Item>
            <Nav.Item>
              <a class="nav-link" href="#contact">
                <CgWebsite style={{ marginBottom: "2px" }} /> Contact
              </a>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/resume"  onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <div className="theme" onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}>
          <img src={darkMode === false ? sun : moon} />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
