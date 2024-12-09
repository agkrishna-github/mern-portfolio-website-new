import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { RiBootstrapLine } from "react-icons/ri";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const ElementsPage = () => {
  return (
    <section className="flex gap-5 flex-wrap md:gap-6 md:text-pink-200 md:ms-3 text-2xl md:text-2xl text-[#78e687ea]  md:absolute md:bottom-14 md:left-0">
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
    </section>
  );
};

export default ElementsPage;
