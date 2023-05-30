import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import blocksera from '../assets/blocksera.jpg';

const ExperienceCard = () => {
    return (
        <Container className='experience-conatiner'>
            <Row className='justify-content-center'>
                <h1>Work <span>Experience</span></h1>
                <Col md={12} className='experience-content'>
                    <img src={blocksera} />
                    <h3>Blocksera Technologies</h3>
                    <h4>Software Associate</h4>
                    <p>July 2022 - April 2023</p>
                    <p>I Worked as a front-end and back-end developer to design web based applications for websites.</p>
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Sass</li>
                        <li>JavaScript</li>
                        <li>MongoDB</li>
                        <li>Nodejs</li>
                        <li>Expressjs</li>
                        <li>Wordpress</li>
                        <li>vuejs</li>
                        <li>GgraphQl</li>
                        <li>Github</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default ExperienceCard;