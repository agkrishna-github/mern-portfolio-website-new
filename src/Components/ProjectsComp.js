const ProjectsComp = ({ project }) => {
  return (
    <div
      className="flex flex-col gap-5 p-5 w-[300px] min-h-[250px] md:min-h-[200px] bg-[#422057FF] rounded-lg"
      key={project?._id}
    >
      <p className=" p-5 h-[150px] bg-slate-200 text-lime-950 leading-8 rounded-lg font-semibold text-xl">
        {project?.title}
      </p>

      <div className="flex gap-5  justify-center items-center">
        <a
          className="project-cat rounded-lg p-3 text-center cursor-pointer hover:bg-white hover:text-black text-white no-underline hover:transition hover:duration-100 hover:ease-in"
          href={project?.demo}
          target="_blank"
        >
          Live Demo
        </a>
        <a
          className="project-cat rounded-lg p-3 text-center cursor-pointer hover:bg-white hover:text-black text-white no-underline"
          href={project?.gitLink}
          target="_blank"
        >
          Git Hub
        </a>
      </div>
    </div>
  );
};

export default ProjectsComp;
