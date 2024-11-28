import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Type from "./type";
import bannerImg1 from '../../assets/images/logo3.png';
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-300%",
        y: "0",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30,
        },
    },
};

export default function Banner() {
    return (
        <>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <motion.div
                                className="textContainer"
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                            >
                                <motion.h4 variants={textVariants} className="role">Web Developer</motion.h4>
                                <motion.h1 variants={textVariants} className="heading">
                                    Hi There!{" "}
                                    <motion.span variants={textVariants} className="wave" role="img" aria-labelledby="wave">
                                        👋🏻
                                    </motion.span>
                                </motion.h1>

                                <motion.h1 variants={textVariants} className="heading-name">
                                    I'M
                                    <strong variants={textVariants} className="main-name color-font"> SANJAY KUMAR</strong>
                                </motion.h1>
                                <motion.div variants={textVariants} className="cta">
                                    <a href="mailto:b.sanjaykumar2000@gmail.com" className="btn">Contact Me</a>
                                    <a href="/resume" className="btn secondary-btn">View CV</a>
                                </motion.div>
                                <motion.div variants={textVariants} className="typewritter">
                                    <Type />
                                </motion.div>
                            </motion.div>
                        </Col>
                        <motion.div
                            className="slidingTextContainer"
                            variants={sliderVariants}
                            initial="initial"
                            animate="animate"
                        >
                            Web Developer creative thinker
                        </motion.div>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <Tilt>
                                <img src={bannerImg1} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }} />
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
                <div className="animation_main_div">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </Container>
        </>
    )
}