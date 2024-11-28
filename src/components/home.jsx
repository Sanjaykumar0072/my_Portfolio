import React, { useRef } from "react";
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
import Sidebar from "./sidebar/Sidebar";
import Theme from "./theme";

function Home() {
  const bannerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const findMeRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Sidebar
      scrollToSection={scrollToSection}
        bannerRef={bannerRef}
        aboutMeRef={aboutMeRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        findMeRef={findMeRef}
      />
      <Theme />
      <ScrollToTop />
      <section ref={bannerRef}>
        <Banner />
      </section>
      <section ref={aboutMeRef}>
        <AboutMe />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={experienceRef}>
        <Experience />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <section ref={findMeRef}>
        <FindMe />
      </section>
      <Footer />
    </>
  );
}

export default Home;
