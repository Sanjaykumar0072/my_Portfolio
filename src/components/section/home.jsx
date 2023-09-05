import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Type from "./type";
import banner from '../../assets/images/section-banner.png';
import AboutMe from './section1';
import Skills from "./section2";
import Experience from "./section3";
import FindMe from "./section4";
import NavBar from "../header";
import Footer from "../footer";
import ScrollToTop from "../scroll-to-top";

function Home() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
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
                  <strong className="main-name color-font"> SANJAY KUMAR</strong>
                </h1>

                <div className="typewritter">
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <Tilt>
                  <img src={banner} alt="home pic" className="img-fluid" style={{ maxHeight: "350px" }} />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
        <AboutMe />
        <Skills />      
        <Experience />
        <FindMe />
      </section>
      <Footer />
    </>
  );
}

export default Home;
