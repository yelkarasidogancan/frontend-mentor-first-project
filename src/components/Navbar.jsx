import React, { useEffect, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";

import { Link } from "react-scroll";
import { navigationData } from "../data";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? "bg-bgcolor py-4 lg:py-6" : "bg-bgcolor"
      } fixed sm:px[15px] lg:px-[50px] w-full py-5 lg:py-9  z-10 transition-all duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* {logo} */}
          <h1 className="font-bold text-xl lg:text-3xl text-white">
            START BOOTSTRAP
          </h1>
          {/* {menu icon} */}
          <div
            // onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white lg:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
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
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
