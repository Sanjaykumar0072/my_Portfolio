import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "I'm developing my skills to improve my career as a MERN stack developer.",
          "Improving my skills in React",
          "Continuous Learning and Skill Development",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
