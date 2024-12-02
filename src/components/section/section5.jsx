// import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { CgLoupe } from "react-icons/cg";
import { CgLink } from "react-icons/cg";
import Slider from "react-slick";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import portfoliothumbnail from '/src/assets/images/portfolio-screenshot.png';
import darshiinithumbnail from '/src/assets/images/darshiini-screenshot.png';
import divtagthumbnail from '/src/assets/images/divtag-screenshot.png';
import naturalfitnezzthumbnail from '/src/assets/images/naturalfitnezz-screenshot.png';

const items = [
  {
    id: 1,
    title: "Portfolio",
    img: portfoliothumbnail,
    link: "/"
  },
  {
    id: 2,
    title: "Bharathanatyam Website",
    img: darshiinithumbnail,
    link: "http://darshiinivs.com/"
  },
  {
    id: 3,
    title: "Divtag",
    img: divtagthumbnail,
    link: "https://divtag.io/"
  },
  {
    id: 4,
    title: "Natural Fitnezz",
    img: naturalfitnezzthumbnail,
    link: "https://naturalfitnezz.com"
  }
];

export default function Projects() {

  var settings = {
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '50px',
    className: 'project-sliders',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  return (
    <Container fluid className="projects-section" id="projects">
      <Container>
        <Row>
          <h1><span>Featured </span>Works</h1>
          <Col md={12} className="projects-gallery">
            <Slider {...settings}>
              {items.map((item, index) => (
                <div key={index}>
                  <div className="prt-card" key={index}>
                    <div className="prt-image">
                      <img src={item.img} alt="portfoliothumbnail" />
                      <div className="prt-overlay">
                        <a rel="noreferrer" target="_blank" href={item.link} className="prt-icon">
                          <CgLink />
                        </a>
                      </div>
                    </div>
                    <div className="prt-desc">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
          <div className="cta">
            <a href="mailto:b.sanjaykumar2000@gmail.com" className="btn">Hire Me</a>
            <a href="/resume" className="btn secondary-btn">View CV</a>
          </div>
        </Row>
      </Container>
    </Container>
  );
}