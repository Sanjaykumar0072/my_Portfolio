import React from "react";
import Banner from './section1';
import AboutMe from './section2';
import Skills from "./section3";
import Experience from "./section4";
import Projects from "./section5";
import Contact from "./section6";
import FindMe from "./section7";
import NavBar from "../header";
import Footer from "../footer";
import ScrollToTop from "../scroll-to-top";

function Home() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <section>
        <Banner />
        <AboutMe />
        <Skills />      
        <Experience />
        <Projects />
        <Contact />
        <FindMe />
      </section>
      <Footer />
    </>
  );
}

export default Home;
