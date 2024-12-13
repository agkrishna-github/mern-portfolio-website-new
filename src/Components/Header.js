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
import MainHead from "./MainHead.js";
import LinksPage from "./LinksPage.js";
import MainLinkPage from "./MainLinkPage.js";
const TypeWriterPage = React.lazy(() => import("./TypeWriterPage.js"));
const HeroImagePage = React.lazy(() => import("./HeroImagePage.js"));
const ElementsPage = React.lazy(() => import("./ElementsPage.js"));

const Header = () => {
  const dispatch = useDispatch();
  const headerState = useSelector((state) => state?.header?.headerDetails);
  console.log(headerState);

  const [value, setValue] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      await dispatch(getHeaderDetails());
    };

    getDetails();
    window.addEventListener("scroll", changeValueOnScroll);
  }, []);

  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#263b9b] to-[#E0C3FC] h-screen md:relative">
        <div className="p-3 w-[90%] mx-auto">
          <MainLinkPage>
            <LinksPage />
          </MainLinkPage>
          <>
            {headerState &&
              headerState?.map((item) => (
                <div
                  className="mt-10 md:mt-0 grid grid-cols-2 md:grid-cols-1 md:mb-16 md:gap-0 "
                  key={item?._id}
                >
                  <div
                    className=" flex flex-col gap-y-11 md:gap-y-10 justify-center h-[500px] md:h-auto  md:justify-start"
                    id="home"
                  >
                    <h3 className="md:text-2xl text-white md:mt-6">
                      👋 Hello, I am
                    </h3>

                    <h3 className="animate-charcter md:text-2xl">
                      {item?.title}
                    </h3>
                    <MainHead>
                      <TypeWriterPage />
                      <ElementsPage />
                    </MainHead>
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
