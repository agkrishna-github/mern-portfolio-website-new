import React from "react";
import Typewriter from "typewriter-effect";

new Typewriter("#typewriter", {
  strings: ["Hello", "World"],
  autoStart: true,
});

const TypeWriterPage = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["React Developer", "Mern Stack Developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
};

export default TypeWriterPage;
