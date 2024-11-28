import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

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

  return (
    <>
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
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

export default Sidebar;
