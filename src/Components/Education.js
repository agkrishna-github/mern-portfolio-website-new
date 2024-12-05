import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";

const Education = () => {
  return (
    <section
      className="flex flex-col gap-y-2 md:gap-0 justify-center items-center bg-gradient-to-r from-[#263b9b] to-[#E0C3FC]"
      id="education"
    >
      {/* <section
      className="w-screen flex flex-col gap-y-2 md:gap-0 justify-center items-center md:w-screen bg-gradient-to-r from-[#263b9b] to-[#E0C3FC]"
      id="education"
    > */}
      <h2 className="w-[85%] text-[#FEE715FF] mt-10 pt-12 md:p-2 text-3xl">
        Education
      </h2>
      <div className="w-[85%] mb-[80px] md:mb-7 text-white p-5">
        <VerticalTimeline lineColor="#fff">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{
              borderRight: "7px solid  white",
            }}
            date="2021"
            // dateClassName="color: #fff"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title mb-10">M B A </h3>
            <h4 className="vertical-timeline-element-subtitle">Finance</h4>
            <p>K G R Institute of Technology and Management</p>
            <p>Hyderabad</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{
              borderRight: "7px solid  white",
            }}
            date="2012"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">B Com</h3>
            <p>A B V Govt Degree College, Jangaon</p>
            <p>Jangaon</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
