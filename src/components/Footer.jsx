import React from "react";
import { footer } from "../data";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  const {
    titleFirst,
    address,
    addressSecond,
    titleSecond,
    titleThird,
    licence,
    a,
  } = footer;
  return (
    <div className=" bg-bgcolor  ">
      <div className="flex flex-col lg:flex-row   justify-center mx-auto py-10">
        <div className="flex flex-col text-center p-5 lg:w-[350px] xl:w-[400px] md:w-[800px]">
          <h1 className="text-white text-2xl font-bold p-4 ">{titleFirst}</h1>
          <p className="text-white text-lg">{address}</p>
          <p className="text-white text-lg">{addressSecond}</p>
        </div>
        <div className="flex flex-col text-center p-5 lg:w-[350px] xl:w-[400px] md:w-[800px]">
          <h1 className="text-white text-2xl font-bold p-4">{titleSecond}</h1>
          <div className="flex items-center justify-center gap-x-2">
            {/* {icons} */}
            <div className="flex items-center justify-center text-white text-xl hover:text-primary hover:bg-white transition border-2 rounded-full border-b-white w-[50px] h-[50px] ">
              <FaFacebookF />
            </div>
            <div className="flex items-center justify-center text-white text-xl hover:text-primary hover:bg-white transition border-2 rounded-full border-b-white w-[50px] h-[50px] ">
              <FaTwitter />
            </div>
            <div className="flex items-center justify-center text-white text-xl hover:text-primary hover:bg-white transition border-2 rounded-full border-b-white w-[50px] h-[50px] ">
              <FaLinkedinIn />
            </div>
            <div className="flex items-center justify-center text-white text-xl hover:text-primary hover:bg-white transition border-2 rounded-full border-b-white w-[50px] h-[50px] ">
              <FaDribbble />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center p-5 lg:w-[350px] xl:w-[400px] md:w-[800px]">
          <h1 className="text-white text-2xl font-bold p-4">{titleThird}</h1>
          <p className="text-white text-lg px-5">
            {licence}{" "}
            <a
              href="https://startbootstrap.com"
              className="text-blue-400 underline"
            >
              {a}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
