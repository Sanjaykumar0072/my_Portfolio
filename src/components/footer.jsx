import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  const rectangles = [];

  for (let i = 0; i < 20; i++) {
    rectangles.push(<li key={i}></li>);
  }

  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col md="8" className="footer-copywright">
            <h3>© Copyright | Developed by <span>Sanjay Kumar</span></h3>
          </Col>
        </Row>
      </Container>
      <div className="area" >
                <ul className="rectangles">
                    {rectangles}
                </ul>
            </div >
    </>
  );
}

export default Footer;
