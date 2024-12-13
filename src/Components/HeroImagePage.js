import React from "react";

const HeroImagePage = ({ item }) => {
  return (
    <section className=" md:p-2 flex flex-col justify-normal gap-5 md:gap-2 relative md:mt-10">
      <div className="w-[400px] md:w-[300px] m-auto h-[400px] md:h-[300px]  shadow-[0px_5px_15px_rgba(0,0,0,0.35)] flex justify-center items-center rounded rotate-45  md:rotate-0">
        <div className="w-[80%] md:w-[230px] rounded-lg h-[80%] md:h-[230px] bg-gradient-to-r py-12 from-[#E0C3FC] to-[#091e79] rotateDiv"></div>
      </div>
      <div className="w-[400px]  md:w-[200px] h-[300px] md:h-auto md:pb-0 absolute  top-[20%] md:top-[20%] left-[170px] md:left-[70px]">
        <img
          src={item?.images[0]?.url}
          alt="portfolio Image"
          className="w-[80%] md:w-[100%] h-auto object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroImagePage;
