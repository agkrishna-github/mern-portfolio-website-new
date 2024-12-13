import React from "react";
import { Link } from "react-scroll";

const LinksPage = () => {
  return (
    <div className="flex gap-x-5  md:hidden mt-5">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="no-underline text-red-300  py-2 px-4 rounded-lg header-tabs-border hover:text-white"
      >
        Home
      </Link>
      <Link
        to="technologies"
        spy={true}
        smooth={true}
        duration={500}
        className="no-underline text-red-300  py-2 px-4 rounded-lg header-tabs-border hover:text-white"
      >
        Technologies
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className="no-underline text-red-300  py-2 px-4 rounded-lg header-tabs-border hover:text-white"
      >
        Projects
      </Link>
      <Link
        to="education"
        spy={true}
        smooth={true}
        duration={500}
        className="no-underline text-red-300  py-2 px-4 rounded-lg header-tabs-border hover:text-white"
      >
        Education
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        className="no-underline text-red-300  py-2 px-4 rounded-lg header-tabs-border hover:text-white"
      >
        Contact
      </Link>
    </div>
  );
};

export default LinksPage;
