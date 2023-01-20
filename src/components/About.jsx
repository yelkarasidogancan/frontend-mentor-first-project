import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineMaximize } from "react-icons/md";
import { about } from "../data";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const { title, subtitle, subtitleSecond, buttonText } = about;
  return (
    <section className="h-screen bg-blue-400 py-10 ">
      <div className="container mx-auto">
        {/* {h1Text} */}
        <h1 className="text-4xl lg:text-8xl font-bold text-white mb-10 text-center">
          {title}
        </h1>
        {/* {Second Image} */}
        <div className="flex flex-row  justify-center ">
          <MdOutlineMaximize size={125} color="white" />
          <AiFillStar size={50} color="white" />
          <MdOutlineMaximize size={125} color="white" />
        </div>
        {/* {p Text} */}
        <div className="px-5 mb-5">
          <p className="text-lg lg:text-3xl font-medium  text-white mb-5">
            {subtitle}
          </p>
          {/* {p Text 2} */}
          <p className="text-xl lg:text-3xl font-medium  text-white ">
            {subtitleSecond}
          </p>
        </div>
        <div className="flex justify-center">
          <button className=" border-2 text-white text-lg font-medium border-b-white py-4 px-7 rounded-lg hover:bg-white hover:text-primary transition ">
            <div className="flex items-center">
              <FaDownload className="mr-2" />
              {buttonText}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
