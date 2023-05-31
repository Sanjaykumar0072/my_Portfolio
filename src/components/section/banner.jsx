import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./type";
import banner from '../../assets/section-banner.png';
import AboutMe from './aboutme';
import Skills from "./skills";
import FindMe from "./findme";
import Experience from "../experience";

function Section1() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SANJAY KUMAR</strong>
              </h1>

              <div className="typewritter">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={banner}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutMe />
      <Skills />      
      <Experience />
      <FindMe />
    </section>
  );
}

export default Section1;
