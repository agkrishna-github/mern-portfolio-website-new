import React from "react";
import Header from "../Components/Header";
import Technologies from "../Components/Technologies";
import Projects from "../Components/Projects";
import Education from "../Components/Education";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Technologies />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
