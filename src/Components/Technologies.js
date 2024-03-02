import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTechnologies } from "../features/technologySlice";

const Technologies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTechnologies());
  }, []);

  const technologiesState = useSelector(
    (state) => state?.technology?.technologies
  );

  return (
    <section
      className="h-screen md:h-auto  md:w-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#263b9b] to-[#E0C3FC]"
      id="technologies"
    >
      <h3 className="px-2 py-5 w-[85%] mx-auto  md:w-[80%] md:mx-0 md:mt-16 text-3xl text-[#FEE715FF]">
        Technologies
      </h3>
      <div className="w-[85%] min-h-[80%] md:w-[80%] md:mb-10 p-2 shadow-lg shadow-black rounded">
        <p className="px-3 py-5 md:px-0 text-white text-xl font-bold md:leading-10">
          Here are Techlogies and Frameworks I have been working on
        </p>
        <div className="grid w-[85%] mx-auto py-5 grid-cols-2 justify-center items-center gap-10 mb-10">
          {technologiesState &&
            technologiesState?.map((technology) => (
              <div
                className="bg-[#333D79FF] text-[#FAEBEFFF] shadow-md shadow-black p-3 w-[80%] leading-9 transition duration-500 ease-in-out rounded-lg hover:bg-blue-200 hover:text-[#2b391e] cursor-pointer font-semibold"
                key={technology?._id}
              >
                {technology?.title}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
