import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function AboutMe() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I started learning programming and I have learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I had worked in technologies
              <i>
                <b className="purple"> Html, Css, Sass, JavaScript, WordPress, MongoDb, Expressjs, Nodejs </b> and had worked in <b className="purple">Vuejs</b> basics.
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also eager to learn new{" "}
                <b className="purple">
                  Technologies.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Vue.js.</b>
              </i>
              <br />
              <br />
              I started learning <b className="purple"> React.js</b> for gaining more skills to improve myself.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default AboutMe;
