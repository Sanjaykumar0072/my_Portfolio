import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from '../contact_form';
import { CgHeart } from "react-icons/cg";
import { ImHeart } from "react-icons/im";

export default function Contact() {
    return (
        <>
            <Container fluid className="contact" id="contact">
                <Row>
                    <Col md={6}>
                        <h4 className="role">contact</h4>
                        <h2>Let's <span>Work</span> Together!</h2>
                        <p>I'm passionate about pixel-perfect design! Elevate your brand online with our web development and design solutions. Contact us and let's create wonders.</p>
                        <a href="mailto:b.sanjaykumar2000@gamil.com">b.sanjaykumar2000@gamil.com <ImHeart /></a>
                        <div className="rings">
                            <div className="ring"></div>
                            <div className="ring"></div>
                            <div className="ring"></div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}