import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="8" className="footer-copywright">
          <h3>Developed by Sanjay Kumar</h3>
        </Col>
        <Col>
          <ul>
            <li>
              <a
                href="https://github.com/SanjayKumar0072"
                target="_blank"
                rel="noreferrer"
                className="social-icons"
              >
                <AiFillGithub />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/sanjay-kumar-397539211/"
                target="_blank"
                rel="noreferrer"
                className="social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
