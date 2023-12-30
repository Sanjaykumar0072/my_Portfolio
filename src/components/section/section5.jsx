import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CgLoupe } from "react-icons/cg";
import { CgLink } from "react-icons/cg";
import portfoliothumbnail from '/src/assets/images/portfolio-screenshot.png';
import darshiinithumbnail from '/src/assets/images/darshiini-screenshot.png';
import divtagthumbnail from '/src/assets/images/divtag-screenshot.png';

function Projects() {

  return (
    <Container fluid className="projects-section" id="projects">
      <Container>
        <Row>
          <h1><span>Latest </span>Projects</h1>
          <Col md={12} className="projects-content">
            <div className="projects-gallery">
              <div className="mix prt-card web">
                <div className="prt-image">
                  <img src={portfoliothumbnail} alt="" />
                  <div className="prt-overlay">
                    {/* <span className="prt-icon zoom-icon">
                        <CgLoupe />
                      </span> */}
                    <a href="#" className="prt-icon">
                      <CgLink />
                    </a>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>Portfolio </h3>
                  {/* <a href="" className="btn secondary-btn sm">Read more</a> */}
                </div>
              </div>

              <div className="mix prt-card web">
                <div className="prt-image">
                  <img src={darshiinithumbnail} alt="" />
                  <div className="prt-overlay">
                    {/* <span className="prt-icon zoom-icon">
                        <CgLoupe />
                      </span> */}
                    <a href="https://darshiinivsdance.web.app/" target="_blank" className="prt-icon">
                      <CgLink />
                    </a>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>Bharathanatiyam static Page</h3>
                  {/* <a href="" className="btn secondary-btn sm">Read more</a> */}
                </div>
              </div>

              <div className="mix prt-card web">
                <div className="prt-image">
                  <img src={divtagthumbnail} alt="" />
                  <div className="prt-overlay">
                    {/* <span className="prt-icon zoom-icon">
                        <CgLoupe />
                      </span> */}
                    <a href="https://divatg.io/" target="_blank" className="prt-icon">
                      <CgLink />
                    </a>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>Bharathanatiyam static Page</h3>
                  {/* <a href="" className="btn secondary-btn sm">Read more</a> */}
                </div>
              </div>
            </div>
          </Col>
          <div className="cta">
            <a href="mailto:b.sanjaykumar2000@gmail.com" className="btn">Hire Me</a>
            <a href="/resume" className="btn secondary-btn">View CV</a>
          </div>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
