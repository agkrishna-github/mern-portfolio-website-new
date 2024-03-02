import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import PortImage from "../images/portfolioimg.png";
import { useDispatch, useSelector } from "react-redux";
import { getHeaderDetails } from "../features/headerSlice";
import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { RiBootstrapLine } from "react-icons/ri";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-scroll";

new Typewriter("#typewriter", {
  strings: ["Hello", "World"],
  autoStart: true,
});

const Header = () => {
  const dispatch = useDispatch();
  const headerState = useSelector((state) => state?.header?.headerDetails);
  useEffect(() => {
    dispatch(getHeaderDetails());
  }, []);

  const [value, setValue] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <section className="bg-gradient-to-r from-[#263b9b] to-[#E0C3FC] md:w-screen py-12 w-screen md:h-full h-screen">
      <div className="px-2 py-3 flex gap-x-5 w-[85%] mx-auto md:hidden">
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
      {headerState &&
        headerState?.map((item) => (
          <div
            className="w-11/12 mx-auto md:mx-0 md:w-[85%]  h-full grid grid-cols-2 md:grid-cols-1 gap-5 md:gap-0 justify-center items-center"
            key={item?._id}
          >
            <section
              className="w-full h-full p-2 md:ms-12 flex flex-col gap-5 md:gap-2 justify-center"
              id="home"
            >
              <h4 className="p-5 text-3xl text-[#FEE715FF]">👋 Hello, I am</h4>
              <h3 className="animate-charcter md:p-2 md:text-5xl p-5">
                {item?.title}
              </h3>
              <h3 className="text-5xl p-5 md:text-4xl text-[whitesmoke] md:h-[200px] md:leading-relaxed md:mb-14">
                <Typewriter
                  options={{
                    strings: ["React Developer", "Mern Stack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <div className="flex gap-5 text-2xl text-[#78e687ea] p-5 md:hidden">
                <span>
                  <ImHtmlFive2 />
                </span>
                <span>
                  <DiCss3 />
                </span>
                <span>
                  <TbBrandTailwind />
                </span>
                <span>
                  <RiBootstrapLine />
                </span>
                <span>
                  <IoLogoJavascript />
                </span>
                <span>
                  <FaReact />
                </span>
                <span>
                  <SiNodedotjs />
                </span>
                <span>
                  <SiExpress />
                </span>
                <span>
                  <SiMongodb />
                </span>
              </div>
              <div
                className={
                  value
                    ? "flex flex-col md:flex-row justify-center items-center gap-5 p-3 fixed md:fixed right-5  md:w-[350px] md:left-44 bottom-5 md:bottom-2 bg-[rgba(131,133,227,0.4)] text-xl rounded-xl z-10 "
                    : "hidden"
                }
              >
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:bg-blue-900  p-3 flex justify-center items-center rounded-full hover:transition hover:duration-500 hover:ease-out"
                >
                  <Tooltip title="Home" placement="left">
                    <IoHomeOutline className="text-white" />
                  </Tooltip>
                </Link>
                <Link
                  activeClass="active"
                  to="technologies"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:bg-blue-900  p-3 flex justify-center items-center rounded-full hover:transition hover:duration-500 hover:ease-out"
                >
                  <Tooltip title="Technologies" placement="left">
                    <GrTechnology className="text-white" />
                  </Tooltip>
                </Link>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:bg-blue-900  p-3 flex justify-center items-center rounded-full hover:transition hover:duration-500 hover:ease-out"
                >
                  <Tooltip title="Projects" placement="left">
                    <GrProjects className="text-white" />
                  </Tooltip>
                </Link>

                <Link
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:bg-blue-900  p-3 flex justify-center items-center rounded-full hover:transition hover:duration-500 hover:ease-out"
                >
                  <Tooltip title="Education" placement="left" className="">
                    <MdCastForEducation className="text-white" />
                  </Tooltip>
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:bg-blue-900  p-3 flex justify-center items-center rounded-full hover:transition hover:duration-500 hover:ease-out"
                >
                  <Tooltip title="Contact" placement="left" className="">
                    <TiContacts className="text-white" />
                  </Tooltip>
                </Link>
              </div>
            </section>
            <section className="p-5  w-full h-full flex flex-col justify-normal gap-5 relative -translate-y-16">
              <div className="w-[480px] p-5 m-auto h-[81%] md:h-[300px] md:-translate-y-8 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] flex justify-center items-center rounded rotate-45  md:rotate-0">
                <div className="w-[80%] md:w-[250px] h-[80%] md:h-[250px] bg-gradient-to-r py-12 from-[#E0C3FC] to-[#091e79] rotateDiv"></div>
              </div>
              <div className="w-[400px] h-[300px] md:h-[280px] md:pb-0 absolute md:-translate-y-20 top-[20%] left-[150px] md:left-[100px]">
                <img
                  src={item?.images[0]?.url}
                  alt="portfolio Image"
                  className="w-full h-full"
                />
              </div>
            </section>
          </div>
        ))}
    </section>

    // <section className="bg-gradient-to-r py-12 from-[#8EC5FC] to-[#E0C3FC] w-screen h-screen">
    /*  <section className="bg-gradient-to-r from-[#263b9b] to-[#E0C3FC] py-12 w-screen md:h-full h-screen">
      <div className="px-2 py-3 flex gap-x-5 w-[85%] mx-auto md:hidden">
        <a
          href="#"
          className="no-underline text-red-300  py-2 px-4 rounded-lg header-tabs-border hover:text-white"
        >
          Home
        </a>
        <a
          href="#technologies"
          className="no-underline text-red-300  py-2 px-4 rounded-lg header-tabs-border hover:text-white"
        >
          Technologies
        </a>
        <a
          href="#projects"
          className="no-underline text-red-300  py-2 px-4 rounded-lg header-tabs-border hover:text-white"
        >
          Projects
        </a>
        <a
          href="#education"
          className="no-underline text-red-300  py-2 px-4 rounded-lg header-tabs-border hover:text-white"
        >
          Education
        </a>
        <a
          href="#contact"
          className="no-underline text-red-300  py-2 px-4 rounded-lg header-tabs-border hover:text-white"
        >
          Contact
        </a>
      </div>
      {headerState &&
        headerState?.map((item) => (
          <div
            className="w-11/12 mx-auto h-full grid grid-cols-2 md:grid-cols-1 gap-5 justify-center items-center"
            key={item?._id}
          >
            <section className="w-full h-full p-2 flex flex-col gap-5 md:gap-2 justify-center ">
              <h4 className="p-5 text-3xl text-[#FEE715FF]">👋 Hello, I am</h4>
              <h3 className="animate-charcter p-5">{item?.title}</h3>
              <h3 className="text-5xl p-5 text-[whitesmoke] md:h-[200px] md:leading-relaxed md:mb-14">
                <Typewriter
                  options={{
                    strings: ["React Developer", "Mern Stack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <div className="flex gap-5 text-2xl text-[#78e687ea] p-5 md:hidden">
                <span>
                  <ImHtmlFive2 />
                </span>
                <span>
                  <DiCss3 />
                </span>
                <span>
                  <TbBrandTailwind />
                </span>
                <span>
                  <RiBootstrapLine />
                </span>
                <span>
                  <IoLogoJavascript />
                </span>
                <span>
                  <FaReact />
                </span>
                <span>
                  <SiNodedotjs />
                </span>
                <span>
                  <SiExpress />
                </span>
                <span>
                  <SiMongodb />
                </span>
              </div>
              <div
                className={
                  value
                    ? "flex flex-col md:flex-row justify-center items-center gap-5 p-3 fixed  right-5 md:right-40 bottom-5 bg-[rgba(131,133,227,0.4)] text-xl rounded-xl z-10  "
                    : "hidden"
                }
              >
                <Tooltip
                  title="Home"
                  placement="left"
                  onClick={() => setActiveNav("#")}
                  className={
                    activeNav === "#"
                      ? "bg-blue-900 p-3 flex justify-center items-center rounded-full"
                      : "hover:bg-blue-900 p-3 flex justify-center items-center hover:rounded-full hover:transition hover:duration-500 hover:ease-out"
                  }
                >
                  <a href="#" className="text-white font-bold">
                    <IoHomeOutline />
                  </a>
                </Tooltip>

                <Tooltip
                  title="Technologies"
                  placement="left"
                  onClick={() => setActiveNav("#technologies")}
                  className={
                    activeNav === "#technologies"
                      ? "bg-blue-900 p-3 flex justify-center items-center rounded-full"
                      : "hover:bg-blue-900 p-3 flex justify-center items-center hover:rounded-full hover:transition hover:duration-500 hover:ease-out"
                  }
                >
                  <a href="#technologies" className="text-white font-bold">
                    <GrTechnology />
                  </a>
                </Tooltip>
                <Tooltip
                  title="Projects"
                  placement="left"
                  onClick={() => setActiveNav("#projects")}
                  className={
                    activeNav === "#projects"
                      ? "bg-blue-900 p-3 flex justify-center items-center rounded-full"
                      : "hover:bg-blue-900 p-3 flex justify-center items-center hover:rounded-full hover:transition hover:duration-500 hover:ease-out"
                  }
                >
                  <a href="#projects" className="text-white font-bold p-2 ">
                    <GrProjects />
                  </a>
                </Tooltip>
                <Tooltip
                  title="Education"
                  placement="left"
                  onClick={() => setActiveNav("#education")}
                  className={
                    activeNav === "#education"
                      ? "bg-blue-900 p-3 flex justify-center items-center rounded-full"
                      : "hover:bg-blue-900 p-3 flex justify-center items-center hover:rounded-full hover:transition hover:duration-500 hover:ease-out"
                  }
                >
                  <a href="#education" className="text-white font-bold">
                    <MdCastForEducation />
                  </a>
                </Tooltip>
                <Tooltip
                  title="Contact"
                  placement="left"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "bg-blue-900 p-3 flex justify-center items-center rounded-full"
                      : "hover:bg-blue-900 p-3 flex justify-center items-center hover:rounded-full hover:transition hover:duration-500 hover:ease-out"
                  }
                >
                  <a href="#contact" className="text-white font-bold">
                    <TiContacts />
                  </a>
                </Tooltip>
              </div>
            </section>
            <section className="p-5  w-full h-full flex flex-col justify-normal gap-5 relative -translate-y-16">
              <div className="w-[480px] p-5 m-auto h-[81%] md:h-[300px] md:-translate-y-8 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] flex justify-center items-center rounded rotate-45  md:rotate-0">
                <div className="w-[80%] h-[80%] bg-gradient-to-r py-12 from-[#E0C3FC] to-[#091e79] rotateDiv md:hidden"></div>
              </div>
              <div className="w-[400px] h-[300px] md:h-[280px] md:pb-0 absolute md:-translate-y-20 top-[20%] left-[150px] ">
                <img
                  src={item?.images[0]?.url}
                  alt="portfolio Image"
                  className="w-full h-full"
                />
              </div>
            </section>
          </div>
        ))}
    </section> */
  );
};

export default Header;