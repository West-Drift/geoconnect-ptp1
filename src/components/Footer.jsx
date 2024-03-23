import React from "react";

const Footer = () => {
  return (
    <div
      className="my-5 mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-gray-400 
    sm:px-16 md:px-26 py-3 text-sm md:text-base"
    >
      <p className="text-center">@ 2024 GeoConnect. All rights reserved.</p>
      <ul className="flex justify-center space-x-5 mt-3 sm:mt-0">
        <li className="list-none inline-block ml-5">Terms of services</li>
        <li className="list-none inline-block ml-5">Privacy policy</li>
      </ul>
    </div>
  );
};

export default Footer;
