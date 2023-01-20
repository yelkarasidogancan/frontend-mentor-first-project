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
        <div className="flex flex-wrap gap-y-10 pb-[100px]">
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
                      setModalIsOpen(true);
                      setModalData(item);
                    }}
                    color="white"
                    className="w-[400px] md:w-[350px] lg:w-[300px] absolute  h-full overflow-hidden bg-fixed opacity-0 hover:opacity-90 transition duration-300 ease-in-out bg-blue-500 cursor-pointer"
                  ></FiPlus>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                  >
                    <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex flex-col items-center justify-center py-10 ">
                            <h3 className="text-3xl font-bold text-primary mb-5">
                              {modalData?.text}
                            </h3>
                            <div className="flex flex-row justify-center">
                              <MdOutlineMaximize
                                size={150}
                                color="rgb(44, 62, 80)"
                              />
                              <AiFillStar size={50} color="rgb(44, 62, 80)" />
                              <MdOutlineMaximize
                                size={150}
                                color="rgb(44, 62, 80)"
                              />
                            </div>
                            <img
                              className=""
                              width={450}
                              src={modalData?.image.type}
                              alt=""
                            />
                          </div>
                          {/*body*/}
                          <div className="relative px-6">
                            <p className="my-4 w-[450px] text-primary text-sm leading-relaxed text-center">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ea maxime hic in corrupti provident,
                              quisquam facilis incidunt perferendis officiis
                              minus labore accusantium, possimus cumque repellat
                              tenetur. Dolor hic fugit consectetur.
                            </p>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-center p-6  border-slate-200 rounded-b">
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setModalIsOpen(false)}
                            >
                              Close Window
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
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
