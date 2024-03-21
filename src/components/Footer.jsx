import React from "react";

const Footer = () => {
  return (
    <div className="m-2.5 mx-auto flex items-center justify-between border-t border-gray-400 py-3.75 px-8">
      <p>@ 2024 GeoConnect. All rights reserved.</p>
      <ul className="flex space-x-5">
        <li className="list-none inline-block ml-5">Terms of services</li>
        <li className="list-none inline-block ml-5">Privacy policy</li>
      </ul>
    </div>
  );
};

export default Footer;
