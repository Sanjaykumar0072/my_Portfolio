import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJqueryLogo,
  DiJavascript1,
  DiReact,
  DiWordpress,
  DiNodejs,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";

function Techstack() {
  return (
    <Container>
        <Row className="skills justify-content-center">
            <h1>Professional <span>Skills</span></h1>
        <Col md={2} className="tech-icons">
            <DiHtml5 />
            <h2>HTML</h2>
        </Col>
        <Col md={2} className="tech-icons">
            <DiCss3 />
            <h2>CSS</h2>
        </Col>
        <Col md={2} className="tech-icons">
            <DiSass />
            <h2>Sass</h2>
        </Col>
        <Col md={2} className="tech-icons">
            <DiJavascript1 />
            <h2>Javascript</h2>
        </Col>
        <Col md={2} className="tech-icons">
            <DiJqueryLogo />
            <h2>Jquery</h2>
        </Col>
        <Col md={2} className="tech-icons">
            <DiBootstrap />
            <h2>Bootstrap</h2>
        </Col>
        <Col md={2} className="tech-icons">
            <DiWordpress />
            <h2>Wordpress</h2>
        </Col>
        <Col md={2} className="tech-icons">
            <DiMongodb />
            <h2>Mongodb</h2>
        </Col>
        <Col md={2} className="tech-icons">
            <DiNodejs />
            <h2>Nodejs</h2>
        </Col>
        <Col md={2} className="tech-icons">
            <DiReact />
            <h2>React</h2>
        </Col>
        <Col md={2} className="tech-icons">
            <DiGithubBadge />
            <h2>Github</h2>
        </Col>
        </Row>
    </Container>
  );
}

export default Techstack;
