import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function FindMe() {
  const [socialIconStyle, setsocialIconStyle] = useState({
    animation: 'pulse 2s infinite ease-out'
  });

  useEffect(() => {
    const handleBodyClassChange = () => {
      const body = document.body;
      if (body.classList.contains("dark-mode")) {
        setsocialIconStyle({
          animation: 'pulseDark 2s infinite ease-out'
        });
      } else {
        setsocialIconStyle({
          animation: 'pulse 2s infinite ease-out'
        });
      }
    };

    handleBodyClassChange(); // Initial check

    const observer = new MutationObserver(handleBodyClassChange);
    observer.observe(document.body, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container fluid className="link-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="social-content">
            <h1>FIND <b>ME</b> ON</h1>
            <p>
              Feel free to <b>connect</b> with me
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/SanjayKumar0072"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icons"
                  style={socialIconStyle}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sanjaykumar0072/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icons"
                  style={socialIconStyle}
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
