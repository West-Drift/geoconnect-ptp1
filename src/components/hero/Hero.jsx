import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen bg--primary bg-cover flex items-center justify-center md:bg-top bg-center ">
      <div className="text-white justify-center text-center items-center  mx-auto w-3/4 space-y-8">
        <h1 className="text-4xl font-bold">
          Bridging Practical Knowledge in Geospatial Engineering
        </h1>
        <p className="text-lg">
          This is a Web development project that aims to equip geospatial
          engineers with necessary practical skills set with a focus on the
          fields of GIS and remote sensing and their related software. This
          project targets everyone who utilizes geospatial related software,
          especially students
        </p>
        <div className="text-xl">
          <Link className="" to="/get-help">
            <button className="btn dark-btn hover:bg-indigo-400">
              Ask Questions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
