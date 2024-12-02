import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import PropTypes from 'prop-types';

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = ({ scrollToSection, bannerRef, aboutMeRef, skillsRef, experienceRef, projectsRef, contactRef, findMeRef }) => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={sidebarRef}
        className="sidebar"
        animate={open ? "open" : "closed"}
      >
        <motion.div className="bg" variants={variants}>
          <Links
            scrollToSection={scrollToSection}
            bannerRef={bannerRef}
            aboutMeRef={aboutMeRef}
            skillsRef={skillsRef}
            experienceRef={experienceRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
            findMeRef={findMeRef}
          />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
};

Sidebar.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  bannerRef: PropTypes.object,
  aboutMeRef: PropTypes.object,
  skillsRef: PropTypes.object,
  experienceRef: PropTypes.object,
  projectsRef: PropTypes.object,
  contactRef: PropTypes.object,
  findMeRef: PropTypes.object,
};

export default Sidebar;
