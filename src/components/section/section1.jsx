import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Type from "./type";
import bannerImg from '../../assets/images/section-banner.png';

export default function Banner() {
    return (
        <>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h4 className="role">Web Developer</h4>
                            <h1 className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name color-font"> SANJAY KUMAR</strong>
                            </h1>
                            <div className="cta">
                                <a href="mailto:b.sanjaykumar2000@gmail.com" className="btn">Contact Me</a>
                                <a href="/resume" className="btn secondary-btn">View CV</a>
                            </div>
                            <div className="typewritter">
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <Tilt>
                                <img src={bannerImg} alt="home pic" className="img-fluid" style={{ maxHeight: "350px" }} />
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
                <div className="animation_main_div">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </Container>
        </>
    )
}