import { React, useState, useEffect } from "react";
import { logo } from "../../assets/assets";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between ">
          <img
            src={logo}
            alt="logo"
            className="md: cursor-pointer w-32 h-auto rounded-lg"
          />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <Navlinks />
          <li>
            <Link to="/get-help">
              <button className="btn">Get Help</button>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <button className="btn">Search</button>
            </Link>
          </li>
          <li>
            <Link to="/sign-up">
              <button className="btn">Sign up</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* mobile nav */}
      <div>
        <ul
          className={`md:hidden absolute w-full h-full bottom-0 bg-white py-24 pl-4 transition duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <Navlinks />
          <div className="py-5">
            <li className="py-3">
              <Link to="/get-help">
                <button className="btn">Get Help</button>
              </Link>
            </li>
            <li className="py-3">
              <Link to="/search">
                <button className="btn">Search</button>
              </Link>
            </li>
            <li className="py-3">
              <Link to="/sign-up">
                <button className="btn">Sign up</button>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
