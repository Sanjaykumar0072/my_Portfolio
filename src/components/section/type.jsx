import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Freelancer",
          "I'm developing my skills to advance my career as a MERN stack developer",
          "Endless skill development",
          "I'm actively improving my skills in various areas, including frameworks, cloud technologies, and more",
          "Eternal self-development",
          "Developing skills in different technologies",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
