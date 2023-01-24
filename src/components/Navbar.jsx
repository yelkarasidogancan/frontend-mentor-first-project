import React, { useEffect, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { Transition } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-scroll";
import { navigationData } from "../data";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? "bg-bgcolor py-4 lg:py-6 z-10" : "bg-bgcolor"
      } fixed sm:px[15px] lg:px-[50px] w-full py-5 z-0 transition-all duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* {logo} */}
          <h1 className="font-bold text-xl lg:text-3xl text-white">
            START BOOTSTRAP
          </h1>
          {/* {menu icon} */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white lg:hidden lg:text-3xl cursor-pointer"
          >
            {!isOpen ? (
              <button className=" flex items-center text-sm bg-bgprimary py-[10px] px-[15px] rounded-lg">
                <p>Menu</p>
                <BiMenu />
              </button>
            ) : (
              <button className=" flex items-center text-sm bg-bgprimary py-[10px] px-[15px] rounded-lg focus:border-2 border-b-white">
                <p>Menu</p>
                <BiMenu />
              </button>
            )}
          </button>
          {/* {nav} */}
          <nav className="hidden lg:flex">
            <ul className="pr-5 md:flex md:gap-x-10">
              {navigationData.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      activeClass="active"
                      to={item.name}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="font-bold text-md text-white uppercase hover:text-bgprimary transition-all cursor-pointer "
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* {nav mobile} */}
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              {navigationData.map((item, index) => {
                return (
                  <div
                    ref={ref}
                    className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col my-2 gap-y-3"
                  >
                    <Link
                      to={item.name}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="font-bold text-md text-white uppercase hover:text-bgprimary transition-all cursor-pointer  "
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </Transition>
      </div>
    </header>
  );
};

export default Navbar;
