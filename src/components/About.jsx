import React from "react";
import { about, playIcon } from "../assets/assets";

const About = () => {
  return (
    <div className="my-24 mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-11/12 gap-10 px-12">
      <div className="w-full md:w-2/5 relative mt-4 md:mt-0">
        <img src={about} alt="" className="w-full rounded-lg" />
        <img
          src={playIcon}
          alt=""
          className="w-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
      <div className="w-full md:w-7/12">
        <h3 className="font-semibold md:text-xs lg:text-sm text-primary2">
          ABOUT GEOCONNECT
        </h3>
        <h2 className="text-2xl lg:text-4xl text-primary1 mt-3 mb-3 max-w-sm">
          Bridging Practical Knowledge in Geospatial Engineering
        </h2>
        <p className="text-primary3 mb-4">
          Address the lack of accessible and detailed information on specific
          practical aspects of geospatial engineering.
        </p>
        <p className="text-primary3 mb-4">
          Foster a collaborative platform for students and professionals to
          share experiences, challenges, and solutions.
        </p>
        <p className="text-primary3 mb-4">
          Provide insights into the integration of GIS, survey, and remote
          sensing technologies for comprehensive understanding.
        </p>
      </div>
    </div>
  );
};

export default About;
