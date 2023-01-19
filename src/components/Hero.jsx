import React from "react";
import firstImage from "../assets/avataaars.svg";
import { hero } from "../data";
import { AiOutlineLine } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineMaximize } from "react-icons/md";

const Hero = () => {
  const { title, subtitle } = hero;
  const [showModal, setShowModal] = React.useState(false);
  return (
    <section className="bg-blue-400 py-20 ">
      <div className="container mx-auto text-center">
        {/* {First Image} */}
        <img className="mx-auto mb-10 w-[250px]  " src={firstImage} alt="" />
        {/* {h1Text} */}
        <h1 className="text-5xl lg:text-8xl font-bold text-white mb-10">
          {title}
        </h1>
        {/* {Second Image} */}
        <div className="flex flex-row  justify-center ">
          <MdOutlineMaximize size={150} color="white" />
          <AiFillStar size={50} color="white" />
          <MdOutlineMaximize size={150} color="white" />
        </div>
        {/* {h2 Text} */}
        <h2 className="text-xl lg:text-3xl font-medium  text-white ">
          {subtitle}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
