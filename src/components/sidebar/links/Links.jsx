import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ scrollToSection, bannerRef, aboutMeRef, skillsRef, experienceRef, projectsRef, contactRef, findMeRef }) => {
  const items = [
    { label: "Home", ref: bannerRef },
    { label: "About", ref: aboutMeRef },
    { label: "Skills", ref: skillsRef },
    { label: "Experience", ref: experienceRef },
    { label: "Projects", ref: projectsRef },
    { label: "Contact", ref: contactRef },
    { label: "Resume", ref: findMeRef },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <motion.a
          href={ item.label === "Home" ? "/" : item.label === "Resume" ? item.label : `#${item.label}`}
          onClick={() => scrollToSection(item.ref)}
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.label}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
