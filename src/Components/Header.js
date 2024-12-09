import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeaderDetails } from "../features/headerSlice";

import { IoHomeOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { Tooltip, IconButton } from "@mui/material";
import { Link } from "react-scroll";
const TypeWriterPage = React.lazy(() => import("./TypeWriterPage.js"));
const HeroImagePage = React.lazy(() => import("./HeroImagePage.js"));
const ElementsPage = React.lazy(() => import("./ElementsPage.js"));

const Header = () => {
  const dispatch = useDispatch();
  const headerState = useSelector((state) => state?.header?.headerDetails);
  console.log(headerState);
  useEffect(() => {
    const getDetails = async () => {
      await dispatch(getHeaderDetails());
    };

    getDetails();
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
      <section className="bg-gradient-to-r from-[#263b9b] to-[#E0C3FC] h-screen md:relative">
        <div className="p-3 w-[90%] mx-auto">
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
          <>
            {headerState &&
              headerState?.map((item) => (
                <div
                  className="mt-10 md:mt-0 grid grid-cols-2 md:grid-cols-1 md:mb-16 md:gap-0 "
                  key={item?._id}
                >
                  <div
                    className=" flex flex-col gap-y-11 md:gap-2 justify-center h-[500px] md:h-auto  md:justify-start"
                    id="home"
                  >
                    <h3 className="md:p-3 md:text-xl text-white">
                      👋 Hello, I am
                    </h3>
                    <h3 className="animate-charcter md:p-3 md:text-2xl">
                      {item?.title}
                    </h3>

                    <TypeWriterPage />

                    <ElementsPage />
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
                        <Tooltip
                          title="Education"
                          placement="left"
                          className=""
                        >
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
                  </div>
                  <HeroImagePage item={item} />
                </div>
              ))}
          </>
        </div>
      </section>
    </>
  );
};

export default Header;
