import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../features/projectSlice";
import Category from "./Category";
import ProjectsComp from "./ProjectsComp";

const Projects = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("Mern");

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  const projectState = useSelector((state) => state?.project?.projects);

  const categoryState = projectState?.filter(
    (project) =>
      project?.category.toLocaleLowerCase() === category.toLocaleLowerCase()
  );

  const allCategories = [
    ...new Set(projectState?.map((project) => project?.category)),
  ];
  return (
    <section
      className="bg-gradient-to-r pt-12 md:pt-5 from-[#263b9b] to-[#E0C3FC] text-white flex flex-col justify-center items-center"
      id="projects"
    >
      {/* <section
      className="bg-gradient-to-r pt-12 md:pt-5 from-[#263b9b] to-[#E0C3FC] text-white md:w-screen flex flex-col justify-center items-center"
      id="projects"
    > */}
      <h2 className="p-5 w-[85%] text-3xl md:p-2 text-[#FEE715FF] md:mb-3">
        Projects
      </h2>

      <div className=" w-[85%] min-h-[600px]  grid grid-cols-[20%_80%] gap-2 md:grid-cols-1">
        <div className="p-5 md:px-0 md:mb-5 md:py-3 flex flex-col min-h-full items-center gap-10 md:gap-5 pt-12 project-border md:border-none">
          {allCategories &&
            allCategories?.map((cat, i) => (
              <Category
                cat={cat}
                category={category}
                setCategory={setCategory}
                key={i}
              />
            ))}
        </div>
        <div className="flex gap-5 flex-wrap md:justify-center md:items-center items-start p-5 md:p-0  md:mb-10 project-border md:border-none">
          {categoryState &&
            categoryState?.map((project) => (
              <ProjectsComp project={project} key={project?._id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
