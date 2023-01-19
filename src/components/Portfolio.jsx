import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineMaximize } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import Modal from "react-modal";

import { portfolio, items } from "../data";

import Cabin from "../assets/portfolio/cabin.png";
const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { title, items } = portfolio;
  return (
    <section>
      <div className="pt-20 mx-auto container">
        <div className="  text-center ">
          {/* {title} */}
          <h1 className="text-6xl lg:text-8xl font-bold text-primary mb-10">
            {title}
          </h1>
          {/* {Star Icon} */}
          <div className="flex flex-row  justify-center ">
            <MdOutlineMaximize size={150} color="rgb(44, 62, 80)" />
            <AiFillStar size={50} color="rgb(44, 62, 80)" />
            <MdOutlineMaximize size={150} color="rgb(44, 62, 80)" />
          </div>
        </div>
        {/* {Product} */}
        <div className="flex flex-wrap gap-y-10">
          {" "}
          {items.map((item, index) => {
            const { image, text } = item;
            return (
              <div className="flex flex-col md:w-6/12 lg:w-4/12 w-full justify-center items-center ">
                <div
                  key={index}
                  className="relative overflow-hidden bg-no-repeat bg-cover flex rounded-xl w-[400px] md:w-[350px] lg:w-[300px] "
                >
                  <img src={image.type} alt="" />
                  <FiPlus
                    onClick={() => {
                      setModalIsOpen(true), setModalData(item);
                    }}
                    color="white"
                    className="w-[400px] md:w-[350px] lg:w-[300px] absolute  h-full overflow-hidden bg-fixed opacity-0 hover:opacity-90 transition duration-300 ease-in-out bg-blue-500 cursor-pointer"
                  ></FiPlus>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                  >
                    <h1>{modalData.text}</h1>
                    <div>
                      <button onClick={() => setModalIsOpen(false)}>X</button>
                    </div>
                  </Modal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
