import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/images/avatar.svg";
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
              LET ME <span> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I've embarked on a programming journey and acquired the necessary skills to develop websites.
              <br />
              <br />I've gained practical experience in a range of technologies, including
              <i>
                <b> Html, Css, Sass, JavaScript, WordPress, MongoDb, Expressjs, Nodejs </b> and I've delved into the fundamentals of <b>Vuejs</b>.
              </i>
              <br />
              <br />
              I'm enthusiastic about harnessing Node.js and modern JavaScript libraries and frameworks like React.js and Vue.js to develop cutting-edge products. I channel this passion into my work whenever possible and building new
              <i>
                <b> Web Technologies and Products </b> and
                also eager to learn new{" "}
                <b>
                  Technologies.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b>Node.js</b> and
              <i>
                <b>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b> React.js and Vue.js.</b>
              </i>
              <br />
              <br />
              I learn <b> React and Redux</b> for gaining more skills to improve myself.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default AboutMe;
