import React from "react";
const Header = React.lazy(() => import("../Components/Header.js"));
const Technologies = React.lazy(() => import("../Components/Technologies.js"));
const Projects = React.lazy(() => import("../Components/Projects.js"));
const Education = React.lazy(() => import("../Components/Education.js"));
const Contact = React.lazy(() => import("../Components/Contact.js"));

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
