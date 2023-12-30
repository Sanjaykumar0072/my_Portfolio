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
        <>
            <Container className="skills" id="skills">
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em"><path d="M 3 6 L 16 28 L 29 6 L 19 6 L 16 11.300781 L 13 6 L 3 6 z M 6.5 8 L 10.271484 8 L 16 18 L 21.728516 8 L 25.5 8 L 16 24.099609 L 6.5 8 z" /></svg>
                                <h2>Vue</h2>
                            </li>
                            <li className="tech-icons">
                                <DiGithubBadge />
                                <h2>Github</h2>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className='box'>
                    <div className='wave -one'></div>
                    <div className='wave -two'></div>
                    <div className='wave -three'></div>
                </div>
            </Container>
        </>
    );
}

export default Techstack;
