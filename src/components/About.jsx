import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineMaximize } from "react-icons/md";
import { about } from "../data";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const { title, subtitle, subtitleSecond, buttonText } = about;
  return (
    <section id="About" className=" bg-blue-400 pt-[100px] ">
      <div className="container mx-auto">
        {/* {h1Text} */}
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-10 text-center">
          {title}
        </h1>
        {/* {Second Image} */}
        <div className="flex flex-row  justify-center ">
          <MdOutlineMaximize size={125} color="white" />
          <AiFillStar size={50} color="white" />
          <MdOutlineMaximize size={125} color="white" />
        </div>
        {/* {p Text} */}
        <div className="px-5 mb-5 flex flex-col max-w-[550px] lg:flex-row lg:max-w-[750px] lg:justify-center mx-auto lg:gap-x-7">
          <p className="text-lg  font-medium  text-white mb-5">{subtitle}</p>
          {/* {p Text 2} */}
          <p className="text-xl  font-medium  text-white ">{subtitleSecond}</p>
        </div>
        <div className="flex justify-center">
          <button className="mb-[100px] border-2 text-white text-lg font-medium border-b-white py-4 px-7 rounded-lg hover:bg-white hover:text-primary transition ">
            <a
              href="https://startbootstrap.com/theme/freelancer"
              className="flex items-center "
            >
              <FaDownload className="mr-2" />
              {buttonText}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
