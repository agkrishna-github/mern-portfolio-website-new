import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTechnologies } from "../features/technologySlice";
import Loader from "./Loader";

const Technologies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTechnologies());
  }, [dispatch]);

  const technologiesState = useSelector(
    (state) => state?.technology?.technologies
  );

  return (
    <>
      {technologiesState?.length === 0 ? (
        <Loader />
      ) : (
        <section
          className="h-screen md:h-auto  md:w-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#263b9b] to-[#E0C3FC]"
          id="technologies"
        >
          <h3 className="px-2 py-5 md:pt-0 w-[85%] mx-auto   md:mt-16 text-3xl text-[#FEE715FF]">
            Technologies
          </h3>
          <div className="w-[85%] min-h-[80%] md:w-[90%] md:mb-10 p-2 shadow-lg shadow-black rounded">
            <p className="px-3 py-5 md:p-2 text-white text-xl md:text-lg font-bold md:leading-10">
              Here are Techlogies and Frameworks I have been working on
            </p>
            <div className="grid w-[85%] md:w-full mx-auto py-5 md:px-2 grid-cols-2 md:grid-cols-1 justify-center items-center gap-10 md:gap-3 mb-10 md:mb-5">
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
      )}
    </>
  );
};

export default Technologies;
