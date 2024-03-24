import React, { useState, useEffect } from "react";
import { logo } from "../../assets/assets";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 100,
        color: "white",
      }}
      className={`container-nav ${sticky ? `dark-nav` : ""}`}
    >
      <div className="flex items-center font-medium md:justify-center xl:justify-between">
        <div className="z-200 p-4 md:w-auto w-full flex justify-between ">
          <img
            src={logo}
            alt="logo"
            className="md:flex-shrink-0 w-28 lg:w-32 h-auto rounded-lg"
          />
          <div
            className="z-50 text-3xl md:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul
          className="md:flex hidden items-center gap-0 lg:gap-2 xl:gap-6 md:pr-0  lg:pr-6 xl:pr-24
        md:space-x-0 lg:space-x-2  xl:space-x-4 text-sm lg:text-base"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <Navlinks />
          <li className="md:pr-4 lg:pr-0">
            <Link to="/get-help">Get Help </Link>
          </li>
          <li className="flex items-center space-x-0 lg:space-x-2 xl:space-x-4">
            <FiSearch className="mr-1 cursor-pointer" size={26} color="white" />
            <span className="border-l border-white h-6"></span>
            <Link to="/sign-in">
              <span className="ml-1">Sign in</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* mobile nav */}
      <div>
        <ul
          className={`md:hidden fixed w-full h-full top-0 overflow-y-auto py-24 pl-5 sidebar ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li className="py-3 px-3" onClick={closeMenu}>
            <FiSearch className="mr-2" size={26} color="white" />
          </li>
          <li onClick={closeMenu}>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <Navlinks closeMenu={closeMenu} />
          <div className="py-5">
            <li className="py-3 px-3 " onClick={closeMenu}>
              <Link to="/get-help">Get Help</Link>
            </li>

            <li className="py-3 px-3" onClick={closeMenu}>
              <Link to="/sign-in">Sign in</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
