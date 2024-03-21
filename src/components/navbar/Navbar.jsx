import React, { useState, useEffect } from "react";
import { logo } from "../../assets/assets";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";

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
      <div className="flex items-center font-medium justify-between">
        <div className="z-200 p-4 md:w-auto w-full flex justify-between ">
          <img
            src={logo}
            alt="logo"
            className="md: cursor-pointer w-32 h-auto rounded-lg"
          />
          <div
            className="z-50 text-3xl md:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8 pr-12">
          <li>
            <Link to="/">Home</Link>
          </li>
          <Navlinks />
          <li>
            <Link to="/get-help">
              <button className="btn white-btn hover:bg-purple-300">
                Get Help
              </button>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <button className="btn white-btn hover:bg-purple-300">
                Search
              </button>
            </Link>
          </li>
          <li>
            <Link to="/sign-up">
              <button className="btn white-btn  hover:bg-purple-300">
                Sign up
              </button>
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
          <li onClick={closeMenu}>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <Navlinks closeMenu={closeMenu} />
          <div className="py-5">
            <li className="py-3" onClick={closeMenu}>
              <Link to="/get-help">
                <button className="btn white-btn  hover:bg-purple-300">
                  Get Help
                </button>
              </Link>
            </li>
            <li className="py-3" onClick={closeMenu}>
              <Link to="/search">
                <button className="btn white-btn hover:bg-purple-300">
                  Search
                </button>
              </Link>
            </li>
            <li className="py-3" onClick={closeMenu}>
              <Link to="/sign-up">
                <button className="btn white-btn hover:bg-purple-300">
                  Sign up
                </button>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
