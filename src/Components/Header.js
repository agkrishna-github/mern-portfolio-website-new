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
import { Tooltip, IconButton } from "@mui/material";
import { Link } from "react-scroll";
import Loader from "./Loader";

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
    <>
      {headerState?.length === 0 ? (
        <Loader />
      ) : (
        <section className="bg-gradient-to-r from-[#263b9b] to-[#E0C3FC] md:pb-5 py-12 md:h-full h-screen ">
          {/* <section className="bg-gradient-to-r from-[#263b9b] to-[#E0C3FC] md:w-screen md:pb-5 py-12 w-screen md:h-full h-screen"> */}
          <div className="px-2 py-3  flex gap-x-5 w-[85%] mx-auto md:hidden">
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
                className="w-11/12 mx-auto md:w-full h-full grid grid-cols-2 md:grid-cols-1 gap-5 md:mb-16 md:gap-0 justify-center items-center md:relative"
                key={item?._id}
              >
                <section
                  className="w-full h-full p-2 md:px-3 flex flex-col gap-5 md:gap-2 justify-center "
                  id="home"
                >
                  <h4 className="p-5 md:p-3 text-3xl md:text-xl text-white">
                    👋 Hello, I am
                  </h4>
                  <h3 className="animate-charcter md:p-3 md:text-2xl p-5">
                    {item?.title}
                  </h3>
                  <h3 className="text-5xl p-5 md:p-3 md:text-xl text-[#47ffe0] md:h-[130px] md:w-[150px]md:whitespace-nowrap md:mb-14  ">
                    <Typewriter
                      options={{
                        strings: ["React Developer", "Mern Stack Developer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h3>
                  <div className="flex gap-5 flex-wrap md:gap-6 md:text-pink-200 md:ms-3 text-2xl md:text-2xl text-[#78e687ea] p-5  md:absolute md:-bottom-16 md:left-0">
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
                        ? "flex flex-col md:flex-row justify-center items-center gap-3  p-3  fixed  right-5   bottom-5 md:left-4 bg-[rgba(131,133,227,0.4)] text-xl rounded-xl z-10 md:w-[90%] md:mx-auto"
                        : "hidden"
                    }
                  >
                    <div>
                      <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:bg-blue-900  p-1 flex justify-center items-center rounded-full hover:transition hover:duration-500 hover:ease-out"
                      >
                        <Tooltip title="Home" placement="left">
                          <IconButton>
                            <IoHomeOutline className="text-white" />
                          </IconButton>
                        </Tooltip>
                      </Link>
                    </div>
                    <Link
                      activeClass="active"
                      to="technologies"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="hover:bg-blue-900  p-1 flex justify-center items-center rounded-full hover:transition hover:duration-500 hover:ease-out"
                    >
                      <Tooltip title="Technologies" placement="left">
                        <IconButton>
                          <GrTechnology className="text-white" />
                        </IconButton>
                      </Tooltip>
                    </Link>
                    <Link
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="hover:bg-blue-900  p-1 flex justify-center items-center rounded-full hover:transition hover:duration-500 hover:ease-out"
                    >
                      <Tooltip title="Projects" placement="left">
                        <IconButton>
                          <GrProjects className="text-white" />
                        </IconButton>
                      </Tooltip>
                    </Link>

                    <Link
                      activeClass="active"
                      to="education"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="hover:bg-blue-900  p-1 flex justify-center items-center rounded-full hover:transition hover:duration-500 hover:ease-out"
                    >
                      <Tooltip title="Education" placement="left" className="">
                        <IconButton>
                          <MdCastForEducation className="text-white" />
                        </IconButton>
                      </Tooltip>
                    </Link>
                    <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="hover:bg-blue-900  p-1 flex justify-center items-center rounded-full hover:transition hover:duration-500 hover:ease-out"
                    >
                      <Tooltip title="Contact" placement="left" className="">
                        <IconButton>
                          <TiContacts className="text-white" />
                        </IconButton>
                      </Tooltip>
                    </Link>
                  </div>
                </section>
                <section className="md:w-full p-5 md:p-2 w-full h-full flex flex-col justify-normal gap-5 md:gap-2 relative -translate-y-16 ">
                  <div className="w-[480px] md:w-[300px] p-5 m-auto h-[81%] md:h-[300px] md:-translate-y-8 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] flex justify-center items-center rounded rotate-45  md:rotate-0">
                    <div className="w-[80%] md:w-[230px] rounded-lg h-[80%] md:h-[230px] bg-gradient-to-r py-12 from-[#E0C3FC] to-[#091e79] rotateDiv"></div>
                  </div>
                  <div className="w-[400px] md:w-[200px] h-[300px] md:h-[200px] md:pb-0 absolute md:-translate-y-16 top-[20%] left-[150px] md:left-[90px]">
                    <img
                      src={item?.images[0]?.url}
                      alt="portfolio Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </section>
              </div>
            ))}
        </section>
      )}
    </>
  );
};

export default Header;
