import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/images/avatar.svg";
import myImgDark from '../../assets/images/avatarDark.svg';
import Tilt from "react-parallax-tilt";

function AboutMe() {
  const [imgSrc, setImgSrc] = useState(myImg);

  useEffect(() => {
    const handleBodyClassChange = () => {
      const body = document.body;
      if (body.classList.contains("dark-mode")) {
        setImgSrc(myImgDark);
      } else {
        setImgSrc(myImg);
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
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="sec2-column">
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={imgSrc} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I've embarked on an exciting <b>programming journey</b>, acquiring the necessary skills to create cutting-edge websites.
              <br />
              <br />My practical experience spans a wide range of technologies, including
              <i>
                <b> HTML, CSS, Sass, JavaScript, WordPress, MongoDB, Express.js, Node.js </b>, and and I've even delved into the fundamentals of <b>Vue.js and React.js</b>.
              </i>
              <br />
              <br />
              My enthusiasm lies in harnessing the power of <b>Node.js</b> and <b>modern JavaScript</b> libraries and frameworks like <b>React.js</b> and <b>Vue.js</b> to develop innovative and forward-thinking products. I pour my <b>passion into my work</b>, constantly striving to push the boundaries of what's possible in web development.
              <br />
              <br />
              I'm also eagerly keeping up with the latest <b>technologies</b> and <b>trends</b>, always on the lookout for new tools and techniques to enhance my skills and stay ahead of the curve.
              <br />
              <br />
              As part of my continuous <b>learning journey</b>, I've recently delved into <b>React</b> and <b>Redux</b> to further expand my skill set and keep myself at the forefront of the rapidly evolving tech landscape. With these tools in my arsenal, I'm ready to take on the <b>challenges</b> and <b>opportunities</b> and beyond have to offer.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default AboutMe;
