import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import blocksera from '/src/assets/images/blocksera.png';

const ExperienceCard = () => {
    return (
        <Container className='experience-conatiner' id="expreience">
            <Row className='justify-content-center'>
                <h1><span>Work </span>Experience</h1>
                <Col  lg={4} md={12}>
                    <Row className='justify-content-center'>
                        <Col md={12} className='experience-content'>
                            <img src={blocksera} />
                            <h3>Blocksera Technologies</h3>
                            <h4>Software Associate</h4>
                            <p>April 2022 - April 2023</p>
                            <p>I Worked as a front-end and back-end developer to design web based applications for websites.</p>
                            <ul>
                                <li>Html</li>
                                <li>Css</li>
                                <li>Sass</li>
                                <li>JavaScript</li>
                                <li>JQuery</li>
                                <li>MongoDB</li>
                                <li>Nodejs</li>
                                <li>Expressjs</li>
                                <li>Wordpress</li>
                                <li>Reactjs</li>
                                <li>Vuejs</li>
                                <li>GgraphQl</li>
                                <li>Github</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col lg={8} md={12}>
                    <Row className='justify-content-center'>
                        <div className="milestones">
                            <div className="ml">
                                <h2 className="number"><span data-target="01">1</span>+</h2>
                                <h5>Years</h5>
                            </div>
                            <div className="ml">
                                <h2 className="number"><span data-target="02">3</span>+</h2>
                                <h5>Projects</h5>
                            </div>
                            <div className="ml">
                                <h2 className="number"><span data-target="00">1</span>+</h2>
                                <h5>Clients</h5>
                            </div>
                        </div>
                    </Row>
                    <Row className='justify-content-center'>
                        <div className="cta">
                            <a href="mailto:b.sanjaykumar2000@gmail.com" className="btn">Hire Me</a>
                            <a href="/resume" className="btn secondary-btn">View CV</a>
                        </div>
                    </Row>
                    <Row>
                        <div className="work-cycle">
                            <div className='work-card'>
                                <h3>Design</h3>
                                <p>Create mockups or prototypes based on the wireframes. Design the UI and UX elements.</p>
                            </div>
                            <div className='work-card'>
                                <h3>Development</h3>
                                <p>Convert the approved designs into a functional website. Integrate backend functionalities, databases, and necessary frameworks.</p>
                            </div>
                            <div className='work-card'>
                                <h3>Testing</h3>
                                <p>Perform rigorous testing for functionality, compatibility, and responsiveness across different devices and browsers.</p>
                            </div>
                            <div className='work-card'>
                                <h3>Deployment</h3>
                                <p>Launch the website on the live server. Ensure proper setup and configuration for optimal performance.</p>
                            </div>
                            <div className='work-card'>
                                <h3>Maintenance and Updates</h3>
                                <p>Provide ongoing support, maintenance, and updates as needed.</p>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container >
    );
};

export default ExperienceCard;