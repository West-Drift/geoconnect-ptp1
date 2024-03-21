import React, { useState } from "react";
import { links } from "./Mylinks";
import { Link } from "react-router-dom";

const Navlinks = ({ closeMenu }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="text-white py-5 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-x1 md:hidden inline">
                <ion-icon
                  name={`${open ? "chevron-up" : "chevron-down"}`}
                ></ion-icon>
              </span>
              <span className="text-x1 md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:m-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                </div>
                <div
                  className={`text-black bg-white p-3.5 gap-8 rounded-lg ${
                    link.name === "Geospatial Equipment" ||
                    link.name === "Resources"
                      ? "grid grid-cols-2"
                      : "grid grid-cols-3"
                  }`}
                >
                  {link.sublinks.map((mysublinks) => (
                    <div key={mysublinks.Head} className="space-y-2">
                      <h1 className="text-sm font-semibold">
                        {mysublinks.Head}
                      </h1>
                      {mysublinks.sublink.map((slink) => (
                        <li key={slink.name} className="text-sm text-gray-600">
                          <Link
                            to={slink.link}
                            className="hover:text-purple-600"
                          >
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
                  ${heading === link.name ? "md:hidden" : "hidden"}`}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 text-sm font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}
                    <span className="text-x1 md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`
                  ${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li key={slink.name} className="py-3 pl-14">
                        <Link
                          to={slink.link}
                          className="hover:text-cyan-400"
                          onClick={closeMenu}
                        >
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
