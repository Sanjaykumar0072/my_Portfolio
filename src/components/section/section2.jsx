import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJqueryLogo,
  DiJqueryUiLogo,
  DiJavascript1,
  DiReact,
  DiWordpress,
  DiNodejs,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";

function Techstack() {
  return (
    <Container className="skills">
        <Row>
            <Col md={12} sm={6}>
                <h1>Professional <span>Skills</span></h1>
                <ul className="tech-skills justify-content-center">
                    <li className="tech-icons">
                        <DiHtml5 />
                        <h2>HTML</h2>
                    </li>
                    <li className="tech-icons">
                        <DiCss3 />
                        <h2>CSS</h2>
                    </li>
                    <li className="tech-icons">
                        <DiSass />
                        <h2>Sass</h2>
                    </li>
                    <li className="tech-icons">
                        <DiBootstrap />
                        <h2>Bootstrap</h2>
                    </li>
                    <li className="tech-icons">
                        <DiJavascript1 />
                        <h2>Javascript</h2>
                    </li>
                    <li className="tech-icons">
                        <DiJqueryUiLogo />
                        <h2>Jquery</h2>
                    </li>
                    <li className="tech-icons">
                        <DiWordpress />
                        <h2>Wordpress</h2>
                    </li>
                    <li className="tech-icons">
                        <DiMongodb />
                        <h2>Mongodb</h2>
                    </li>
                    <li className="tech-icons">
                        <DiNodejs />
                        <h2>Nodejs</h2>
                    </li>
                    <li className="tech-icons">
                        <DiJqueryLogo />
                        <h2>Expressjs</h2>
                    </li>
                    <li className="tech-icons">
                        <DiReact />
                        <h2>React</h2>
                    </li>
                    <li className="tech-icons">
                        <DiGithubBadge />
                        <h2>Github</h2>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
  );
}

export default Techstack;
