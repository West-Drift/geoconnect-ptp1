import React from "react";
import { about, playIcon } from "../assets/assets";

const About = () => {
  return (
    <div className="my-25 mx-auto flex items-center justify-between w-9/10 px-8">
      <div className="w-2/5 relative">
        <img src={about} alt="" className="w-full rounded-lg" />
        <img
          src={playIcon}
          alt=""
          className="w-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
      <div className="w-7/12">
        <h3 className="font-semibold text-sm text-primary2">
          ABOUT GEOCONNECT
        </h3>
        <h2 className="text-4xl text-primary1 mt-2.5 mb-2.5 max-w-xs">
          Bridging Practical Knowledge in Geospatial Engineering
        </h2>
        <p className="text-primary3 mb-3.75">
          Address the lack of accessible and detailed information on specific
          practical aspects of geospatial engineering.
        </p>
        <p className="text-primary3 mb-3.75">
          Foster a collaborative platform for students and professionals to
          share experiences, challenges, and solutions.
        </p>
        <p className="text-primary3 mb-3.75">
          Provide insights into the integration of GIS, survey, and remote
          sensing technologies for comprehensive understanding.
        </p>
      </div>
    </div>
  );
};

export default About;
