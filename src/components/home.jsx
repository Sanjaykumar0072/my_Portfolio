import React from "react";
import Banner from './section/section1';
import AboutMe from './section/section2';
import Skills from "./section/section3";
import Experience from "./section/section4";
import Projects from "./section/section5";
import Contact from "./section/section6";
import FindMe from "./section/section7";
import NavBar from "./header";
import Footer from "./footer";
import ScrollToTop from "./scroll-to-top";

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
