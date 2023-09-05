import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import logo from '/src/assets/images/sanjaylogo.png';
import { AiOutlineHome } from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [ darkMode, setDarkMode ] = useState(false);
  
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
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand} 
      fixed="top"
      expand="md"
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
              <Nav.Link as={Link} to="/resume"  onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <div className="theme" onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}>
              <img src={darkMode === false ? '../../src/assets/images/sun.svg' : '../../src/assets/images/moon.svg'} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
