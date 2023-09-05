import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function FindMe() {
  return (
    <Container fluid className="link-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="social-content">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
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
    </Container>
  );
}
export default FindMe;