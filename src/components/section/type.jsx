import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Freelancer",
          "MERN Stack Developer",
          "Pixel perfection is not just a goal, it's my standard",
          "Endless skill development",
          "Offering freelance website development services",
          "I'm actively improving my skills in various areas like frameworks, cloud technologies and more.."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
